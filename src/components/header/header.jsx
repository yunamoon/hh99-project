import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './Header.module.css'; // CSS 모듈 가져오기
import Logout from '@/components/user/logout/logout';
import Signup from '@/components/user/signup/signup';
import Signin from '@/components/user/signin/signin';

const Header = () => {
  const [showUserInfo, setShowUserInfo] = useState(false); // 사용자 정보 팝업 표시 상태
  const [openSignup , setOpenSignup] = useState(false);
  const [openSignin , setOpenSignin] = useState(false);
  
  const user = useSelector(state => state.user); // Redux 스토어에서 사용자 정보 가져오기

  // 사용자 정보 팝업 토글 함수
  const toggleUserInfo = () => {
    setShowUserInfo(!showUserInfo);
  };

 const handleCloseSignup = () => {
    setOpenSignup(false); // openSignup 상태를 false로 설정하여 모달을 닫습니다.
}

const handleCloseSignin = () => {
    setOpenSignin(false); // openSignup 상태를 false로 설정하여 모달을 닫습니다.
}

  return (
    <header className={styles.header}> {/* CSS 모듈 클래스 이름 사용 */}

      <Signup open={openSignup} onClose={handleCloseSignup}></Signup> 
      <Signin open={openSignin} onClose={handleCloseSignin}> </Signin>

      <div className={styles['header-content']}> {/* CSS 모듈 클래스 이름 사용 */}
        <h1 className={styles.logo}>Logo</h1> {/* CSS 모듈 클래스 이름 사용 */}
        <nav className={styles.nav}> {/* CSS 모듈 클래스 이름 사용 */}
        {user.email && ( // 사용자가 로그인한 경우
            <div className={styles['user-info']} onClick={toggleUserInfo}> {/* CSS 모듈 클래스 이름 사용 */}
              <img src={user.photoURL} alt="Profile Image" className={styles['user-profile']} /> {/* 프로필 이미지 표시 */}
              <span className={styles['user-name']}>{user.displayName}</span> {/* CSS 모듈 클래스 이름 사용 */}
              {showUserInfo && ( // 팝업 표시 상태일 때만 사용자 정보 팝업 표시
                <div className={styles['user-popup']}> {/* CSS 모듈 클래스 이름 사용 */}
                  {/* 사용자 정보 내용 */}
                  <p>Email: {user.email}</p>
                  <p>Role: {user.role}</p>
                  {/* 기타 사용자 정보 추가 */}
                </div>
              )}
            </div>
          )}
          {!user.email ? ( // 사용자가 로그인하지 않은 경우
            <>
              <button className={styles.btn} onClick={()=> {setOpenSignin(true)}}>로그인</button> {/* CSS 모듈 클래스 이름 사용 */}
              <button className={styles.btn} onClick={()=> {setOpenSignup(true)}}>회원가입</button> {/* CSS 모듈 클래스 이름 사용 */}
            </>
          ) : (
            <Logout className={styles.btn} >로그아웃</Logout> 
          )}
       
        </nav>
      </div>
    </header>
  );
};

export default Header;
