'use client';
import { useState, useEffect } from 'react';
import { Modal, Input, message } from 'antd';

interface EditNameModalProps {
  isOpen: boolean;
  currentName: string;
  onClose: () => void;
  onSave: (newName: string) => void;
}

const EditNameModal: React.FC<EditNameModalProps> = ({ isOpen, currentName, onClose, onSave }) => {
  const [name, setName] = useState<string>(currentName);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setName(currentName);
  }, [currentName]);

  const handleSave = async () => {
    if (!name.trim()) {
      message.error('Please enter a valid name');
      return;
    }

    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      onSave(name);
      message.success('Name updated successfully!');
      onClose();
    } catch {
      message.error('Failed to update name.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title="Edit Name"
      open={isOpen}
      onCancel={onClose}
      onOk={handleSave}
      confirmLoading={loading}
      okText="Save Changes"
      cancelText="Cancel"
      okButtonProps={{
        style: {
          backgroundColor: '#FFB833', // yellow color
          borderColor: '#FFD700',
          color: '#000'
        }
      }}
    >
      <div className="p-2">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Full Name
        </label>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          size="large"
        />
      </div>
    </Modal>
  );
};

export default EditNameModal;
