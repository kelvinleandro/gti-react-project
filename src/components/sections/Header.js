import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import logo from '../../img/logo.png'
import './Header.css';

import SearchBar from '../search-bar/SearchBar';
import MobileNavBar from '../nav/MobileNavBar';
import NavBar from '../nav/NavBar';
import LoginSection from './LoginSection';

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [loginVisibility, setLoginVisibility] = useState(false);

  const handleNav = () => {
    setMobileNav(!mobileNav);
  };

  const handleLoginVisibility = () => {
    setLoginVisibility(!loginVisibility);
  }
  
  return (
    <header>
        <div className='w-full flex items-center justify-between'>

          <div className='w-full md:w-[40%] flex flex-col md:flex-row'>
            <div className='flex items-center justify-between'>
              <Link to="/" className='logo-header'>
                  <img src={logo} className='logo' alt="Casas Acre Logo" />
              </Link>
              <div className='md:hidden' onClick={handleNav} >
                {mobileNav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
              </div>
            </div>
            <SearchBar />
          </div>

          <NavBar showLogin={handleLoginVisibility} />
          
        </div>

        {/* Mobile menu */}
        <MobileNavBar isVisible={mobileNav} />

        {/* Login form */}
        <LoginSection visible={loginVisibility} setVisible={handleLoginVisibility} />

    </header>
  )
}

export default Header