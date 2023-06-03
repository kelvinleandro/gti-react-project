import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import logo from '../../img/logo.png'

import SearchBar from '../search-bar/SearchBar';
import './Header.css';

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  
  return (
    <header>
        <div className='w-full flex items-center justify-between'>
          <div className='w-full flex flex-col md:flex-row'>
            <div className='flex items-center justify-between'>
              <Link to="/" className='logo-header'>
                  <img src={logo} className='logo' alt="Casas Acre Logo" />
              </Link>
              <div className='md:hidden' onClick={handleNav} >
                {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
              </div>
            </div>
            <SearchBar />
          </div>

          <nav className='md:inline hidden'>
            <ul className='desktop-navbar flex items-center'>
              <li>
                <Link to="/catalogo">Catálogo</Link>
              </li>
              <li>
                <Link to="/">Sobre</Link>
              </li>
              <li>
                <BsFillPersonFill size={30} className='inline'/>
                <p className='inline'>Olá, faça seu login</p>
              </li>
              <li>
                <AiOutlineShoppingCart size={30} />
              </li>
            </ul>
          </nav>
          
        </div>

        {/* Mobile menu */}
        <div>
          <div className={nav ? 'fixed left-0 top-0 w-[70%] h-full border-r border-r-gray-500 bg-[#0b1957] ease-in-out duration-300' : 'fixed left-[-100%]'}>
            <ul className='mobile-navbar'>
              <li>
                <Link to="/catalogo">Catálogo</Link>
              </li>
              <li>
                <Link to="/">Sobre</Link>
              </li>
              <li>
                Meu carrinho
              </li>
              <li>
                Olá, faça seu login
              </li>
            </ul>
          </div>
        </div>

    </header>
  )
}

export default Header