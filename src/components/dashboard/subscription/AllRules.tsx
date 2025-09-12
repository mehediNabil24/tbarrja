/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import { Table, Space, Modal, Button, Pagination, message } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import SubscriptionEditModal from "./RuleModal";
import { useRouter } from "next/navigation";
import { useDeleteRuleMutation, useGetRuleQuery } from "@/redux/service/auth/rule/ruleApi";


interface SubscriptionRule {
  id: string;
  rule: string;
  createdAt?: string;
  updatedAt?: string;
}

const SubscriptionList: React.FC = () => {
  const router = useRouter();
  const [selectedRule, setSelectedRule] = useState<SubscriptionRule | null>(null);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [searchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  // API hooks
  const { data: rulesData, isLoading, error, refetch } = useGetRuleQuery({});
  const [deleteRule, { isLoading: isDeleting }] = useDeleteRuleMutation();

  // Extract rules from API response
  const rules: SubscriptionRule[] = rulesData?.data || [];

  // Handle API error
  useEffect(() => {
    if (error) {
      message.error("Failed to fetch subscription rules");
    }
  }, [error]);

  // Delete rule
  const handleDelete = async (id: string) => {
    Modal.confirm({
      title: "Are you sure you want to delete this subscription rule?",
      onOk: async () => {
        try {
          await deleteRule(id).unwrap();
          message.success("Rule deleted successfully");
          refetch(); // Refetch the rules after deletion
        } catch (error) {
          message.error("Failed to delete rule");
        }
      },
    });
  };

  // Update rule (after successful edit)
  const handleUpdate = () => {
    setEditModalVisible(false);
    setSelectedRule(null);
    refetch(); // Refetch to get updated data
  };

  // Filtered rules
  const filteredRules = rules.filter((r) =>
    r.rule.toLowerCase().includes(searchText.toLowerCase())
  );

  // Pagination slice
  const paginatedRules = filteredRules.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const columns = [
    { 
      title: "Sl.", 
      render: (_: any, __: any, index: number) => 
        (currentPage - 1) * pageSize + index + 1 
    },
    { title: "Subscription Rule", dataIndex: "rule" },
    {
      title: "Created At",
      dataIndex: "createdAt",
      render: (date: string) => new Date(date).toLocaleDateString(),
    },
    {
      title: "Action",
      render: (_: any, record: SubscriptionRule) => (
        <Space size="middle">
          <Button
            icon={<EditOutlined />}
            style={{ backgroundColor: "#FFA600", color: "#fff", border: "none" }}
            onClick={() => {
              setSelectedRule(record);
              setEditModalVisible(true);
            }}
            disabled={isDeleting}
          />
          <Button
            icon={<DeleteOutlined />}
            danger
            onClick={() => handleDelete(record.id)}
            loading={isDeleting}
            disabled={isDeleting}
          />
        </Space>
      ),
    },
  ];

  return (
    <div className="p-4">
      {/* Header with title, search, and add button */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
        <h2 className="text-2xl font-bold text-gray-800">All Subscription Rules</h2>
        <div className="flex gap-2">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            style={{ backgroundColor: "#FFA600", border: "none", color: "black" }}
            onClick={() => router.push("/dashboard/addRule")}
          >
            Add Rule
          </Button>
        </div>
      </div>

      {/* Subscription Rules Table */}
      <Table
        dataSource={paginatedRules}
        columns={columns}
        rowKey="id"
        pagination={false}
        loading={isLoading}
      />

     

      {/* Edit Modal */}
      {selectedRule && (
        <SubscriptionEditModal
          visible={isEditModalVisible}
          rule={selectedRule}
          onClose={() => {
            setEditModalVisible(false);
            setSelectedRule(null);
          }}
          onSave={handleUpdate}
        />
      )}
    </div>
  );
};

export default SubscriptionList;