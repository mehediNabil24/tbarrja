"use client";

import React, { useState } from "react";
import { Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
import TermsEditModal from "./TermEdit";

// Example content with HTML
const sampleContent = `
<p><strong>Welcome to our platform.</strong> These <em>Terms of Use & Condition of Sale</em> 
govern your use of our website and services.</p>
<p>By accessing or using our platform, you agree to comply with and be bound by these terms. 
We reserve the right to <strong>update</strong>, modify, or change these terms at any time without prior notice.</p>
<p>Our services are intended for individuals over the age of 18, and you must provide accurate information when registering. 
Please read these terms carefully before proceeding. Thank you for choosing us! </p>
<p>IMPORTANT – PLEASE CAREFULLY READ AND UNDERSTAND OUR TERMS OF USE AND CONDITIONS OF SALE (“TERMS” OR “AGREEMENT”) BEFORE ACCESSING OR USING, OR PLACING AN ORDER THROUGH OUR SITE. THESE TERMS CONTAIN DISCLAIMERS OF WARRANTIES AND LIMITATIONS OF LIABILITIES (SEE SECTIONS 15 AND 16). THESE TERMS FORM AN ESSENTIAL BASIS OF OUR AGREEMENT.</p>

<p>Your use of www.fintechstrategies.ai and/or www.thetradinghub.com including any subdomains thereof, affiliated websites, and mobile applications (collectively, the “Site”), which are owned and maintained by FINTECH STRATEGIES, LLC (“Fintech Strategies,” “we,” “our,” “us”), are governed by the policies, terms, and conditions set forth below. Please read our terms carefully. We offer the Site, including all information, tools, products, and services available from the Site to you, the user, conditioned upon your acceptance of all terms, conditions, policies, and notices stated here. By accessing, using, or placing an order over the Site, you agree to the terms set forth herein. If you do not agree to these terms and conditions in their entirety, you are not authorized to use the Site in any manner or form whatsoever.</p>

<p>THIS AGREEMENT CONTAINS ARBITRATION AND CLASS ACTION WAIVER PROVISIONS THAT WAIVE YOUR RIGHT TO A COURT HEARING, RIGHT TO A JURY TRIAL, AND RIGHT TO PARTICIPATE IN A CLASS ACTION. ARBITRATION IS MANDATORY AND IS THE EXCLUSIVE REMEDY FOR ANY AND ALL DISPUTES UNLESS SPECIFIED BELOW IN SECTION 17 OR IF YOU OPT-OUT. PLEASE CAREFULLY REVIEW THE DISPUTE RESOLUTION PROVISIONS IN SECTION 17 BELOW WHICH DESCRIBES YOUR RIGHT TO OPT-OUT.</P>

<p>You can review the most current version of the Terms at any time on this page (Terms and Conditions | THE TRADING HUB / FINTECH STRATEGIES). We reserve the right to update, change, or replace any part of these Terms by posting updates and/or changes to our Site. It is your responsibility to check this page periodically for changes. </p>

<p>YOUR CONTINUED USE OF OR ACCESS TO THE SITE FOLLOWING THE POSTING OF ANY CHANGES CONSTITUTES BINDING ACCEPTANCE OF THOSE CHANGES.</p>
`;

const TermsPage: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [content, setContent] = useState(sampleContent);

  const handleUpdated = (newContent: string) => {
    setContent(newContent);
    setIsModalVisible(false);
  };

  return (
    <div className="p-4  rounded-md">
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
        className="  rounded-md  text-gray-700 prose max-w-none"
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
