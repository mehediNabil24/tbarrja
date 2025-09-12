"use client";

import 'antd/dist/reset.css';
import React, { useEffect, useState } from "react";
import { Table, Space, Button, Modal, Spin } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import PricingEditModal from "./EditPricing";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useDeletePricingMutation, useGetPricingQuery } from "@/redux/service/auth/price/priceApi";

interface Pricing {
  id: string;
  equityRange: string;
  productType: string;
  subscription: string;
  basePrice: string;
  additionalLicenses: string;
}

const PricingList: React.FC = () => {
  const router = useRouter();
  const [pricing, setPricing] = useState<Pricing[]>([]);
  const [selectedPricing, setSelectedPricing] = useState<Pricing | null>(null);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const { data, isLoading, isError } = useGetPricingQuery({});
  const [deletePricing, { isLoading: isDeleting }] = useDeletePricingMutation();

  useEffect(() => {
    if (data?.success) {
      setPricing(data.data);
    } else if (isError) {
      toast.error("Failed to fetch pricing list.");
    }
  }, [data, isError]);

  const handleDelete = async (id: string) => {
    setDeletingId(id);
    Modal.confirm({
      title: "Are you sure you want to delete this pricing entry?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      async onOk() {
        try {
          const result = await deletePricing(id).unwrap();
          console.log("Delete result:", result);

          if (result?.success || result?.status === 200 || result?.deleted) {
            setPricing((prev) => prev.filter((p) => p.id !== id));
            toast.success("Pricing deleted successfully!");
          } else {
            toast.error(result?.message || "Delete operation failed.");
          }
        } catch (err: any) {
          console.error("Delete error:", err);
          toast.error(err?.data?.message || "Failed to delete pricing.");
        } finally {
          setDeletingId(null);
        }
      },
      onCancel() {
        setDeletingId(null);
        console.log("Delete cancelled");
      },
    });
  };

  // ... rest of the component remains the same



  const handleUpdate = (updated: Pricing) => {
    setPricing((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
    setEditModalVisible(false);
    setSelectedPricing(null);
  };

  const columns = [
    { 
      title: "Sl.", 
      render: (_: any, __: any, index: number) => index + 1,
      key: 'index' 
    },
    { 
      title: "Equity / Account Range", 
      dataIndex: "equityRange",
      key: 'equityRange' 
    },
    { 
      title: "Product Type", 
      dataIndex: "productType",
      key: 'productType' 
    },
    { 
      title: "Subscription", 
      dataIndex: "subscription",
      key: 'subscription' 
    },
    { 
      title: "Base Price", 
      dataIndex: "basePrice",
      key: 'basePrice' 
    },
    { 
      title: "Additional Licenses / Accounts", 
      dataIndex: "additionalLicenses",
      key: 'additionalLicenses' 
    },
    {
      title: "Action",
      key: 'action',
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

  if (isLoading) return <Spin tip="Loading pricing list..." />;

  return (
    <div className="p-4">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
        <h2 className="text-2xl font-bold text-gray-800">Pricing List</h2>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          style={{ backgroundColor: "#FFA600", border: "none", color: "black" }}
          onClick={() => router.push('/pricing/add')} // Consider using a proper add route
        >
          Add Pricing
        </Button>
      </div>

      <Table
        dataSource={pricing}
        columns={columns}
        rowKey="id"
        pagination={false}
      />

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
    </div>
  );
};

export default PricingList;