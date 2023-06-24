import React from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
  const {nome, preco, img, descricao} = product;
  const pathName = `/catalogo/${nome}`;

  return (
    <div className='product-card w-full shadow-xl hover:scale-105 duration-300'>
      <img src={img} alt={nome} className='w-40 mx-auto mb-2' />
      <h2 className='font-bold text-xl text-center mb-2'>{nome}</h2>
      <p className='text-justify text-sm mb-2'>{descricao}</p>
      <div className='flex flex-col lg:flex-row items-center mx-auto'>
        <h4 className='font-bold text-md text-center mr-2 my-2 lg:my-0'>{preco}</h4>
        <Link to={pathName} className='my-btn blue-btn hover:scale-105 my-auto'>COMPRAR</Link>
      </div>
    </div>
  )
}

export default ProductCard