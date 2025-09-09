/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { Table, Space, Modal, Button, Pagination, Avatar } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined, } from "@ant-design/icons";
import ReviewEditModal from "./ReviewEditModal";
import { useRouter } from "next/navigation";


interface Review {
  id: number;
  image: string;
  name: string;
  designation: string;
  company: string;
  review: string;
}

const initialReviews: Review[] = [
  {
    id: 1,
    image: "https://i.pravatar.cc/100?img=1",
    name: "John Doe",
    designation: "Software Engineer",
    company: "Google",
    review: "This product is amazing, it really improved my workflow!",
  },
  {
    id: 2,
    image: "https://i.pravatar.cc/100?img=2",
    name: "Jane Smith",
    designation: "Product Manager",
    company: "Microsoft",
    review: "Great value for money. Highly recommended!",
  },
];

const ReviewList: React.FC = () => {
  const router = useRouter();
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [isAddModalVisible, setAddModalVisible] = useState(false);
  const [searchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  // Delete review
  const handleDelete = (id: number) => {
    Modal.confirm({
      title: "Are you sure you want to delete this review?",
      onOk: () => setReviews(reviews.filter((r) => r.id !== id)),
    });
  };

  // Update review
  const handleUpdate = (updated: Review) => {
    setReviews(reviews.map((r) => (r.id === updated.id ? updated : r)));
    setEditModalVisible(false);
    setSelectedReview(null);
  };

  // Add review
  const handleAdd = (newReview: Review) => {
    setReviews([...reviews, { ...newReview, id: reviews.length + 1 }]);
    setAddModalVisible(false);
  };

  // Filtered reviews
  const filteredReviews = reviews.filter((r) =>
    r.name.toLowerCase().includes(searchText.toLowerCase())
  );

  // Paginate
  const paginatedReviews = filteredReviews.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const columns = [
    { title: "Sl.", render: (_: any, __: any, index: number) => index + 1 },
    {
      title: "Image",
      dataIndex: "image",
      render: (image: string) => <Avatar src={image} size={50} />,
    },
    { title: "Name", dataIndex: "name" },
    { title: "Designation", dataIndex: "designation" },
    { title: "Company", dataIndex: "company" },
    { title: "Review", dataIndex: "review" },
    {
      title: "Action",
      render: (_: any, record: Review) => (
        <Space size="middle">
          <Button
            icon={<EditOutlined />}
            style={{ backgroundColor: "#FFA600", color: "#fff", border: "none" }}
            onClick={() => {
              setSelectedReview(record);
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
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
        <h2 className="text-2xl font-bold text-gray-800">Review List</h2>
        <div className="flex gap-2">
       
          <Button
            type="primary"
            icon={<PlusOutlined />}
            style={{ backgroundColor: "#FFA600", border: "none", color: "black" }}
            onClick={() => router.push("/dashboard/addReview")}
          >
            Add Review
          </Button>
        </div>
      </div>

      {/* Table */}
      <Table
        dataSource={paginatedReviews}
        columns={columns}
        rowKey="id"
        pagination={false}
      />

      {/* Pagination */}
      <div className="mt-4 flex justify-end">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={filteredReviews.length}
          onChange={setCurrentPage}
          showSizeChanger={false}
        />
      </div>

      {/* Edit Modal */}
      {selectedReview && (
        <ReviewEditModal
          visible={isEditModalVisible}
          review={selectedReview}
          onClose={() => {
            setEditModalVisible(false);
            setSelectedReview(null);
          }}
          onSave={handleUpdate}
        />
      )}

      {/* Add Modal */}
      {isAddModalVisible && (
        <ReviewEditModal
          visible={isAddModalVisible}
          review={{
            id: 0,
            image: "",
            name: "",
            designation: "",
            company: "",
            review: "",
          }}
          onClose={() => setAddModalVisible(false)}
          onSave={handleAdd}
        />
      )}
    </div>
  );
};

export default ReviewList;
