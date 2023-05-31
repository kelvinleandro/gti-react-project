import React, { useEffect, useState } from 'react'
import ProductCard from '../product-card/ProductCard';

const CatalogPage = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch("https://apitrainees.herokuapp.com/celulares");
    const data = await response.json();
    setProducts(data);
  }
  
  useEffect(() => {
    getProducts();
  },[]);

  return (
    <section>
      <h1 className='font-bold text-4xl text-center'>CATÁLOGO</h1>
      <div className='w-full p-4 m-auto grid grid-cols-2 md:grid-cols-4 gap-5 justify-center'>
        {products.map(product => {
          return <ProductCard key={product.nome} product={product} />
        })}
      </div>
    </section>
  )
}

export default CatalogPage