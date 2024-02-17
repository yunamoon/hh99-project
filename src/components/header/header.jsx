import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './Header.module.css'; 
import Logout from '@/components/user/logout/logout';
import Signup from '@/components/user/signup/signup';
import Signin from '@/components/user/signin/signin';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [openSignup , setOpenSignup] = useState(false);
  const [openSignin , setOpenSignin] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const user = useSelector(state => state.user); 

  const handleCloseSignup = () => {
    setOpenSignup(false); 
  }

  const handleCloseSignin = () => {
    setOpenSignin(false); 
  }

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header className={styles.header}> 
      <Signup open={openSignup} onClose={handleCloseSignup}></Signup> 
      <Signin open={openSignin} onClose={handleCloseSignin}> </Signin>

      <div className={styles['header-content']}> 
        <h1 className={styles.logo}>항해99</h1> 
        
        <div className={styles['nav-container']}> {/* 네비게이션을 감싸는 컨테이너 추가 */}
          <div className={styles['nav-toggle']} onMouseOver={toggleNav} >☰</div> {/* 햄버거 버튼 */}
          <nav className={`${styles.nav} ${showNav ? styles['nav-show'] : ''}`}> {/* 네비게이션 */}
            {user.email ? ( 
              <> 
                <Logout className={styles.btn} onClick={toggleNav}>로그아웃</Logout> 
                <Link to='/post'><button className={styles.btn} onClick={toggleNav} >포스트</button></Link> 
                <Link to='/mypage'><button className={styles.btn} onClick={toggleNav}>마이페이지</button></Link> 
                <Link to='/users'><button className={styles.btn} onClick={toggleNav}>다른 유저 둘러보기</button></Link> 
              </>
            ) : (
              <>
                <button className={styles.btn} onClick={()=> {setOpenSignin(true)}}>로그인</button> 
                <button className={styles.btn} onClick={()=> {setOpenSignup(true)}}>회원가입</button>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
