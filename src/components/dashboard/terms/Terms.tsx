"use client";

import React, { useState, useEffect } from "react";
import { Button, Spin } from "antd";
import { EditOutlined } from "@ant-design/icons";
import TermsEditModal from "./TermEdit";

import { toast } from "sonner";
import { useGetPrivacyQuery } from "@/redux/service/auth/privacy/privacyApi";

const TermsPage: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [content, setContent] = useState<string>("");

  const { data, isLoading, isError } = useGetPrivacyQuery({});

  // set the terms content when API loads
  useEffect(() => {
    if (data?.data?.termsAndCondition) {
      setContent(data.data.termsAndCondition);
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spin size="large" />
      </div>
    );
  }

  if (isError) {
    toast.error("Failed to load terms and conditions");
  }

  const handleUpdated = (newContent: string) => {
    setContent(newContent);
    setIsModalVisible(false);
  };

  return (
    <div className="p-4 rounded-md">
      {/* Header with Edit Button */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">
          Terms of Use & Condition of Sale
        </h2>
        <Button
          icon={<EditOutlined />}
          type="primary"
          style={{ backgroundColor: "#FFA600", color: "black", border: "none" }}
          onClick={() => setIsModalVisible(true)}
        >
          Edit
        </Button>
      </div>

      {/* Content Box */}
      <div
        className="rounded-md text-gray-700 prose max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      {/* Edit Modal */}
      <TermsEditModal
        visible={isModalVisible}
        content={content}
        onClose={() => setIsModalVisible(false)}
        onUpdated={handleUpdated}
      />
    </div>
  );
};

export default TermsPage;
