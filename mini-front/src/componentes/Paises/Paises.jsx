import React, { useEffect, useState } from 'react';
import styles from '../Paises/Paises.module.scss';

const Paises = () => {
  const {group1__izquierdo1, group1, group1__input} = styles;

    const [countries, setCountries] = useState([]);

    useEffect(() => {
      const fetchCountries = async () => {
        try {
          const response = await fetch('https://restcountries.com/v3.1/all');
          const data = await response.json();
          setCountries(data);
        } catch (error) {
          console.log('Error fetching countries:', error);
        }
      };
  
      fetchCountries();
    }, []);
  
  return (
    <div className={group1__izquierdo1}>
        <label htmlFor="pais-donde-ocurre-la-señal" className={group1}>Pais donde ocurre la señal: *</label><br></br>
       <select className= {group1__input}>
       <option></option>
       <option>Global</option>
        {countries.map((country) => (
          <option key={country.name.common} value={country.name.common}>
            {country.name.common}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Paises