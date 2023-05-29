import React from 'react'
import { Link } from 'react-router-dom'
import './PageNotFound.css'

const PageNotFound = () => {
  return (
    <div className='notFound w-full grid content-center text-center justify-items-center'>
      <h1 className='text-9xl font-bold'>404</h1>
      <h2 className='text-4xl font-bold'>OOPS! ESSA PÁGINA NÃO EXISTE.</h2>
      <p className='text-2xl font-medium'>Volte para a página inicial.</p>
      <Link to="/"><button className='sign-btn text-2xl'>VOLTAR</button></Link> 
    </div>
  )
}

export default PageNotFound