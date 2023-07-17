import React from 'react';
import styles from './Descripcionseñal.module.scss';
import { useState } from 'react';

const Descripcionseñal = () => {

  const {group1__derecho1, area, area__text} = styles;
  
  const [text, setText] = useState('');
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const minCharacters = 8;
  const maxCharacters = 1500;

  const isTextTooShort = text.length < minCharacters;
  const isTextTooLong = text.length > maxCharacters;
  
  return (
    <div className={group1__derecho1}>
      <p>Descripcion de la senal: *</p>
        <textarea id="myTextarea" value={text} onChange={handleChange} className={area}></textarea>
    </div>
  )
}

export default Descripcionseñal