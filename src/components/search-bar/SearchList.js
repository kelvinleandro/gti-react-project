import React from 'react'
import './SearchList.css'
import SearchResult from './SearchResult'

const SearchList = ({products}) => {
  return (
    <div className='result-list'>
      {
        products.map((product, index) => {
          return <SearchResult product={product} key={index} />
        })
      }
    </div>
  )
}

export default SearchList