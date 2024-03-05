import React from "react";
import { BrowserRouter , Route, Routes, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase.js";
// Home , Auth, layout , mypage
import PageLayout from "@/Layouts/PageLayout.jsx";
import HomePage from '@/pages/HomePage/index';
import MyPage from '@/pages/MyPage/index';
import AuthPage from '@/pages/AuthPage/index';

function App() {
  const [authUser] = useAuthState(auth);

  return (
    <BrowserRouter >
    <PageLayout>
      <Routes>
        <Route path='/auth' element={!authUser ? <AuthPage /> : <Navigate to='/' />} />
        <Route path='/' element={authUser ? <HomePage /> : <Navigate to='/auth' />} />
        <Route path='/create' element={authUser ? <HomePage /> : <Navigate to='/auth' />} />
        <Route path='/users' element={authUser ? <HomePage /> : <Navigate to='/auth' />} />
				<Route path='/:email' element={authUser ? <MyPage /> : <Navigate to='/auth' />}/>
      </Routes>
    </PageLayout>
  </BrowserRouter>

  
  )
}

export default App;