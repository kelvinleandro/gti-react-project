import React from 'react'
import {Link} from 'react-router-dom';
import man from '../../img/man-showing-phone.png';
import s22 from '../../img/s22ultra.png';

import './PromoSection.css'

const PromoSection = () => {
  return (
    <section className='promo mx-auto content-center text-center'>
      <div className='banner'>

        <div className="man">
          <img src={man} alt="man showing phone" />
        </div>

        <div className='text-center'>
          <h1 className='font-bold text-3xl'><span className='offer'>10% OFF</span> EM JUNHO!!!</h1>
          <h2 className='font-medium text-2xl mx-auto md:w-[60%]'>Ao finalizar a compra utilize o
          cupom <span className='offer' >ACRE10</span> e ganhe 10% de desconto em qualquer celular</h2>
          <p className='font-medium text-xl uppercase'>Confira nosso catálogo</p>
          <Link to="/catalogo">
            <button type='button' className='my-btn red-btn hover:scale-105'>VER CATÁLOGO</button>
          </Link>
        </div>

        <div className="samsung"> 
          <img src={s22} alt="samsung s22 ultra" /> 
        </div> 
      </div>
    </section>
  )
}

export default PromoSection