import React from 'react'
import apple from '../../img/apple.png'
import samsung from '../../img/samsung.png'
import xiaomi from '../../img/xiaomi.png'
import motorola from '../../img/motorola.png'
import './BrandsSection.css'

const BrandsSection = () => {
  return (
    <section className='brand-section'>
        <h1 className='font-bold text-3xl'>AS <span>MELHORES MARCAS</span> VOCÊ ENCONTRA AQUI</h1>
        <div className='brands grid grid-cols-2 md:flex'>
            <img src={apple} alt='apple' />
            <img src={samsung} alt='samsung' />
            <img src={xiaomi} alt='xiaomi' />
            <img src={motorola} alt='motorola' />
        </div>
    </section>
  )
}

export default BrandsSection