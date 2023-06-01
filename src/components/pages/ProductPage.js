import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  // const {nome, img, descricao, preco} = {product};
  const {id} = useParams();
  const [product, setProduct] = useState(null);
  // const location = useLocation();
  // const { product } = location.state;

  const getProduct = async () => {
    const url = "https://apitrainees.herokuapp.com/celulares/"
    const response = await fetch(url);
    const data = await response.json();
    setProduct(data[id]);
  }
  
  useEffect(() => {
    getProduct();
  },[]);
  
  return (
    <section className='w-full'>
      <div className='w-full grid md:grid-cols-2'>
        <div>
          <img src={product.img} alt={product.nome} />
        </div>
        <div className='product-detail'>
          <h1>{product.nome}</h1>
          <p>{product.preco}</p>
          <button className='w-[50%] my-btn red-btn hover:scale-105'>adicionar ao carrinho</button>
          <button className='w-[50%] my-btn blue-btn hover:scale-105'>comprar agora</button>
          <div>
            <p>Calcule o frete e prazo de entrega</p>
            <input
              type="text"
              pattern="[0-9]*"
              inputMode="numeric"
              maxLength="8"
              placeholder="_____-___"
            />
            <button className='my-btn blue-btn'>Calcular</button>
          </div>
        </div>
      </div>
      <div className='about-product'>
        <h2>DESCRIÇÃO DO PRODUTO</h2>
        <p>{product.descricao}</p>
      </div>
    </section>
  )
}

export default ProductPage