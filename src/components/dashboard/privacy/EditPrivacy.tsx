"use client";

import React, { useState, useEffect } from "react";
import { Modal, Button } from "antd";
import JoditEditor from "jodit-react";
import { useUpdatePrivacyMutation } from "@/redux/service/auth/privacy/privacyApi"; // <-- your API hook
import { toast } from "sonner";

interface PrivacyEditModalProps {
  visible: boolean;
  content: string;
  onClose: () => void;
  onUpdated: (newContent: string) => void;
}

const PrivacyEditModal: React.FC<PrivacyEditModalProps> = ({
  visible,
  content,
  onClose,
  onUpdated,
}) => {
  const [editorContent, setEditorContent] = useState(content);
  const [updatePrivacy, { isLoading }] = useUpdatePrivacyMutation(); // <-- RTK mutation hook

  useEffect(() => {
    if (visible) {
      setEditorContent(content);
    }
  }, [visible, content]);

const handleUpdate = async () => {
  try {
    const payload = { privacyPolicy: editorContent };
    const res = await updatePrivacy({ body: payload }).unwrap(); // <-- wrapped in {body: ...}
    toast.success("Privacy Policy updated successfully");
    onUpdated(editorContent);
    onClose();
  } catch (error: any) {
    toast.error(error?.data?.message || "Failed to update Privacy Policy");
  }
};


  return (
    <Modal
      title="Edit Privacy Policy"
      open={visible}
      onCancel={onClose}
      width={900}
      footer={[
        <Button key="cancel" onClick={onClose}>
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

export default PrivacyEditModal;
