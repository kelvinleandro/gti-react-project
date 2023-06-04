import React from 'react';
import './NoveltySection.css';
import iphone from '../../img/iphone13.png';
import { Link } from 'react-router-dom';

const NoveltySection = () => {
  return (
    <section className='novidade grid md:flex content-center justify-around'>
      <div className='my-auto'>
        <h1 className='font-bold text-3xl'>NOVIDADES NA CASAS ACRE!</h1>
        <h2 className='font-medium text-2xl'>IPHONE 13 PRO MAX CHEGOU NA CASAS ACRE</h2>
        <p className='font-medium text-lg'>Aproveite agora e compre já o seu!</p>
        <Link to='/catalogo/iPhone 13 Pro Max' className="my-btn blue-btn hover:scale-105">COMPRAR</Link>
      </div>
      <div className='iphone md:w-[30%]'>
        <img src={iphone} alt='iphone 13'/>
      </div>
    </section>
  )
}

export default NoveltySection