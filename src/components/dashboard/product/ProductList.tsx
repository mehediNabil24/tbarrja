/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import { Table, Space, Button, Spin } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import ProductEditModal from "./EditProduct";
import { useRouter } from "next/navigation";

import { toast } from "sonner";
import { useGetProductQuery, useDeleteProductMutation } from "@/redux/service/auth/product/ProductApi";

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

const ProductList: React.FC = () => {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null); // track row being deleted

  // Fetch products from API
  const { data, isLoading, isError } = useGetProductQuery({});
  const [deleteProduct] = useDeleteProductMutation();

  useEffect(() => {
    if (data?.success) {
      setProducts(data.data);
    } else if (isError) {
      toast.error("Failed to fetch products.");
    }
  }, [data, isError]);

  // Delete product via API
  const handleDelete = async (id: string) => {
    try {
      setDeletingId(id); // set current deleting row
      await deleteProduct(id).unwrap();
      setProducts((prev) => prev.filter((p) => p.id !== id));
      toast.success("Product deleted successfully.");
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete product.");
    } finally {
      setDeletingId(null); // reset after deletion
    }
  };

  // Update product
  const handleUpdate = (updatedProduct: Product) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );
    setEditModalVisible(false);
    setSelectedProduct(null);
  };

  const columns = [
    { title: "Sl.", render: (_: any, __: any, index: number) => index + 1 },
    { title: "Date", dataIndex: "date", render: (date: string) => dayjs(date).format("DD, MMM YYYY") },
    { title: "Product Name", dataIndex: "name" },
    { title: "Monthly Avg", dataIndex: "monthlyAvg", render: (val: number) => `${val}%` },
    { title: "Daily Avg", dataIndex: "dailyAvg", render: (val: number) => `${val}%` },
    { title: "Equity Stop Loss", dataIndex: "equityStopLoss", render: (val: number) => `${val}%` },
    { title: "Avg Trade Length", dataIndex: "avgTradeLength" },
    { title: "Description", dataIndex: "description", render: (text: string) => <div dangerouslySetInnerHTML={{ __html: text }} /> },
    {
      title: "Action",
      render: (_: any, record: Product) => (
        <Space size="middle">
          <Button
            icon={<EditOutlined />}
            style={{ backgroundColor: "#FFA600", color: "#fff", border: "none" }}
            onClick={() => {
              setSelectedProduct(record);
              setEditModalVisible(true);
            }}
          />
          <Button
            icon={<DeleteOutlined />}
            danger
            loading={deletingId === record.id} // only show spinner for this row
            onClick={() => handleDelete(record.id)}
          />
        </Space>
      ),
    },
  ];

  if (isLoading) return <Spin tip="Loading products..." />;

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Product List</h2>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          style={{ backgroundColor: "#FFA600", border: "none", color: "black" }}
          onClick={() => router.push("/dashboard/addProduct")}
        >
          Add Product
        </Button>
      </div>

      <Table
        dataSource={products}
        columns={columns}
        rowKey="id"
        pagination={false}
      />

      {/* Edit Product Modal */}
      {selectedProduct && (
        <ProductEditModal
          visible={isEditModalVisible}
          product={selectedProduct}
          onClose={() => {
            setEditModalVisible(false);
            setSelectedProduct(null);
          }}
          onSave={handleUpdate}
        />
      )}
    </div>
  );
};

export default ProductList;
