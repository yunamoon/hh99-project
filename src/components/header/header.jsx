import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './Header.module.css'; // CSS 모듈 가져오기
import Logout from '@/components/user/logout/logout';
import Signup from '@/components/user/signup/signup';
import Signin from '@/components/user/signin/signin';
import { Link } from 'react-router-dom';

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
        <h1 className={styles.logo}>항해99</h1> {/* CSS 모듈 클래스 이름 사용 */}
        <nav className={styles.nav}> {/* CSS 모듈 클래스 이름 사용 */}
        {user.email ? ( // 사용자가 로그인한 경우
            <>
            <div className={styles['user-info']}> {/* CSS 모듈 클래스 이름 사용 */}
              <span className={styles['user-name']} onClick={toggleUserInfo}>안녕하세요, {user.displayName} 님</span> {/* CSS 모듈 클래스 이름 사용 */}
              <Logout className={styles.btn} >로그아웃</Logout> 
              <Link to='/post'><button className={styles.btn} >포스트</button></Link> 
              <Link to='/mypage'><button className={styles.btn} >마이페이지</button></Link> 
              <Link to='/users'><button className={styles.btn} >다른 유저 둘러보기</button></Link> 
            </div>
          
            </>
          ) :
          ( // 사용자가 로그인하지 않은 경우
          <>
            <button className={styles.btn} onClick={()=> {setOpenSignin(true)}}>로그인</button> {/* CSS 모듈 클래스 이름 사용 */}
            <button className={styles.btn} onClick={()=> {setOpenSignup(true)}}>회원가입</button> {/* CSS 모듈 클래스 이름 사용 */}
          </>
        )
          }
  
        </nav>
      </div>
  
    </header>
  );
};

export default Header;
