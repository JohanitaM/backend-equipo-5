import React, {useState} from 'react';
import {FaTimes, FaSearch} from 'react-icons/fa';


import styles from "./SearchBar.module.scss";

const SearchBar = () => {

  const {busqueda, busqueda__inputb, busqueda__buttonb} = styles;

    const {searchText, setSearchText} = useState('');

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleCleanerSearch = () => {
      searchText('');
    }


  return (
    <div className={busqueda}>
        <input type="text" value={searchText} onChange={handleSearchChange} className={busqueda__inputb} placeholder="Buscar..." />
        {searchText && (
           <button className={busqueda__buttonb} onClick={handleCleanerSearch}>
            <FaTimes/>
           </button>
        )}
        <button className={busqueda__buttonb}> 
          Buscar <FaSearch/>
        </button>
       
    </div>
  )
}

export default SearchBar