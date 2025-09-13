"use client";
import React, { useState, useEffect } from "react";
import { Modal, Input, Button } from "antd";

interface InvestorEditModalProps {
  visible: boolean;
  investor: { id: number; name: string; address: string };
  onClose: () => void;
  onSave: (updated: { id: number; name: string; address: string }) => void;
}

const InvestorEditModal: React.FC<InvestorEditModalProps> = ({ visible, investor, onClose, onSave }) => {
  const [name, setName] = useState(investor.name);
  const [address, setAddress] = useState(investor.address);

  useEffect(() => {
    setName(investor.name);
    setAddress(investor.address);
  }, [investor]);

  const handleSave = () => {
    onSave({ ...investor, name, address });
    onClose();
  };

  return (
    <Modal
      title="Edit Investor Address"
      visible={visible}
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
      <div className="space-y-4">
     
        <div>
         
          <Input value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
      </div>
    </Modal>
  );
};

export default InvestorEditModal;
