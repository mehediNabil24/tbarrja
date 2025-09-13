"use client";

import React, { useState, useEffect } from "react";
import { Button, Spin } from "antd";
import { EditOutlined } from "@ant-design/icons";
// import TermsEditModal from "../terms/TermEdit";
import { useGetPrivacyQuery } from "@/redux/service/auth/privacy/privacyApi";
import PrivacyEditModal from "./EditPrivacy";


const PrivacyPage: React.FC = () => {
  const { data, isLoading } = useGetPrivacyQuery({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [content, setContent] = useState("");

  useEffect(() => {
    if (data?.data?.privacyPolicy) {
      setContent(data.data.privacyPolicy);
    }
  }, [data]);

  const handleUpdated = (newContent: string) => {
    setContent(newContent);
    setIsModalVisible(false);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="p-4 rounded-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Privacy Policy</h2>
        <Button
          icon={<EditOutlined />}
          type="primary"
          style={{ backgroundColor: "#FFA600", color: "black", border: "none" }}
          onClick={() => setIsModalVisible(true)}
        >
          Edit
        </Button>
      </div>

      {/* Content */}
      <div
        className="rounded-md text-gray-700 prose max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      {/* Edit Modal */}
      <PrivacyEditModal
        visible={isModalVisible}
        content={content}
        onClose={() => setIsModalVisible(false)}
        onUpdated={handleUpdated}
      />
    </div>
  );
};

export default PrivacyPage;
