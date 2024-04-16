import React from 'react'
import './Header.css';
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = ({onSidebar , open}) =>{

  return (
    <header className='header'>
        <div className='open' onClick={()=>{onSidebar(!open)}}>
          {!open? <IoIosArrowDropleftCircle size={25}/> :  <IoIosArrowDroprightCircle size={25}/>}<p>Menu</p></div>
        <p><Link to='/'><FaMoon color='yellow'/>HH99</Link></p>
        <p className='member-count'><FaRegUserCircle size={25}/>100 members</p>
    </header>
  )
}

export default Header