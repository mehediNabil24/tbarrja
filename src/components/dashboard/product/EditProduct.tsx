// app/products/EditProduct.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Modal, Input } from "antd";
import dayjs from "dayjs";

interface Product {
  id: number;
  date: string;
  productName: string;
  monthlyAvg: string;
  dailyAvg: string;
  equityStopLoss: string;
  avgTradeLength: string;
  description: string;
}

interface Props {
  visible: boolean;
  product: Product;
  onClose: () => void;
  onSave: (product: Product) => void;
}

const ProductEditModal: React.FC<Props> = ({ visible, product, onClose, onSave }) => {
  const [formData, setFormData] = useState<Product>({ ...product });

  useEffect(() => {
    setFormData({ ...product });
  }, [product]);

  return (
    <Modal
      title={product.id === 0 ? "Add Product" : "Edit Product"}
      open={visible}
      onCancel={onClose}
      onOk={() => onSave(formData)}
      okText="Save"
      cancelText="Cancel"
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
            value={formData.productName}
            onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
          />
        </div>

        <div>
          <label>Monthly Avg</label>
          <Input
            value={formData.monthlyAvg}
            onChange={(e) => setFormData({ ...formData, monthlyAvg: e.target.value })}
          />
        </div>

        <div>
          <label>Daily Avg</label>
          <Input
            value={formData.dailyAvg}
            onChange={(e) => setFormData({ ...formData, dailyAvg: e.target.value })}
          />
        </div>

        <div>
          <label>Equity Stop Loss</label>
          <Input
            value={formData.equityStopLoss}
            onChange={(e) => setFormData({ ...formData, equityStopLoss: e.target.value })}
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
