import React, { useEffect, useState } from 'react'
import ProductCard from '../product-card/ProductCard';
import Pagination from '../pagination/Pagination';

const CatalogPage = () => {
  const [products, setProducts] = useState([]);

  // valores relacionados ao painel de navegação do catalogo
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(4); // valor baixo apenas para visualizar funcionalidade
  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProducts = products.slice(firstProductIndex, lastProductIndex);

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
        {currentProducts.map(product => {
          return <ProductCard key={product.nome} product={product} />
        })}
      </div>
      <Pagination 
        nProducts={products.length}
        productsPerPage={productsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </section>
  )
}

export default CatalogPage