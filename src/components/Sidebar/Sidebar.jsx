import React from "react";
import useLogout from "@/hooks/useLogout";
import { Link  } from "react-router-dom";
const Sidebar = () => {
  const { handleLogout } = useLogout();
  return (
    <div className="bg-black text-white w-60 h-screen flex flex-col p-5">
      <img className="p-4 mt-5"  src='' alt='HH99'></img>
      <ul className="flex-1 overflow-y-auto mt-5 space-y-1">
      <Link to='/auth' >
        <li className="p-4 hover:bg-neutral-700 hover:rounded cursor-pointer font-light">
        <i className="fas fa-home mr-3"></i>
          <span>Home</span>
        </li>
      </Link>
        <li className="p-4 hover:bg-neutral-700 hover:rounded cursor-pointer font-light">
        <i className="fas fa-search mr-3"></i>
          <span>Search User</span>
        </li>
        
        <Link to='/create' >
        <li className="p-4 hover:bg-neutral-700  hover:rounded cursor-pointer font-light">
        <i className="fas fa-plus-circle mr-3"></i>
          <span>Create</span>
        </li>
        </Link>

        <Link to='/mypage' >
        <li className="p-4 hover:bg-neutral-700  hover:rounded cursor-pointer font-light"> 
        <i className="fas fa-user mr-3"></i>
          <span>My Page</span>
        </li>
        </Link>
      </ul>

      <button className="mb-10 mt-auto p-4 text-left w-full hover:bg-neutral-700 hover:text-white hover:rounded font-normal"
       onClick={handleLogout}>  
      <i className="fas fa-sign-out-alt mr-3"></i>
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
