/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { Table, Button, Space } from "antd";
import { EditOutlined } from "@ant-design/icons";
import InvestorEditModal from "./EditModal";


// Static data
const initialInvestors = [
  { id: 1, name: "Investor Login", address: "www.marakha.com" },

];

const InvestorAddressList: React.FC = () => {
  const [investors, setInvestors] = useState(initialInvestors);
  const [selectedInvestor, setSelectedInvestor] = useState<typeof initialInvestors[0] | null>(null);
  const [isEditModalVisible, setEditModalVisible] = useState(false);

  const handleUpdate = (updated: typeof initialInvestors[0]) => {
    setInvestors(investors.map((inv) => (inv.id === updated.id ? updated : inv)));
  };

  const columns = [
   
    { title: "Name", dataIndex: "name" },
    { title: "Address", dataIndex: "address" },
    {
      title: "Action",
      render: (_: any, record: typeof initialInvestors[0]) => (
        <Space>
          <Button
            icon={<EditOutlined />}
            type="primary"
            style={{ backgroundColor: "#FFA600", border: "none" ,color:"black" }}
            onClick={() => {
              setSelectedInvestor(record);
              setEditModalVisible(true);
            }}
          >
            
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Investor Login Addresses</h2>
      <Table dataSource={investors} columns={columns} rowKey="id" pagination={false} />

      {selectedInvestor && (
        <InvestorEditModal
          visible={isEditModalVisible}
          investor={selectedInvestor}
          onClose={() => setEditModalVisible(false)}
          onSave={handleUpdate}
        />
      )}
    </div>
  );
};

export default InvestorAddressList;
