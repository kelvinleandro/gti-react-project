import React from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
  const {nome, preco, img} = product;
  const pathName = `/catalogo/${nome}`;

  return (
    <div className='product-card w-full shadow-xl hover:scale-105 duration-300'>
      <img src={img} alt={nome} className='w-40 mx-auto' />
      <h2 className='font-bold text-xl text-center'>{nome}</h2>
      <p className='font-medium text-lg text-center'>{preco}</p>
      <Link to={pathName} className='w-[50%] my-btn blue-btn hover:scale-105'>COMPRAR</Link>
      {/* <button type="button" class="my-btn blue-btn hover:scale-105 w-[50%]">COMPRAR</button> */}
    </div>
  )
}

export default ProductCard