import React from 'react';
import styles from "./Publicaciones.module.scss";
import { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import imagen from '../../assets/img_noticia.jpeg'

const Publicaciones = ({noticia}) => {
  console.log(noticia);

  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const {card, contenido, contenido__p, contenido__img, card__info} = styles;

  return (
    <div className={card}>
      <h2>{noticia.title}</h2>
      <div className={contenido}>
        <p className={contenido__p}>{noticia.paragraphs}</p>
        <img src={imagen} alt="imagen" className={contenido__img}/>
      </div>

      <div className={card__info}>
        <span>{noticia.date}</span>
        <span>Colombia</span>
        <button onClick={handleLikeClick}>
          {liked ? <AiFillHeart size={10} color="red" /> : <AiFillHeart size={10} color="grey"/>}
        </button>
      </div>
    </div>
  )
}

export default Publicaciones