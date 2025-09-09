/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { Table, Space, Modal, Button, Pagination } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import PricingEditModal from "./EditPricing";
import { useRouter } from "next/navigation";


interface Pricing {
  id: number;
  equityRange: string;
  productType: string;
  subscription: string;
  basePrice: string;
  additionalLicenses: string;
}

// Static pricing data
const initialPricing: Pricing[] = [
  {
    id: 1,
    equityRange: "$5,000 - $50,000",
    productType: "FOREX EA",
    subscription: "3 Months",
    basePrice: "$1,000 (2 licenses)",
    additionalLicenses: "$400 (3-4 licenses), $300 (5+ licenses)",
  },
  {
    id: 2,
    equityRange: "$50,001 - $150,000",
    productType: "FOREX EA",
    subscription: "3 Months",
    basePrice: "$1,500 (2 licenses)",
    additionalLicenses: "$650 (3-4 licenses), $550 (5+ licenses)",
  },
  {
    id: 3,
    equityRange: "Unlimited",
    productType: "FOREX EA",
    subscription: "Lifetime",
    basePrice: "$25,000 (2 licenses)",
    additionalLicenses: "$10,000 (3-4 licenses)",
  },
];

const PricingList: React.FC = () => {
  const router = useRouter();
  const [pricing, setPricing] = useState<Pricing[]>(initialPricing);
  const [selectedPricing, setSelectedPricing] = useState<Pricing | null>(null);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [isAddModalVisible, setAddModalVisible] = useState(false);
  const [searchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  // Delete pricing
  const handleDelete = (id: number) => {
    Modal.confirm({
      title: "Are you sure you want to delete this pricing entry?",
      onOk: () => setPricing(pricing.filter((p) => p.id !== id)),
    });
  };

  // Update pricing
  const handleUpdate = (updated: Pricing) => {
    setPricing(pricing.map((p) => (p.id === updated.id ? updated : p)));
    setEditModalVisible(false);
    setSelectedPricing(null);
  };

  // Add new pricing
  const handleAdd = (newPricing: Pricing) => {
    setPricing([...pricing, { ...newPricing, id: pricing.length + 1 }]);
    setAddModalVisible(false);
  };

  // Filtered pricing
  const filteredPricing = pricing.filter((p) =>
    p.productType.toLowerCase().includes(searchText.toLowerCase())
  );

  // Pagination slice
  const paginatedPricing = filteredPricing.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const columns = [
    { title: "Sl.", render: (_: any, __: any, index: number) => index + 1 },
    { title: "Equity / Account Range", dataIndex: "equityRange" },
    { title: "Product Type", dataIndex: "productType" },
    { title: "Subscription", dataIndex: "subscription" },
    { title: "Base Price", dataIndex: "basePrice" },
    { title: "Additional Licenses / Accounts", dataIndex: "additionalLicenses" },
    {
      title: "Action",
      render: (_: any, record: Pricing) => (
        <Space size="middle">
          <Button
            icon={<EditOutlined />}
            style={{ backgroundColor: "#FFA600", color: "#fff", border: "none" }}
            onClick={() => {
              setSelectedPricing(record);
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
        <h2 className="text-2xl font-bold text-gray-800">Pricing List</h2>
        <div className="flex gap-2">
  
          <Button
            type="primary"
            icon={<PlusOutlined />}
            style={{ backgroundColor: "#FFA600", border: "none", color: "black" }}
           onClick={() => router.push("/dashboard/addPricing")}
          >
            Add Pricing
          </Button>
        </div>
      </div>

      <Table
        dataSource={paginatedPricing}
        columns={columns}
        rowKey="id"
        pagination={false}
      />

      {/* Pagination */}
      <div className="mt-4 flex justify-end">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={filteredPricing.length}
          onChange={setCurrentPage}
          showSizeChanger={false}
        />
      </div>

      {/* Edit Modal */}
      {selectedPricing && (
        <PricingEditModal
          visible={isEditModalVisible}
          pricing={selectedPricing}
          onClose={() => {
            setEditModalVisible(false);
            setSelectedPricing(null);
          }}
          onSave={handleUpdate}
        />
      )}

      {/* Add Modal */}
      {isAddModalVisible && (
        <PricingEditModal
          visible={isAddModalVisible}
          pricing={{
            id: 0,
            equityRange: "",
            productType: "",
            subscription: "",
            basePrice: "",
            additionalLicenses: "",
          }}
          onClose={() => setAddModalVisible(false)}
          onSave={handleAdd}
        />
      )}
    </div>
  );
};

export default PricingList;
