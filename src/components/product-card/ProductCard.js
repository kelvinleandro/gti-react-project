import React from 'react'
import './ProductCard.css'

const ProductCard = ({product}) => {
  const {nome, preco, img} = product;
    
  return (
    <div className='product-card w-full shadow-xl hover:scale-105 duration-300'>
      <img src={img} alt={nome} className='w-40 mx-auto' />
      <h2 className='font-bold text-xl text-center'>{nome}</h2>
      <p className='font-medium text-lg text-center'>{preco}</p>
      <button type="button" class="buy-btn w-[60%] mx-auto">COMPRAR</button>
    </div>
  )
}

export default ProductCard