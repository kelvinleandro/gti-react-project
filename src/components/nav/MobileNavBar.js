import React from 'react'
import { Link } from 'react-router-dom'
import './MobileNavBar.css'

const MobileNavBar = ({isVisible}) => {
  return (
    <nav className={isVisible ? 'fixed left-0 top-0 w-[70%] h-full border-r border-r-gray-500 bg-[#0b1957] ease-in-out duration-300' : 'fixed left-[-100%]'}>
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
    </nav>
  )
}

export default MobileNavBar