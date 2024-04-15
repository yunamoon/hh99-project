import React from 'react'
import './Header.css';
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import { Link } from 'react-router-dom';

const Header = ({onSidebar , open}) =>{

  return (
    <header className='header'>
        <div className='open' onClick={()=>{onSidebar(!open)}}>
          {!open? <IoIosArrowDropleftCircle size={25}/> :  <IoIosArrowDroprightCircle size={25}/>}<p>Menu</p></div>
        <nav className='nav'>
        <ul className='nav-list'>
            <li><Link to='/'>HH99</Link></li>
        </ul>
        </nav>
        <p className='member-count'>2024.04</p>
    </header>
  )
}

export default Header