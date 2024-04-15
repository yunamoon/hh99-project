import React, { useState } from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import HomePage from '@/pages/HomePage/index';
import MyPage from '@/pages/MyPage/index';
import AuthPage from '@/pages/AuthPage/index';
import Header from "./components/Header/Header";
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [open , setOpen] = useState();

  const onSidebar = (open) => { 
    setOpen(open);
  };

  return (
    <BrowserRouter >
    <Header onSidebar={onSidebar} open={open}/>
    <Sidebar open={open}/>
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