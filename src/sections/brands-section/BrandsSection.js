import React from 'react'
import './BrandsSection.css'

import apple from '../../img/apple.png'
import samsung from '../../img/samsung.png'
import xiaomi from '../../img/xiaomi.png'
import motorola from '../../img/motorola.png'
import nokia from '../../img/nokia.png'
import oneplus from '../../img/oneplus.png'

const BrandsSection = () => {
  return (
    <section className='brand-section'>
        <h1 className='font-bold text-3xl'>AS <span>MELHORES MARCAS</span> VOCÊ ENCONTRA AQUI</h1>
        <div className='brands grid grid-cols-2 md:flex md:justify-center'>
            <div className="brand-img">
              <img src={apple} alt='apple' />
            </div>
            
            <div className="brand-img">
              <img src={samsung} alt='samsung' />
            </div>
            
            <div className="brand-img">
              <img src={xiaomi} alt='xiaomi' />
            </div>
            
            <div className="brand-img">
              <img src={motorola} alt='motorola' />
            </div>
            
            <div className="brand-img">
              <img src={oneplus} alt='motorola' />
            </div>
            
            <div className="brand-img">
              <img src={nokia} alt='motorola' />
            </div>
        </div>
    </section>
  )
}

export default BrandsSection