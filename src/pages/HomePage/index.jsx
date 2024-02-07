import React , {useEffect, useState} from 'react';
import { Button} from '@material-ui/core';
import '../../App.css';
import {auth} from '../../firebase';
import Logout from '../../components/user/logout/logout';
import Signup from '../../components/user/signup/signup';
import Signin from '../../components/user/signin/signin';
import Register from '../RegisterPage/index';
const Home = () => {

 const [openSignup , setOpenSignup] = useState(false);
 const [openSignin , setOpenSignin] = useState(false);
 const [user , setUser] = useState(null);


 useEffect(()=> {

    const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if (authUser) {
            setUser(authUser);
        }
        else{
            setUser(null);
        }
    })
    return() => {
        unsubscribe();
    };
 }, []);
 
 const handleCloseSignup = () => {
    setOpenSignup(false); // openSignup 상태를 false로 설정하여 모달을 닫습니다.
}

const handleCloseSignin = () => {
    setOpenSignin(false); // openSignup 상태를 false로 설정하여 모달을 닫습니다.
}

  return (
    <div className='app'> 

      <Signup open={openSignup} onClose={handleCloseSignup}></Signup> 
      <Signin open={openSignin} onClose={handleCloseSignin}> </Signin>

      <div className='hh99__header'>
        <img 
           className='hh99__logo'
           src='https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2021%2F01%2Fkia-motors-new-logo-brand-slogan-officially-revealed-01.jpg?cbr=1&q=90'
           alt='logo'
           width={100}
           height={80}/>
        
        <div>
            {user 
            ?<>
            <Logout/>
            <span>&nbsp;&nbsp;</span>
            </>
            :<>
            <Button 
            variant='contained' 
            color='primary'
            onClick={()=> {setOpenSignin(true)}}>             
            Sign in</Button>
            <span>&nbsp;&nbsp;</span>

            <Button 
            variant='contained' 
            color='primary'
            onClick={()=> {setOpenSignup(true)}}>
            Sign up</Button>
            </>}
        </div>
        </div>
        {user  && user.displayName
        ?<>
        <Register username={user.displayName}/>
        </>
        :<>
        <div className='unauth'>
            서비스 이용을 원한다면 
            <b style={{cursor:'pointer',color:'blue'}}
            onClick={()=> setOpenSignup(true)}>회원가입</b>
            <b style={{cursor:'pointer',color:'blue'}}
            onClick={()=> setOpenSignin(true)}>로그인</b>
            해주세요.
        </div></>}

    </div>
  )
}

export default Home
