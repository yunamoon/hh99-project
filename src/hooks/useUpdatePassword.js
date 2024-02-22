import React ,{ useState } from 'react';
import { auth } from '@/firebase/firebase';
import { EmailAuthProvider } from 'firebase/auth';
import { react } from 'react';

const useUpdatePassword = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChangePassword = async (currentPassword, newPassword, confirmPassword) => {
    if (newPassword !== confirmPassword) {
      setError('새로운 비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      const user = auth.currentUser;
      const credential = EmailAuthProvider.credential(
        user.email,
        currentPassword
      );

      await user.reauthenticateWithCredential(credential);
      await user.updatePassword(newPassword);

      setError(null);
      setSuccess(true)
      console.log('비밀번호가 성공적으로 변경되었습니다.');
    } catch (error) {
      setError('현재 비밀번호가 일치하지 않습니다.');
      console.error('재인증 오류:', error);
    }
  };

  return { handleChangePassword, error , success};
};

export default useUpdatePassword;
