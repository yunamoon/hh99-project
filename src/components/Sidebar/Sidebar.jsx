import React from "react";
import SidebarLink from "./SidebarLink";
import SidebarLogout from "./SidebarLogout";

const Sidebar = () => {

  return (
    <div className="bg-black text-white w-60 h-screen flex flex-col p-5">
      <img className="p-4 mt-5"  src='' alt='HH99'></img>
      <ul className="flex-1 overflow-y-auto mt-5 space-y-1">
      <SidebarLink to='/auth' name='Home' icon='fas fa-home mr-3'/>
      <SidebarLink to='/users' name='Search User' icon='fas fa-search mr-3'/>
      <SidebarLink to='/create' name='Create' icon='fas fa-plus-circle mr-3'/>
      <SidebarLink to='/mypage' name='My Page' icon='fas fa-user mr-3'/>
      </ul>
      <SidebarLogout/>
    </div>
  );
};

export default Sidebar;
