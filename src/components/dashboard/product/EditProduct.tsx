// app/products/EditProduct.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Modal, Input } from "antd";
import dayjs from "dayjs";
import { toast } from "sonner";
import { useUpdateProductMutation } from "@/redux/service/auth/product/ProductApi"; // import mutation

interface Product {
  id: string;
  date: string;
  name: string;
  monthlyAvg: number;
  dailyAvg: number;
  equityStopLoss: number;
  avgTradeLength: string;
  description: string;
}

interface Props {
  visible: boolean;
  product: Product;
  onClose: () => void;
  onSave: (product: Product) => void; // callback to update UI
}

const ProductEditModal: React.FC<Props> = ({ visible, product, onClose, onSave }) => {
  const [formData, setFormData] = useState<Product>({ ...product });
  const [updateProduct, { isLoading }] = useUpdateProductMutation(); // RTK Query mutation

  useEffect(() => {
    setFormData({ ...product });
  }, [product]);

  const handleNumberChange = (key: keyof Product, value: string) => {
    setFormData({
      ...formData,
      [key]: Number(value),
    });
  };

 const handleSave = async () => {
  try {
    // Format date to ISO string for backend
    const payload = {
      ...formData,
      date: new Date(formData.date).toISOString(),
    };

    // Use 'body' instead of 'data'
    await updateProduct({ id: formData.id, body: payload }).unwrap();

    toast.success("Product updated successfully!");
    onSave(formData); // update UI locally
    onClose(); // close modal
  } catch (err) {
    console.error(err);
    toast.error("Failed to update product.");
  }
};


  return (
    <Modal
      title={product.id === "0" ? "Add Product" : "Edit Product"}
      open={visible}
      onCancel={onClose}
      onOk={handleSave}
      okText="Save"
      cancelText="Cancel"
      confirmLoading={isLoading} // show spinner while saving
    >
      <div className="space-y-3">
        <div>
          <label>Date</label>
          <Input
            type="date"
            value={dayjs(formData.date).format("YYYY-MM-DD")}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
        </div>

        <div>
          <label>Product Name</label>
          <Input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div>
          <label>Monthly Avg (%)</label>
          <Input
            type="number"
            value={formData.monthlyAvg}
            onChange={(e) => handleNumberChange("monthlyAvg", e.target.value)}
          />
        </div>

        <div>
          <label>Daily Avg (%)</label>
          <Input
            type="number"
            value={formData.dailyAvg}
            onChange={(e) => handleNumberChange("dailyAvg", e.target.value)}
          />
        </div>

        <div>
          <label>Equity Stop Loss (%)</label>
          <Input
            type="number"
            value={formData.equityStopLoss}
            onChange={(e) => handleNumberChange("equityStopLoss", e.target.value)}
          />
        </div>

        <div>
          <label>Avg Trade Length</label>
          <Input
            value={formData.avgTradeLength}
            onChange={(e) => setFormData({ ...formData, avgTradeLength: e.target.value })}
          />
        </div>

        <div>
          <label>Description</label>
          <Input.TextArea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={4}
          />
        </div>
      </div>
    </Modal>
  );
};

export default ProductEditModal;
