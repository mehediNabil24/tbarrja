/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { Table, Button, Space } from "antd";
import { EditOutlined } from "@ant-design/icons";
import SocialEditModal from "./SocialEdit";


// Static data
const initialSocials = [
  { id: 1, name: "Facebook", url: "https://facebook.com", icon: "/icons/facebook.png" },
  { id: 2, name: "Twitter", url: "https://twitter.com", icon: "/icons/twitter.png" },
  { id: 3, name: "Instagram", url: "https://instagram.com", icon: "/icons/instagram.png" },
  { id: 4, name: "LinkedIn", url: "https://linkedin.com", icon: "/icons/linkedin.png" },
  { id: 5, name: "YouTube", url: "https://youtube.com", icon: "/icons/youtube.png" }, // Added YouTube
];


const SocialIconList: React.FC = () => {
  const [socials, setSocials] = useState(initialSocials);
  const [selectedSocial, setSelectedSocial] = useState<typeof initialSocials[0] | null>(null);
  const [isEditModalVisible, setEditModalVisible] = useState(false);

  const handleUpdate = (updated: typeof initialSocials[0]) => {
    setSocials(socials.map((s) => (s.id === updated.id ? updated : s)));
  };

  const columns = [
    { title: "Sl.", render: (_: any, __: any, index: number) => index + 1 },
    {
      title: "Icon",
      render: (_: any, record: typeof initialSocials[0]) => (
        <img src={record.icon} alt={record.name} className="w-8 h-8 rounded-full" />
      ),
    },
    { title: "Social Name", dataIndex: "name" },
    { title: "Address", dataIndex: "url" },
    {
      title: "Action",
      render: (_: any, record: typeof initialSocials[0]) => (
        <Space>
          <Button
            icon={<EditOutlined />}
            type="primary"
            style={{ backgroundColor: "#FFA600", border: "none" }}
            onClick={() => {
              setSelectedSocial(record);
              setEditModalVisible(true);
            }}
          />
        </Space>
      ),
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Social Icon List</h2>
      <Table dataSource={socials} columns={columns} rowKey="id" pagination={false} />

      {selectedSocial && (
        <SocialEditModal
          visible={isEditModalVisible}
          social={selectedSocial}
          onClose={() => setEditModalVisible(false)}
          onSave={handleUpdate}
        />
      )}
    </div>
  );
};

export default SocialIconList;
