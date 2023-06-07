import React, {useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'

import './SearchBar.css'

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const getFilteredProducts = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    const filtered = data.filter(product => {
      return product.nome.toLowerCase().includes(value.toLowerCase());
    });

    if (value === "") {
      setFilteredProducts([]);
    } else {
      setFilteredProducts(filtered);
    }
  };
  
  const fetchData = () => {
    fetch("https://apitrainees.herokuapp.com/celulares")
    .then((response) => response.json())
    .then((data) => setData(data));
  };

  const clearInput = () => {
    setFilteredProducts([]);
    setSearchInput([]);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='search-container'>
      <div className='search-input'>
        <input
          type="search"
          placeholder="Busque aqui"
          onChange={getFilteredProducts}
          value={searchInput} />
        <div className="search-icon">
          {filteredProducts.length === 0 ? (
            <FaSearch size={20} />
          ) : (
            <AiOutlineClose size={20} id="clear-btn" onClick={clearInput} />
          )}
        </div>
      </div>
        
      {/* {filteredProducts.length > 0 && (
        <div className="data-results">
          {filteredProducts.map((product, index) => {
            return (
              <a
                className="search-item" 
                key={index}>
                <p>{product.nome}</p>
              </a>
            );
          })}
        </div>
      )} */}
   </div>
  )
}

export default SearchBar