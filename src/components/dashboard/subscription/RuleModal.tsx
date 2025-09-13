/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import { Modal, Input, Spin } from "antd";
import { toast } from "sonner";
import { useUpdateRuleMutation } from "@/redux/service/auth/rule/ruleApi";


interface SubscriptionEditModalProps {
  visible: boolean;
  rule: { id: string; rule: string };
  onClose: () => void;
  onSave: (updated: { id: string; rule: string }) => void;
}

const SubscriptionEditModal: React.FC<SubscriptionEditModalProps> = ({
  visible,
  rule,
  onClose,
  onSave,
}) => {
  const [currentRule, setCurrentRule] = useState(rule.rule);
  const [updateRule, { isLoading }] = useUpdateRuleMutation();

  useEffect(() => {
    setCurrentRule(rule.rule);
  }, [rule]);

  const handleSave = async () => {
    if (!currentRule.trim()) return;

    try {
      const result = await updateRule({ id: rule.id, body: { rule: currentRule } }).unwrap();
      toast.success("Subscription rule updated successfully!");
      onSave(result); // update parent state
      onClose();
    } catch (err: any) {
      console.error("Update rule error:", err);
      toast.error(err?.data?.message || "Failed to update subscription rule.");
    }
  };

  return (
    <Modal
      title={rule.id ? "Edit Subscription Rule" : "Add Subscription Rule"}
      open={visible}
      onCancel={onClose}
      onOk={handleSave}
      okText={rule.id ? "Update" : "Add"}
      cancelText="Cancel"
      okButtonProps={{
        style: { backgroundColor: "#FFA600", border: "none" },
        disabled: isLoading,
      }}
    >
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Subscription Rule <span className="text-red-500">*</span>
      </label>
      <Input
        value={currentRule}
        onChange={(e) => setCurrentRule(e.target.value)}
        placeholder="Enter subscription rule"
      />
      {isLoading && (
        <div className="text-center mt-2">
          <Spin tip="Updating rule..." />
        </div>
      )}
    </Modal>
  );
};

export default SubscriptionEditModal;
