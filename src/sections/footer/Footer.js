import React from 'react'
import logo from '../../img/logo.png'
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='w-full inline-block justify-around items-start md:flex'>

      <div className='flex flex-col'>
        <img src={logo} className='logo h-auto' alt="Casas Acre Logo" />

        <ul className='social-icons flex mx-auto mt-2'>
          <li><BsFacebook size={25} /></li>
          <li><BsInstagram size={25} /></li>
          <li><BsTwitter size={25} /></li>
          <li><BsYoutube size={25} /></li>
        </ul>
      </div>

      <div className='text-center'>
        <h3>Casas Acre</h3>
        <ul>
          <li>Quem somos</li>
          <li>Serviços</li>
          <li>Formas de Pagamento</li>
          <li>FAQ</li>
        </ul>
      </div>

      <div className='text-center'>
        <h3>Ajuda</h3>
        <ul>
          <li>Política de Troca e Devolução</li>
          <li>Portal de Privacidade</li>
          <li>Política de Privacidade</li>
          <li>Termos e Condições de Uso</li>
        </ul>
      </div>

    </footer>
  )
}

export default Footer