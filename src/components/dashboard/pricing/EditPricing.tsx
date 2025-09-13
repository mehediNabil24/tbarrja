/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import { Modal, Form, Input, Spin } from "antd";
import { toast } from "sonner";
import { useUpdatePricingMutation } from "@/redux/service/auth/price/priceApi";

interface Pricing {
  id: string;
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
  const [updatePricing, { isLoading }] = useUpdatePricingMutation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (pricing) {
      form.setFieldsValue(pricing);
    }
  }, [pricing, form]);

 const handleOk = async () => {
  try {
    const values = await form.validateFields();
    setLoading(true);

    // Corrected: wrap values in 'body'
    const result = await updatePricing({ id: pricing.id, body: values }).unwrap();

    toast.success("Pricing updated successfully!");
    onSave(result);
    form.resetFields();
    onClose();
  } catch (err: any) {
    console.error("Update error:", err);
    toast.error(err?.data?.message || "Failed to update pricing.");
  } finally {
    setLoading(false);
  }
};


  return (
    <Modal
      title={pricing.id ? "Edit Pricing" : "Add Pricing"}
      open={visible}
      onOk={handleOk}
      onCancel={onClose}
      okText="Save"
      cancelText="Cancel"
      confirmLoading={loading || isLoading}
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

      {loading && (
        <div className="text-center mt-2">
          <Spin tip="Updating pricing..." />
        </div>
      )}
    </Modal>
  );
};

export default PricingEditModal;
