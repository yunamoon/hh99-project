import React from "react";
import { BrowserRouter , Route, Routes} from "react-router-dom";
// Home , Auth, layout , mypage
import PageLayout from "@/Layouts/PageLayout.jsx";
import HomePage from '@/pages/HomePage/index';
import MyPage from '@/pages/MyPage/index';
import AuthPage from '@/pages/AuthPage/index';

function App() {
  return (
    <BrowserRouter >
    <PageLayout>
      <Routes>
        <Route path='/' element={<HomePage /> } />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/create' element={<HomePage />} />
        <Route path='/users' element={<HomePage />} />
				<Route path='/:email' element={<MyPage /> }/>
      </Routes>
    </PageLayout>
  </BrowserRouter>

  
  )
}

export default App;