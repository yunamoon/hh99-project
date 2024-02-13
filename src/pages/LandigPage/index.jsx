import React , { useState} from 'react';
import styles from '@/pages/LandigPage/LandigPage.module.css'; 
import Signup from '@/components/user/signup/signup';
import Signin from '@/components/user/signin/signin';

const LandigPage = () => {
  const [openSignup , setOpenSignup] = useState(false);
  const [openSignin , setOpenSignin] = useState(false);

  const handleCloseSignup = () => {
    setOpenSignup(false); // openSignup 상태를 false로 설정하여 모달을 닫습니다.
}

const handleCloseSignin = () => {
    setOpenSignin(false); // openSignup 상태를 false로 설정하여 모달을 닫습니다.
}

  return (
    <div className={styles.container}>

      <Signup open={openSignup} onClose={handleCloseSignup}></Signup> 
      <Signin open={openSignin} onClose={handleCloseSignin}> </Signin>  
      
      <h1 className={styles.h1}>항해99 개인 프로젝트입니다.</h1>
      <p>React + Vite + Firebase를 활용한 간단한 커뮤니티 서비스입니다.<br/>
         사이트를 이용하고 싶으시다면, 로그인이나 회원가입을 해주세요.</p>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={()=> {setOpenSignin(true)}}>로그인</button>
        <button className={styles.button} onClick={()=> {setOpenSignup(true)}}>회원 가입</button>
      </div>
    </div>
  )
}

export default LandigPage
