import React, { useEffect, useState } from 'react';
import styles from '../Paises/Paises.module.scss';

const Paises = () => {
  const {seccionform1__input, seccionform1__left} = styles;

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
    <div>
      <span htmlFor="pais-donde-ocurre-la-señal" className={seccionform1__left}>Pais donde ocurre la señal: *</span> <br/>
      <select className= {seccionform1__input}>
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