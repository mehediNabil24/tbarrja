/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { Table, Space, Modal, Button,  Pagination } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import FaqEditModal from "./EditFaq";
import { useRouter } from "next/navigation";


interface FAQ {
  id: number;
  question: string;
  answer: string;
}

// ✅ Sample static FAQ list
const initialFaqs: FAQ[] = [
  { id: 1, question: "What is your refund policy?", answer: "We offer a 30-day refund policy for all purchases." },
  { id: 2, question: "How can I contact support?", answer: "You can reach out to support via email or live chat 24/7." },
  { id: 3, question: "Do you provide discounts?", answer: "Yes, we offer seasonal discounts and student discounts." },
];

const FaqList: React.FC = () => {
  const router = useRouter();
  const [faqs, setFaqs] = useState<FAQ[]>(initialFaqs);
  const [selectedFaq, setSelectedFaq] = useState<FAQ | null>(null);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [isAddModalVisible, setAddModalVisible] = useState(false);
  const [searchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  // Delete FAQ
  const handleDelete = (id: number) => {
    Modal.confirm({
      title: "Are you sure you want to delete this FAQ?",
      onOk: () => setFaqs(faqs.filter((f) => f.id !== id)),
    });
  };

  // Update FAQ
  const handleUpdate = (updated: FAQ) => {
    setFaqs(faqs.map((f) => (f.id === updated.id ? updated : f)));
    setEditModalVisible(false);
    setSelectedFaq(null);
  };

  // Add new FAQ
  const handleAdd = (newFaq: FAQ) => {
    setFaqs([...faqs, { ...newFaq, id: faqs.length + 1 }]);
    setAddModalVisible(false);
  };

  // Filtered FAQs
  const filteredFaqs = faqs.filter(
    (f) =>
      f.question.toLowerCase().includes(searchText.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchText.toLowerCase())
  );

  // Pagination slice
  const paginatedFaqs = filteredFaqs.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

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
        <h2 className="text-2xl font-bold text-gray-800">FAQ List</h2>
        <div className="flex gap-2">
     
          <Button
            type="primary"
            icon={<PlusOutlined />}
            style={{ backgroundColor: "#FFA600", border: "none", color: "black" }}
            onClick={() => router.push("/dashboard/addFaq")}
          >
            Add FAQ
          </Button>
        </div>
      </div>

      {/* FAQ Table */}
      <Table
        dataSource={paginatedFaqs}
        columns={columns}
        rowKey="id"
        pagination={false}
      />

      {/* Pagination */}
      <div className="mt-4 flex justify-end">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={filteredFaqs.length}
          onChange={setCurrentPage}
          showSizeChanger={false}
        />
      </div>

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

      {/* Add Modal */}
      {isAddModalVisible && (
        <FaqEditModal
          visible={isAddModalVisible}
          faq={{ id: 0, question: "", answer: "" }}
          onClose={() => setAddModalVisible(false)}
          onSave={handleAdd}
        />
      )}
    </div>
  );
};

export default FaqList;
