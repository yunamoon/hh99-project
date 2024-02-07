import React ,{useState} from 'react';
import { Button , Modal , Input} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import {auth} from '../../../firebase';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'


const useStyles = makeStyles((theme) => ({
    paper: {
     backgroundColor : theme.palette.background.paper,
     border : "2px solid #000",
     boxShadow : theme.shadows[5],
     padding : theme.spacing(2,4,3),
     position: "absolute",
    width: 450,
    top: "50%",
    left: "50%",
    overflowY: "auto",
    transform: "translate(-50%, -50%)",

    },

    input : {
        width: "100%",
    }
}));

function signin({open, onClose}) {

    const classes = useStyles();
    const [email , setEmail] = useState();
    const [password , setPassword] = useState();
   
    const signin = (e) => {
       e.preventDefault();
       auth.signInWithEmailAndPassword(email,password)
           .catch((e) => alert(e.message))
           setOpenSignin(false);
    }

  return (
    <Modal open={open} onClose={onClose}>
    <div className={classes.paper}>
        <form>
           <center>
           <img 
            className=''
            src='https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2021%2F01%2Fkia-motors-new-logo-brand-slogan-officially-revealed-01.jpg?cbr=1&q=90'
            alt='logo'
            width={100}
            height={80}/>
             </center> 
            <Input 
             className={classes.input}
            placeholder='이메일을 입력해주세요.'
            type='email'
            value={email}
            onChange={(e)=> {setEmail(e.target.value)}}/>
             <br/>
             <br/>
            <Input 
             className={classes.input}
            placeholder='비밀번호를 입력해주세요.'
            type='password'
            value={password}
            onChange={(e)=> {setPassword(e.target.value)}}/>
            <br/>
             <br/>
            <Button 
             className={classes.input}
            type='submit'
            onClick={signin}
            > Sign In</Button>
    
        </form>
    </div>
  </Modal> 

  )
}

export default signin
