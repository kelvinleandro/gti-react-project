import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import logo from '../../img/logo.png'

import SearchBar from '../search-bar/SearchBar';
import './Header.css';

const Header = () => {
  const [nav, setNav] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className='w-full flex items-center justify-between'>
        <div className='flex'>
          <Link to="/" className='logo-header'>
              <img src={logo} className='logo' alt="Casas Acre Logo" />
          </Link>
          <SearchBar setResults={setSearchResults} />
        </div>
        <div className='md:inline hidden'>
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
        </div>

        {/* Mobile menu */}
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
        </div>
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
    </header>
  )
}

export default Header