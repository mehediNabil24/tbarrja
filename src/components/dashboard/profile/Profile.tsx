'use client';
import { useState } from 'react';

import { Input, message } from 'antd';
import EditNameModal from './EditName';


interface UserData {
  name: string;
  email: string;
}

interface PasswordData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export default function ProfilePage() {
  const [userData, setUserData] = useState<UserData>({
    name: 'John Doe',
    email: 'john.doe@tradinghub.com',
  });

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [passwordData, setPasswordData] = useState<PasswordData>({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordLoading, setPasswordLoading] = useState(false);

  // Handle name update
  const handleNameUpdate = (newName: string) => {
    setUserData({ ...userData, name: newName });
  };

  // Handle password change
  const handlePasswordChange = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPasswordLoading(true);

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setPasswordMessage("New passwords don't match");
      setPasswordLoading(false);
      return;
    }

    if (passwordData.newPassword.length < 8) {
      setPasswordMessage("New password must be at least 8 characters");
      setPasswordLoading(false);
      return;
    }

    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call

    setPasswordMessage("Password changed successfully!");
    message.success('Password updated successfully!');

    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });

    setPasswordLoading(false);
  };

  return (
    <div className="min-h-screen ">
   

      <main className="  px-4 sm:px-4  py-4">
        {/* Profile Information */}
        <div className="bg-white  rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Profile Information</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Name</p>
                <p className="text-lg text-gray-900">{userData.name}</p>
              </div>
              <button
                onClick={() => setIsEditModalOpen(true)}
                className="px-4 py-2 !bg-[#FFB833] text-black font-medium rounded-md !hover:bg-yellow-600 transition-colors"
              >
                Edit
              </button>
            </div>

            <div className="border-b pb-4">
              <p className="text-sm font-medium text-gray-500">Email Address</p>
              <p className="text-lg text-gray-900">{userData.email}</p>
            </div>

            
          </div>
        </div>

        {/* Change Password Section */}
        <div className="bg-white  rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Change Password</h2>

          <form onSubmit={handlePasswordChange} className="space-y-4">
            <div>
              <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Current Password
              </label>
              <Input.Password
                id="currentPassword"
                value={passwordData.currentPassword}
                onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                className="w-full"
                size="large"
                required
              />
            </div>

            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                New Password
              </label>
              <Input.Password
                id="newPassword"
                value={passwordData.newPassword}
                onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                className="w-full"
                size="large"
                required
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm New Password
              </label>
              <Input.Password
                id="confirmPassword"
                value={passwordData.confirmPassword}
                onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                className="w-full"
                size="large"
                required
              />
            </div>

            {passwordMessage && (
              <div className={`p-3 rounded-md ${passwordMessage.includes('successfully') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {passwordMessage}
              </div>
            )}

            <button
              type="submit"
              className="w-full px-4 py-2 bg-[#FFB833] text-black !font-semibold rounded-md hover:bg-yellow-600  text-bold transition-colors disabled:opacity-50"
              disabled={passwordLoading}
            >
              {passwordLoading ? 'Changing Password...' : 'Change Password'}
            </button>
          </form>
        </div>
      </main>

      {/* Edit Name Modal */}
      <EditNameModal
        isOpen={isEditModalOpen}
        currentName={userData.name}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleNameUpdate}
      />
    </div>
  );
}
