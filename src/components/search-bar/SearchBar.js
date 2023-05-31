import React, {useState ,useEffect} from 'react'
import {FaSearch} from 'react-icons/fa'

import './SearchBar.css'

const SearchBar = ({setSearchResults}) => {
  const [searchInput, setSearchInput] = useState("");
  
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    fetchData();
  };

  const fetchData = () => {
    fetch("https://apitrainees.herokuapp.com/celulares")
    .then((response) => response.json())
    .then((json) => {
        { /* filtra os resultados da API utilizando o valor do input digitado */}
        const results = json.filter((product) => {
          return (
            searchInput &&
            product &&
            product.nome &&
            product.nome.toLowerCase().includes(searchInput)
          );
        });
        // setSearchResults(results);
        console.log(results);
      });
  };

  useEffect(() => {
    fetchData(searchInput);
  }, []);

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