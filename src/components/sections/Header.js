import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import logo from '../../img/logo.png'

import SearchBar from '../search-bar/SearchBar';
import './Header.css';
import MobileNavBar from '../nav/MobileNavBar';
import NavBar from '../nav/NavBar';

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const handleNav = () => {
    setMobileNav(!mobileNav);
  };
  
  return (
    <header>
        <div className='w-full flex items-center justify-between'>

          <div className='w-full md:w-[50%] flex flex-col md:flex-row'>
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

          <NavBar />
          
        </div>

        {/* Mobile menu */}
        <MobileNavBar isVisible={mobileNav} />

    </header>
  )
}

export default Header