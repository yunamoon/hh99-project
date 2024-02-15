import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setUser } from '@/stores/user/user.sliec.jsx';
import { auth } from '@/firebase';
import styles from '@/components/user/user.module.css'; 

function Signin({ open, onClose }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signin = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        dispatch(
          setUser({
            id: user.uid,
            email: user.email,
            token: user.refreshToken,
            displayName: user.displayName,
          })
        );
        onClose();
        navigate('/');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className={`${styles.modal} ${open ? styles.open : ''}`} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <form onSubmit={signin}>
          <h1 className={styles.logo}>항해99</h1>
          <input
            className={styles.input}
            placeholder='이메일을 입력해주세요.'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={styles.input}
            placeholder='비밀번호를 입력해주세요.'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className={styles.button}
            type='submit'
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
