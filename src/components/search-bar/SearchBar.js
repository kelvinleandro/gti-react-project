import React, {useState} from 'react'
import {FaSearch} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'

import './SearchBar.css'

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const clearInput = () => {
    setSearchInput("");
  }

  return (
    <div className='search-container'>
      <div className='search-input'>
        <input
          type="search"
          placeholder="Busque aqui"
          onChange={e => setSearchInput(e.target.value)}
          value={searchInput} />

        <div className="search-icon">
          {searchInput.length === 0 ? (
            <FaSearch size={20} />
          ) : (
            <AiOutlineClose size={20} id="clear-btn" onClick={clearInput} />
          )}
        </div>

      </div>
        
   </div>
  )
}

export default SearchBar