import React from 'react'
import './Pagination.css'

const Pagination = ({nProducts, productsPerPage, setCurrentPage, currentPage }) => {
  let pages = [];

  for(let i = 1; i <= Math.ceil(nProducts / productsPerPage); i++){
    pages.push(i);
  }
    
  return (
    <div className='pagination-container'>
      {pages.map(page => {
        return (
          <button key={page} onClick={() => setCurrentPage(page)} className={page == currentPage ?  'active' : ''}>{page}</button>
        );
      })}
    </div>
  )
}

export default Pagination