/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { Table, Space, Modal, Button } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import FaqEditModal from "./EditFaq";
import { useRouter } from "next/navigation";
import { useGetFaqQuery, useDeleteFaqMutation } from "@/redux/service/auth/faq/faqApi";
import { toast } from "sonner";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

const FaqList: React.FC = () => {
  const router = useRouter();
  const { data, isLoading } = useGetFaqQuery({});
  const [deleteFaq, { isLoading: isDeleting }] = useDeleteFaqMutation();
  const [selectedFaq, setSelectedFaq] = useState<FAQ | null>(null);
  const [isEditModalVisible, setEditModalVisible] = useState(false);

  const faqs: FAQ[] = data?.data || [];

  // Delete handler with confirmation modal
  const handleDelete = (id: string) => {
    Modal.confirm({
      title: "Are you sure you want to delete this FAQ?",
      okText: "Yes, Delete",
      okType: "danger",
      cancelText: "Cancel",
      onOk: async () => {
        try {
          await deleteFaq(id).unwrap();
          toast.success("FAQ deleted successfully!");
        } catch (err) {
          console.error(err);
          toast.error("Failed to delete FAQ");
        }
      },
    });
  };

  const handleUpdate = (_: FAQ) => {
    console.log(_)
    setEditModalVisible(false);
    setSelectedFaq(null);
    // You can optionally update local state here,
    // but RTK Query will auto-refetch due to invalidatesTags
  };

  const columns = [
    { title: "Sl.", render: (_: any, __: any, index: number) => index + 1 },
    { title: "Question", dataIndex: "question" },
    { title: "Answer", dataIndex: "answer" },
    {
      title: "Action",
      render: (_: any, record: FAQ) => (
        <Space size="middle">
          <Button
            icon={<EditOutlined />}
            style={{ backgroundColor: "#FFA600", color: "#fff", border: "none" }}
            onClick={() => {
              setSelectedFaq(record);
              setEditModalVisible(true);
            }}
          />
          <Button
            icon={<DeleteOutlined />}
            danger
            loading={isDeleting}
            onClick={() => handleDelete(record.id)}
          />
        </Space>
      ),
    },
  ];

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
        <h2 className="text-2xl font-bold text-gray-800">FAQ List</h2>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          style={{ backgroundColor: "#FFA600", border: "none", color: "black" }}
          onClick={() => router.push("/dashboard/addFaq")}
        >
          Add FAQ
        </Button>
      </div>

      {/* Table */}
      <Table
        dataSource={faqs}
        columns={columns}
        rowKey="id"
        loading={isLoading}
        pagination={false}
      />

      {/* Edit Modal */}
      {selectedFaq && (
        <FaqEditModal
          visible={isEditModalVisible}
          faq={selectedFaq}
          onClose={() => {
            setEditModalVisible(false);
            setSelectedFaq(null);
          }}
          onSave={handleUpdate}
        />
      )}
    </div>
  );
};

export default FaqList;
