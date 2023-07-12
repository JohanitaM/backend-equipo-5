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
        <p className={area__text}>
          Caracteres: {text.length} / (max.{maxCharacters})
        </p>
        {isTextTooShort && (
          <p className={area__text}><strong>El texto es demasiado corto. El minimo es de</strong> {minCharacters}</p>
        )}
        {isTextTooLong && (
          <p className={area__text}><strong>El texto es demasiado largo. El limite es de</strong>{maxCharacters}</p>

        )}
    </div>
  )
}

export default Descripcionseñal