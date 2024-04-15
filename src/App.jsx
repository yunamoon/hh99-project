import React from "react";
import { BrowserRouter , Route, Routes, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import HomePage from '@/pages/HomePage/index';
import MyPage from '@/pages/MyPage/index';
import AuthPage from '@/pages/AuthPage/index';
import Header from "./components/Header/Header";

function App() {
  const [authUser] = useAuthState(auth);

  return (
    <BrowserRouter >
    <Header/>
      <Routes>
        <Route path='/' element={<HomePage /> } />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/create' element={<HomePage />} />
        <Route path='/users' element={<HomePage />} />
				<Route path='/:email' element={ <MyPage />}/>
      </Routes>
  </BrowserRouter>

  
  )
}

export default App;