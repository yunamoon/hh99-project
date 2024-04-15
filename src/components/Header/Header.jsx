import React from 'react'
import './Header.css';
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () =>{

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  }

  return (
    <header className='header'>
        <div className='back' onClick={handleBack}><IoIosArrowDropleftCircle size={25}/><p>Back</p></div>
        <nav className='nav'>
        <ul className='nav-list'>
            <li><Link to='/'>Feed</Link></li>
            <li><Link to='/auth'>Sign in</Link></li>
            <li><Link to='/auth'>Sign up</Link></li>
        </ul>
        </nav>
        <p className='member-count'>100 members</p>
    </header>
  )
}

export default Header