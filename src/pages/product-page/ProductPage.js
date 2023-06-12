import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import './ProductPage.css'

const ProductPage = () => {
  const {id} = useParams();
  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    const response = await fetch('https://apitrainees.herokuapp.com/celulares');
    const data = await response.json();
    const filtered = await data.find((item) => item.nome === id);
    setProduct(filtered);
  }
  
  useEffect(() => {
    getProduct();
  }, []);
  
  return (
    <>
      {product && 
        <section className='w-full p-5 product-page'>
          <div className='w-full grid md:grid-cols-2'>
            
            <div className='product-img flex justify-center max-h-96'>
              <img src={product.img} alt={product.nome} className='h-full' />
            </div>
            
            <div className='product-detail'>
              <h1 className='font-bold text-3xl'>{product.nome}</h1>
              <p className='font-medium text-xl'>{product.preco}</p>
              <div className='flex justify-between md:w-[60%]'>
                <button className='w-[40%] my-btn red-btn hover:scale-105'>adicionar ao carrinho</button>
                <button className='w-[40%] my-btn blue-btn hover:scale-105'>comprar agora</button>
              </div>

              <div className='frete my-3 flex flex-col items-center'>
                <p className='w-full font-medium text-lg'>Calcule o frete e prazo de entrega</p>
                <div className='w-full'>
                  <input
                    type="text"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    maxLength="8"
                    placeholder="_____-___"
                  />
                  <button className='my-btn blue-btn mt-3 sm:mt-0'>Calcular</button>
                </div>

              </div>
            </div>
          </div>

          <div className='w-full about-product'>
            <h2 className='font-bold text-xl'>DESCRIÇÃO DO PRODUTO</h2>
            <p className='text-lg'>{product.descricao}</p>
          </div>

        </section>
      }
    </>
  )
}

export default ProductPage