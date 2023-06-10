import React from 'react'
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = ({showLogin}) => {
  return (
    <nav className='md:inline hidden'>
      <ul className='desktop-navbar flex items-center'>
        <li>
          <Link to="/catalogo">Catálogo</Link>
        </li>
        <li>
          <Link to="/">Sobre</Link>
        </li>
        <li onClick={showLogin}>
          <BsFillPersonFill size={30} className='inline'/>
          <p className='inline'>Olá, faça seu login</p>
        </li>
        <li>
          <AiOutlineShoppingCart size={30} />
        </li>
      </ul>
    </nav>
  )
}

export default NavBar