"use client";

import React, { useState, useEffect } from "react";
import { Modal, Button } from "antd";
import JoditEditor from "jodit-react";

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

  useEffect(() => {
    if (visible) {
      setEditorContent(content);
    }
  }, [visible, content]);

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
          onClick={() => onUpdated(editorContent)}
        >
          Update
        </Button>,
      ]}
    >
      {/* Jodit Editor Box Only */}
      <JoditEditor
        value={editorContent}
        onChange={(newContent) => setEditorContent(newContent)}
      />
    </Modal>
  );
};

export default PrivacyEditModal;
