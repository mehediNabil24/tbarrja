"use client";

import React, { useEffect } from "react";
import { Modal, Input, Form } from "antd";
import { toast } from "sonner";
import { useUpdateFaqMutation } from "@/redux/service/auth/faq/faqApi";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface FaqEditModalProps {
  visible: boolean;
  faq: FAQ;
  onClose: () => void;
  onSave: (faq: FAQ) => void;
}

const FaqEditModal: React.FC<FaqEditModalProps> = ({
  visible,
  faq,
  onClose,
  onSave,
}) => {
  const [form] = Form.useForm();
  const [updateFaq, { isLoading }] = useUpdateFaqMutation();

  useEffect(() => {
    if (visible) {
      form.setFieldsValue(faq);
    }
  }, [faq, visible, form]);

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      const payload = {
        id: faq.id,
        body: {
          question: values.question,
          answer: values.answer,
        },
      };

      await updateFaq(payload).unwrap();
      toast.success("FAQ updated successfully!");
      onSave({ ...faq, ...values });
    } catch (err) {
      toast.error("Failed to update FAQ");
      console.error(err);
    }
  };

  return (
    <Modal
      title="Edit FAQ"
      open={visible}
      onOk={handleOk}
      confirmLoading={isLoading}
      onCancel={onClose}
      okText="Update"
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
