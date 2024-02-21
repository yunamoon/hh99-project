import React from "react";
import { useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import Sidebar from '@/components/Sidebar/Sidebar.jsx';

const Layout = ({ children }) => {

      // 현재 페이지 경로 가져오기
      const { pathname } = useLocation();
      // 사용자 인증 상태 및 로딩 상태 가져오기
      const [user] = useAuthState(auth);
      // pathname과 사용자 인증 상태 확인
      const canRenderSidebar = pathname !== "/auth" && user;

  return (
    <div className="flex">
      {canRenderSidebar ?   <Sidebar /> : null}
      <div className="flex-1 bg-gray-100 h-screen">
      {children}
    </div>
    </div>
  );
};

export default Layout;
