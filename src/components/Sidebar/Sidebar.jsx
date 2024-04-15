import React from "react";
import { useSelector } from "react-redux";
import useLogout from "@/hooks/useLogout";
import './Sidebar.css'
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";
import { RiLogoutBoxLine } from "react-icons/ri";
import { FaMoon } from "react-icons/fa";
const Sidebar = ({open}) => {
  const authUser = useSelector((state)=> state.user);
	const { handleLogout } = useLogout();

  return (
    <div className={open? 'block' : 'close'}>
      <ul className='sidebar'>
        <li className="logo"><Link to={'/'}><FaMoon color="yellow"/>HH99</Link></li>
        <li><Link to={'/user'}><FaUserCircle />My Page</Link></li>
        <li><Link to={'/user'}><IoSearch/>Search User</Link></li>
        <li><Link to={'/user'}><FaCirclePlus />Create</Link></li>
        <li><Link to={'/user'} onClick={handleLogout}><RiLogoutBoxLine/>Logout</Link></li>
      </ul>
    </div>


  );
};

export default Sidebar;
