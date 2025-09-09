"use client";

import React, { useState } from "react";
import { Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
import TermsEditModal from "../terms/TermEdit";


// Example content with HTML for Privacy Policy
const sampleContent = `
<p><strong>Privacy Policy</strong></p>
<p>Your privacy is important to us. This Privacy Policy explains how FINTECH STRATEGIES, LLC (“we”, “our”, “us”) collects, uses, and protects your information when you visit www.fintechstrategies.ai, www.thetradinghub.com, and any affiliated websites or mobile applications (collectively, the “Site”).</p>
<p>We collect personal information that you voluntarily provide when using the Site, including but not limited to your name, email, phone number, and payment details. We may also collect non-personal information automatically, such as your IP address, browser type, and usage data.</p>
<p>We use your information to provide services, improve the Site, process transactions, send important updates, and for other purposes disclosed at the time of collection. We will not sell or rent your personal information to third parties.</p>
<p>By using our Site, you consent to our collection and use of information in accordance with this Privacy Policy. You may access, correct, or delete your personal information by contacting us.</p>
<p>We implement reasonable security measures to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure.</p>
<p>We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page, and your continued use of the Site constitutes acceptance of those changes.</p>
`;

const PrivacyPage: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [content, setContent] = useState(sampleContent);

  const handleUpdated = (newContent: string) => {
    setContent(newContent);
    setIsModalVisible(false);
  };

  return (
    <div className="p-4   rounded-md">
      {/* Header with Edit Button */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Privacy Policy</h2>
        <Button
          icon={<EditOutlined />}
          type="primary"
          style={{ backgroundColor: "#FFA600", color:"black", border: "none" }}
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

export default PrivacyPage;
