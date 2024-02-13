import React, { useState } from 'react'
import {auth} from '@/firebase';
import firebase from 'firebase/compat/app'
import { removeUser  } from '@/stores/user/user.sliec.jsx';
import {useDispatch } from 'react-redux';
function logout() {
  const dispatch = useDispatch(); 
  const [isHovered, setIsHovered] = useState(false);

  const btnStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    color: isHovered ? '#009688' : '#00BFA6',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
  };

  const handleLogout = () => {
    auth.signOut();
    dispatch(removeUser()); // Redux 스토어에서 사용자 정보를 초기화하는 액션을 디스패치합니다.
  }

  return (
    <button
    style={btnStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleLogout}>             
    로그아웃</button>
  )
}

export default logout
