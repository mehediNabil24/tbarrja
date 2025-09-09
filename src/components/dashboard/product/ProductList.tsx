/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { Table, Space, Modal, Button, Input, Pagination } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined, SearchOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import ProductEditModal from "./EditProduct";
import { useRouter } from "next/navigation";

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

// Static product data
const initialProducts: Product[] = [

  {
    id: 1,
    date: "2025-09-01",
    productName: "Product A",
    monthlyAvg: "1200",
    dailyAvg: "40",
    equityStopLoss: "5%",
    avgTradeLength: "2 days",
    description: "This is Product A description",
  },
  {
    id: 2,
    date: "2025-09-02",
    productName: "Product B",
    monthlyAvg: "1500",
    dailyAvg: "50",
    equityStopLoss: "3%",
    avgTradeLength: "1 day",
    description: "This is Product B description",
  },
  {
    id: 3,
    date: "2025-09-03",
    productName: "Product C",
    monthlyAvg: "1800",
    dailyAvg: "60",
    equityStopLoss: "4%",
    avgTradeLength: "3 days",
    description: "This is Product C description",
  },
];

const ProductList: React.FC = () => {
    const router = useRouter()
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [isAddModalVisible, setAddModalVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  // Delete product
  const handleDelete = (id: number) => {
    Modal.confirm({
      title: "Are you sure you want to delete this product?",
      onOk: () => setProducts(products.filter((p) => p.id !== id)),
    });
  };

  // Update product
  const handleUpdate = (updatedProduct: Product) => {
    setProducts(products.map((p) => (p.id === updatedProduct.id ? updatedProduct : p)));
    setEditModalVisible(false);
    setSelectedProduct(null);
  };

  // Add new product
  const handleAdd = (newProduct: Product) => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
    setAddModalVisible(false);
  };

  // Filtered products
  const filteredProducts = products.filter((p) =>
    p.productName.toLowerCase().includes(searchText.toLowerCase())
  );

  // Pagination slice
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const columns = [
    { title: "Sl.", render: (_: any, __: any, index: number) => index + 1 },
    { title: "Date", dataIndex: "date", render: (date: string) => dayjs(date).format("DD, MMM YYYY") },
    { title: "Product Name", dataIndex: "productName" },
    { title: "Monthly Avg", dataIndex: "monthlyAvg" },
    { title: "Daily Avg", dataIndex: "dailyAvg" },
    { title: "Equity Stop Loss", dataIndex: "equityStopLoss" },
    { title: "Avg Trade Length", dataIndex: "avgTradeLength" },
    { title: "Description", dataIndex: "description" },
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
        <h2 className="text-2xl font-bold text-gray-800">Product List</h2>
        <div className="flex gap-2">
          <Input
            placeholder="Search by product name"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: 200 }}
            prefix={<SearchOutlined />}
          />
          <Button
            type="primary"
            icon={<PlusOutlined />}
            style={{ backgroundColor: "#FFA600", border: "none", color: "black" }}
            onClick={() => router.push("/dashboard/addProduct")}
          >
            Add Product
          </Button>
        </div>
      </div>

      <Table
        dataSource={paginatedProducts}
        columns={columns}
        rowKey="id"
        pagination={false}
      />

      {/* Pagination for design purpose */}
      <div className="mt-4 flex justify-end">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={filteredProducts.length}
          onChange={setCurrentPage}
          showSizeChanger={false}
          style={{ backgroundColor: "", borderRadius: 4 }}
        />
      </div>

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

      {/* Add Product Modal */}
      {isAddModalVisible && (
        <ProductEditModal
          visible={isAddModalVisible}
          product={{
            id: 0,
            date: dayjs().format("YYYY-MM-DD"),
            productName: "",
            monthlyAvg: "",
            dailyAvg: "",
            equityStopLoss: "",
            avgTradeLength: "",
            description: "",
          }}
          onClose={() => setAddModalVisible(false)}
          onSave={handleAdd}
        />
      )}
    </div>
  );
};

export default ProductList;
