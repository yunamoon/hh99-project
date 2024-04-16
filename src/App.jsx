import React, { useState } from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import MyPage from '@/pages/MyPage/index';
import AuthPage from '@/pages/AuthPage/index';
import Header from "./components/Header/Header";
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home/Home';

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
        <Route path='/' element={<Home /> } />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/create' element={<Home />} />
        <Route path='/users' element={<Home />} />
				<Route path='/:email' element={ <MyPage />}/>
      </Routes>
  </BrowserRouter>

  
  )
}

export default App;