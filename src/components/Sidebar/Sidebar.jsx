import React from "react";
import SidebarLink from "./SidebarLink";
import SidebarLogout from "./SidebarLogout";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
const Sidebar = () => {
  const [authUser] = useAuthState(auth);

  return (
    <div className="bg-black text-white w-60 h-screen flex flex-col p-5">
      <img className="p-4 mt-5"  src='' alt='HH99'></img>
      <ul className="flex-1 overflow-y-auto mt-5 space-y-1">
      <SidebarLink to='/' name='Home' icon='fas fa-home mr-3'/>
      <SidebarLink to='/users' name='Search User' icon='fas fa-search mr-3'/>
      {authUser? <SidebarLink to='/create' name='Create' icon='fas fa-plus-circle mr-3'/> : null }
      {authUser?<SidebarLink to={`/${authUser.email}`} name='My Page' icon='fas fa-user mr-3'/> : null }
      </ul>
      <SidebarLogout authUser={authUser}/>
    </div>
  );
};

export default Sidebar;
