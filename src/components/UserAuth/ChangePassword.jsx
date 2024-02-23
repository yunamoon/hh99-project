import React, { useState } from 'react';
import useUpdatePassword from '@/hooks/useUpdatePassword';
import EditProfileItem from '../EditProfile/EditProfileItem';

const ChangePassword = ({onClose}) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { handleChangePassword, error ,success} = useUpdatePassword();

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleChangePassword(currentPassword, newPassword, confirmPassword);
  };

  return (

    <div onClick={(e) => e.stopPropagation()} className='p-6'>
      <form onSubmit={handleSubmit} className='mt-4 space-y-6'>
      <h1 className="text-xl font-bold mb-4 text-sm"> Change Password</h1>
      <EditProfileItem text="currentPassword" onChange={(e) => setCurrentPassword(e.target.value)} />
      <EditProfileItem text="newPassword" onChange={(e) => setNewPassword(e.target.value)} />
      <EditProfileItem text="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} />
      {error && <p>{error}</p>}
      <button
          type="submit"
          className="w-full flex-1 px-4 py-2 text-sm font-medium text-white bg-blue-400 border border-transparent rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:bg-blue-500 focus:outline-none focus:ring-offset-gray-200">
      Change Password Submit
      </button>
      </form>
    </div>

  );
};

export default ChangePassword;
