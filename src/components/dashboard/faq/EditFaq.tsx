"use client";

import React, {  useEffect } from "react";
import { Modal, Input, Form } from "antd";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

interface FaqEditModalProps {
  visible: boolean;
  faq: FAQ;
  onClose: () => void;
  onSave: (faq: FAQ) => void;
}

const FaqEditModal: React.FC<FaqEditModalProps> = ({ visible, faq, onClose, onSave }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (visible) {
      form.setFieldsValue(faq);
    }
  }, [faq, visible, form]);

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        onSave({ ...faq, ...values });
      })
      .catch(() => {});
  };

  return (
    <Modal
      title={faq.id === 0 ? "Add FAQ" : "Edit FAQ"}
      open={visible}
      onOk={handleOk}
      onCancel={onClose}
      okText={faq.id === 0 ? "Add" : "Update"}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="question"
          label="Question"
          rules={[{ required: true, message: "Please enter the question" }]}
        >
          <Input placeholder="Enter question" />
        </Form.Item>
        <Form.Item
          name="answer"
          label="Answer"
          rules={[{ required: true, message: "Please enter the answer" }]}
        >
          <Input.TextArea rows={3} placeholder="Enter answer" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default FaqEditModal;
