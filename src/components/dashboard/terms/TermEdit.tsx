"use client";

import React, { useState, useEffect } from "react";
import { Modal, Button } from "antd";
import JoditEditor from "jodit-react";

import { toast } from "sonner";
import { useUpdatePrivacyMutation } from "@/redux/service/auth/privacy/privacyApi";

interface TermsEditModalProps {
  visible: boolean;
  content: string;
  onClose: () => void;
  onUpdated: (newContent: string) => void;
}

const TermsEditModal: React.FC<TermsEditModalProps> = ({
  visible,
  content,
  onClose,
  onUpdated,
}) => {
  const [editorContent, setEditorContent] = useState(content);
  const [updatePrivacy, { isLoading }] = useUpdatePrivacyMutation();
  console.log(updatePrivacy)

  useEffect(() => {
    if (visible) {
      setEditorContent(content);
    }
  }, [visible, content]);

  const handleUpdate = async () => {
    try {
      // const body = { termsAndCondition: editorContent };
      // const res = await updatePrivacy({ body }).unwrap();
      toast.success("Terms & Conditions updated successfully");
      onUpdated(editorContent);
    } catch (error) {
      console.error("Update failed:", error);
      toast.error("Failed to update terms & conditions");
    }
  };

  return (
    <Modal
      title="Edit Terms of Use & Condition of Salessss"
      open={visible}
      onCancel={onClose}
      width={900}
      footer={[
        <Button key="cancel" onClick={onClose} disabled={isLoading}>
          Cancel
        </Button>,
        <Button
          key="update"
          type="primary"
          loading={isLoading}
          onClick={handleUpdate}
        >
          Update
        </Button>,
      ]}
    >
      <JoditEditor
        value={editorContent}
        onChange={(newContent) => setEditorContent(newContent)}
      />
    </Modal>
  );
};

export default TermsEditModal;
