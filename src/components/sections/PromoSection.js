import React from 'react'
import {Link} from 'react-router-dom';

import './PromoSection.css'

const PromoSection = () => {
  return (
    <section className='promo mx-auto content-center'>
      <h1 className='font-bold text-3xl'><span className='offer'>10% OFF</span> EM JUNHO!!!</h1>
      <h2 className='font-medium text-2xl mx-auto md:w-[60%]'>Ao finalizar a compra utilize o 
      cupom <span className='offer'>ACRE10</span> e ganhe 10% de desconto em qualquer celular</h2>
      <p className='font-medium text-xl uppercase'>Confira nosso catálogo</p>
      <Link to="/catalogo">
        <button type='button' className='buy-btn'>VER CATÁLOGO</button>
      </Link>
    </section>
  )
}

export default PromoSection