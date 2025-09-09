"use client";

import React, { useState, useEffect } from "react";
import { Modal, Input } from "antd";

interface SubscriptionEditModalProps {
  visible: boolean;
  rule: { id: number; rule: string };
  onClose: () => void;
  onSave: (updated: { id: number; rule: string }) => void;
}

const SubscriptionEditModal: React.FC<SubscriptionEditModalProps> = ({
  visible,
  rule,
  onClose,
  onSave,
}) => {
  const [currentRule, setCurrentRule] = useState(rule.rule);

  useEffect(() => {
    setCurrentRule(rule.rule);
  }, [rule]);

  const handleSave = () => {
    if (!currentRule.trim()) return;
    onSave({ ...rule, rule: currentRule });
  };

  return (
    <Modal
      title={rule.id ? "Edit Subscription Rule" : "Add Subscription Rule"}
      open={visible}
      onCancel={onClose}
      onOk={handleSave}
      okText={rule.id ? "Update" : "Add"}
      cancelText="Cancel"
      okButtonProps={{ style: { backgroundColor: "#FFA600", border: "none" } }}
    >
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Subscription Rule <span className="text-red-500">*</span>
      </label>
      <Input
        value={currentRule}
        onChange={(e) => setCurrentRule(e.target.value)}
        placeholder="Enter subscription rule"
      />
    </Modal>
  );
};

export default SubscriptionEditModal;
