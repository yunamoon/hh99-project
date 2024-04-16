import React from "react";
import { useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import Sidebar from '@/components/Sidebar/Sidebar.jsx';

const Layout = ({ children }) => {

  return (
    <div className="flex bg-gray-100 h-full">
       <Sidebar /> 
      <div className="flex-1">
      {children}
    </div>
    </div>
  );
};

export default Layout;
