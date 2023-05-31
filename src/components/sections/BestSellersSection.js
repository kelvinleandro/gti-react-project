import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './BestSellersSection.css'
import ProductCard from '../product-card/ProductCard'

const BestSellersSection = () => {
  const [bestSellers, setBestSellers] = useState([]);
  
  const getBestSellers = async () => {
    const response = await fetch("https://apitrainees.herokuapp.com/celulares");
    const data = await response.json();
    setBestSellers(data.slice(0,4));
    console.log(bestSellers);
  }

  useEffect(() => {
    getBestSellers();
  }, []);
  
  return (
    <section className='bestsellers'>
      <div className='flex justify-between m-3 items-center'>
          <h1 className='font-bold text-3xl'>MAIS VENDIDOS</h1>
          <Link to="/catalogo" className='ver-tudo font-medium'>Ver catálogo completo</Link>
      </div>
      <div className='w-full p-4 m-auto grid grid-cols-2 md:grid-cols-4 gap-5 justify-center'>
        {bestSellers.map(product => {
          return <ProductCard key={product.nome} product={product} />
        })}
      </div>
    </section>
  )
}

export default BestSellersSection