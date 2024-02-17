import React from 'react';
import { useSelector } from 'react-redux';
import styles from '@/pages/HomePage/Home.module.css'; 
import { Link } from 'react-router-dom';
const HomePage = () => {
  const user = useSelector(state => state.user);

  return (
    <div className={styles.container}>
      <h1 >안녕하세요, {user.displayName}님</h1>
      <p>오늘은 항해99와 함께한지 <strong>100</strong>일째 되는 날입니다.<br/><br/>
         지금까지 나를 팔로우한 회원 :  <strong>100</strong> <br/>
         누적된 ❤️ : <strong>150</strong></p>
      <div className={styles.buttons}>
      <Link to="/users">
      <button className={styles.button}  >다른 회원 둘러보기</button>
      </Link>
      <Link to="/mypage">
        <button className={styles.button} >마이 페이지</button>
      </Link>
      <Link to="/register">
        <button className={styles.button} >포스트 쓰기</button>
      </Link>
      </div>
    </div>
  )
}

export default HomePage
