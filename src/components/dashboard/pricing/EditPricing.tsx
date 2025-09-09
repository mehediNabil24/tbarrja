// app/products/PricingEditModal.tsx
"use client";

import React, { useEffect } from "react";
import { Modal, Form, Input } from "antd";

interface Pricing {
  id: number;
  equityRange: string;
  productType: string;
  subscription: string;
  basePrice: string;
  additionalLicenses: string;
}

interface Props {
  visible: boolean;
  pricing: Pricing;
  onClose: () => void;
  onSave: (updatedPricing: Pricing) => void;
}

const PricingEditModal: React.FC<Props> = ({
  visible,
  pricing,
  onClose,
  onSave,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (pricing) {
      form.setFieldsValue(pricing);
    }
  }, [pricing, form]);

  const handleOk = () => {
    form.validateFields().then((values) => {
      onSave({ ...pricing, ...values });
      form.resetFields();
    });
  };

  return (
    <Modal
      title={pricing.id ? "Edit Pricing" : "Add Pricing"}
      open={visible}
      onOk={handleOk}
      onCancel={onClose}
      okText="Save"
      cancelText="Cancel"
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label="Equity / Account Range"
          name="equityRange"
          rules={[{ required: true, message: "Please enter equity range" }]}
        >
          <Input placeholder="e.g. $5,000 - $50,000" />
        </Form.Item>

        <Form.Item
          label="Product Type"
          name="productType"
          rules={[{ required: true, message: "Please enter product type" }]}
        >
          <Input placeholder="e.g. FOREX EA" />
        </Form.Item>

        <Form.Item
          label="Subscription"
          name="subscription"
          rules={[{ required: true, message: "Please enter subscription" }]}
        >
          <Input placeholder="e.g. 3 Months / Lifetime" />
        </Form.Item>

        <Form.Item
          label="Base Price"
          name="basePrice"
          rules={[{ required: true, message: "Please enter base price" }]}
        >
          <Input placeholder="e.g. $1,000 (2 licenses)" />
        </Form.Item>

        <Form.Item
          label="Additional Licenses / Accounts"
          name="additionalLicenses"
          rules={[
            { required: true, message: "Please enter additional license pricing" },
          ]}
        >
          <Input placeholder="e.g. $400 (3-4 licenses), $300 (5+ licenses)" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default PricingEditModal;
