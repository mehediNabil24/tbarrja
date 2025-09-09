// app/products/ReviewEditModal.tsx
"use client";

import React, { useState } from "react";
import { Modal, Input, Form, Upload, Avatar } from "antd";
import { PlusOutlined } from "@ant-design/icons";

interface Review {
  id: number;
  image: string;
  name: string;
  designation: string;
  company: string;
  review: string;
}

interface Props {
  visible: boolean;
  review: Review;
  onClose: () => void;
  onSave: (review: Review) => void;
}

const ReviewEditModal: React.FC<Props> = ({ visible, review, onClose, onSave }) => {
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState<string>(review.image || "");

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        onSave({ ...review, ...values, image: imageUrl });
        form.resetFields();
      })
      .catch(() => {});
  };

  // Handle file upload locally (convert to Base64)
  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImageUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
    return false; // prevent auto-upload
  };

  return (
    <Modal
      title={review.id ? "Edit Review" : "Add Review"}
      open={visible}
      onOk={handleOk}
      onCancel={onClose}
      okText="Save"
    >
      <Form form={form} layout="vertical" initialValues={review}>
        {/* Show current image + upload box */}
        <Form.Item label="Reviewer Image">
          <div className="flex items-center gap-4">
            {imageUrl ? (
              <Avatar src={imageUrl} size={64} />
            ) : (
              <Avatar size={64} icon={<PlusOutlined />} />
            )}
            <Upload
              showUploadList={false}
              beforeUpload={handleImageUpload}
              accept="image/*"
            >
              <div className="cursor-pointer px-3 py-2 border rounded-md hover:bg-gray-50">
                <PlusOutlined /> Upload
              </div>
            </Upload>
          </div>
        </Form.Item>

        <Form.Item
          name="name"
          label="Reviewer Name"
          rules={[{ required: true, message: "Please enter the name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="designation"
          label="Designation"
          rules={[{ required: true, message: "Please enter the designation" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="company"
          label="Company Name"
          rules={[{ required: true, message: "Please enter the company" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="review"
          label="Review"
          rules={[{ required: true, message: "Please enter the review" }]}
        >
          <Input.TextArea rows={3} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ReviewEditModal;
