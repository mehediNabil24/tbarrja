"use client";
import React, { useState, useEffect } from "react";
import { Modal, Input, Button } from "antd";

interface SocialEditModalProps {
  visible: boolean;
  social: { id: number; name: string; url: string; icon: string };
  onClose: () => void;
  onSave: (updated: { id: number; name: string; url: string; icon: string }) => void;
}

const SocialEditModal: React.FC<SocialEditModalProps> = ({ visible, social, onClose, onSave }) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (social) setUrl(social.url);
  }, [social]);

  const handleSave = () => {
    onSave({ ...social, url });
    onClose();
  };

  return (
    <Modal
      title={`Edit ${social.name} Address`}
      open={visible}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancel
        </Button>,
        <Button key="save" type="primary" onClick={handleSave}>
          Save
        </Button>,
      ]}
    >
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Address URL:</label>
        <Input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter social URL" />
      </div>
    </Modal>
  );
};

export default SocialEditModal;
