import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '@/components/header/header';
import UserListPage from '@/pages/UserListPage';
import Home from '@/pages/HomePage/index';
import NotFound from '@/pages/NotFoundPage/index.jsx'
import MyPage from '@/pages/MyPage/index';
import LandigPage from '@/pages/LandigPage/index';
import PostPage from './pages/PostPage';
PostPage
function App() {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  return (
    <BrowserRouter>
    <Header />

      {isAuthenticated == true? (
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/users" element={<UserListPage/>} />
        <Route path="/mypage" element={<MyPage/>} />
        <Route path="/post" element={<PostPage />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
      ) : (
        <Routes>
        <Route path="/" element={<LandigPage />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
      )}


  </BrowserRouter>
  
  )
}

export default App;