import React from 'react'
import './SearchResult.css'

const SearchResult = ({product}) => {
  return (
    <div className='search-result'>{product.nome}</div>
  )
}

export default SearchResult