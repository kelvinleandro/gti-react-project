import React, {useState} from 'react'
import {FaSearch} from 'react-icons/fa'

import './SearchBar.css'

const SearchBar = ({setSearchResults}) => {
  const [searchInput, setSearchInput] = useState("");
  
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    fetchData(searchInput);
  };

  const fetchData = (value) => {
    fetch("https://apitrainees.herokuapp.com/celulares")
    .then((response) => response.json())
    .then((json) => {
        { /* filtra os resultados da API utilizando o valor do input digitado */}
        const results = json.filter((product) => {
          return (
            value &&
            product &&
            product.nome &&
            product.nome.toLowerCase().includes(value)
          );
        });
        setSearchResults(results);
      });
  };

  return (
    <div className='search-wrapper'>
      <FaSearch id='search-icon'/>
      <input
      type="search"
      placeholder="Busque aqui"
      onChange={handleChange}
      value={searchInput} />
   </div>
  )
}

export default SearchBar