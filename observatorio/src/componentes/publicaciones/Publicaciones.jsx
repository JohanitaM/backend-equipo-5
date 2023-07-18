import React from 'react';
import styles from "./Publicaciones.module.scss";
import { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import imagen from '../../assets/img_noticia.jpeg'

const Publicaciones = () => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const {card, contenido, contenido__p, contenido__img, card__info} = styles;

  return (
    <div className={card}>
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
      <div className={contenido}>
        <p className={contenido__p}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint veniam vel fugiat natus neque commodi temporibus harum maxime, totam quibusdam tempora modi</p>
        <img src={imagen} alt="imagen" className={contenido__img}/>
      </div>
      
      <div className={card__info}>
        <span>2 horas</span>
        <span>Colombia</span>
        <button onClick={handleLikeClick}>
          {liked ? <AiFillHeart size={10} color="red" /> : <AiFillHeart size={10} color="grey"/>}
        </button>
      </div>
    </div>
  )
}

export default Publicaciones