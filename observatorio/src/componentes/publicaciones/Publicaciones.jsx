import React from 'react';
import styles from "./Publicaciones.module.scss";
import { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import imagen from '../../assets/img_noticia.jpeg'

const Publicaciones = ({noticia}) => {
  //console.log(noticia);

  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const {card, contenido, contenido__p, contenido__img, card__info} = styles;

  const parrafos = document.querySelectorAll("p[resumen]");

  parrafos.forEach(parrafo => {
    const maxCharacters = parseInt(parrafo.getAttribute("resumen"));
    let textoCompleto = parrafo.textContent.trim();

    if (textoCompleto.length > maxCharacters) {
      // Resumir el texto
      const textoResumido = textoCompleto.slice(0, maxCharacters) + "...";
      parrafo.textContent = textoResumido;
    }
  });

  return (
    <div className={card}>
      <h2>{noticia.title}</h2>
      <div className={contenido}>
        <p className={contenido__p} resumen="200">{noticia.paragraphs}</p>
      </div>

      <div className={card__info}>
        <span>{noticia.date}</span>
        <button onClick={handleLikeClick}>
          {liked ? <AiFillHeart size={10} color="red" /> : <AiFillHeart size={10} color="grey"/>}
        </button>
      </div>
    </div>
  )
}

export default Publicaciones