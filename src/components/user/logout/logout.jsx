import React from 'react'
import {auth} from '../../../firebase';
import firebase from 'firebase/compat/app'
function logout() {
  return (
    <button
     variant='contained' 
    color='primary'
    onClick={()=> {auth.signOut()}}>             
    LogOut</button>
  )
}

export default logout
