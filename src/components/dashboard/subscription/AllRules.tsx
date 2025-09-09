"use client";

import React, { useState } from "react";
import { Table, Space, Modal, Button, Input, Pagination } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined, SearchOutlined } from "@ant-design/icons";
import SubscriptionEditModal from "./RuleModal";


interface SubscriptionRule {
  id: number;
  rule: string;
}

// ✅ Sample static subscription rules
const initialRules: SubscriptionRule[] = [
  { id: 1, rule: "3 Months subscription with auto renewal" },
  { id: 2, rule: "Lifetime subscription with one-time payment" },
  { id: 3, rule: "6 Months subscription with 10% discount" },
];

const SubscriptionList: React.FC = () => {
  const [rules, setRules] = useState<SubscriptionRule[]>(initialRules);
  const [selectedRule, setSelectedRule] = useState<SubscriptionRule | null>(null);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [isAddModalVisible, setAddModalVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  // Delete rule
  const handleDelete = (id: number) => {
    Modal.confirm({
      title: "Are you sure you want to delete this subscription rule?",
      onOk: () => setRules(rules.filter((r) => r.id !== id)),
    });
  };

  // Update rule
  const handleUpdate = (updated: SubscriptionRule) => {
    setRules(rules.map((r) => (r.id === updated.id ? updated : r)));
    setEditModalVisible(false);
    setSelectedRule(null);
  };

  // Add new rule
  const handleAdd = (newRule: SubscriptionRule) => {
    setRules([...rules, { ...newRule, id: rules.length + 1 }]);
    setAddModalVisible(false);
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
    { title: "Sl.", render: (_: any, __: any, index: number) => index + 1 },
    { title: "Subscription Rule", dataIndex: "rule" },
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
          />
          <Button
            icon={<DeleteOutlined />}
            danger
            onClick={() => handleDelete(record.id)}
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
          <Input
            placeholder="Search subscription rules"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: 260 }}
            prefix={<SearchOutlined />}
          />
          <Button
            type="primary"
            icon={<PlusOutlined />}
            style={{ backgroundColor: "#FFA600", border: "none", color: "#fff" }}
            onClick={() => setAddModalVisible(true)}
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
      />

      {/* Pagination */}
      <div className="mt-4 flex justify-end">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={filteredRules.length}
          onChange={setCurrentPage}
          showSizeChanger={false}
        />
      </div>

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

      {/* Add Modal */}
      {isAddModalVisible && (
        <SubscriptionEditModal
          visible={isAddModalVisible}
          rule={{ id: 0, rule: "" }}
          onClose={() => setAddModalVisible(false)}
          onSave={handleAdd}
        />
      )}
    </div>
  );
};

export default SubscriptionList;
