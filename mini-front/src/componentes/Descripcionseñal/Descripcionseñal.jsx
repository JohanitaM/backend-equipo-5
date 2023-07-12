import React from 'react';
import styles from './Descripcionseñal.module.scss';
import { useState } from 'react';

const Descripcionseñal = () => {

  const {area, area__text} = styles;
  
  const [text, setText] = useState('');
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const minCharacters = 8;
  const maxCharacters = 1500;

  const isTextTooShort = text.length > minCharacters;
  const isTextTooLong = text.length > maxCharacters;
  
  return (
    <div>
        <textarea id="myTextarea" value={text} onChange={handleChange} className={area}></textarea>
        <p className={area__text}>
          Caracteres: {text.length} / (max.{maxCharacters})
        </p>
        {isTextTooLong && (
          <p className={area__text}>El texto es demasiado largo. El limite es de {maxCharacters}</p>
        )}
    </div>
  )
}

export default Descripcionseñal