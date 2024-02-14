import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import styles from '@/components/user/user.module.css'; 

const ChangePassword = ({ open, onClose }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError('새로운 비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      const user = firebase.auth().currentUser;
      const credential = firebase.auth.EmailAuthProvider.credential(
        user.email,
        currentPassword
      );
      await user.reauthenticateWithCredential(credential);
      await user.updatePassword(newPassword);
      setError(null);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      console.log('비밀번호가 성공적으로 변경되었습니다.');
    } catch (error) {
      setError('비밀번호를 변경하는 중 오류가 발생했습니다.');
      console.error('비밀번호 변경 오류:', error);
    }
  };

  return (
    <div className={`${styles.modal} ${open ? styles.open : ''}`} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
    <form onSubmit={handleChangePassword}>
     <h1 className={styles.logo}>비밀번호 변경</h1>
      <div>
        <label>현재 비밀번호</label>
        <input
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label>새로운 비밀번호</label>
        <input
          className={styles.input}
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label>새로운 비밀번호 확인</label>
        <input
          className={styles.input}
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <button 
      className={styles.button}
      type="submit">비밀번호 변경
      </button>
      {error && <p>{error}</p>}
    </form>
    </div>
    </div>
  );
};

export default ChangePassword;
