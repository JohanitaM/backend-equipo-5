import React, {useState, useEffect} from 'react';
import styles from "./Obs.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import Publicaciones from '../publicaciones/Publicaciones';

const Obs = () => {

  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/news')
    .then(res => res.json())
    .then(data => setNoticias(data));
  },[])

  const {navbar, navbar__title, navbar__button, seccionesCard} = styles;
  const {secciones, secciones__right, secciones__left, secciones__left__p, secciones__left__ideas, secciones__left__h2} = styles;

  return (
    <>
     <nav className={navbar}>
        <h1 className={navbar__title}>OBSERVATORIO</h1>
        <a href='http://localhost:3001/' className={navbar__button} target='blanck'>CREAR</a>
    </nav>
    <SearchBar/>
    <div className={secciones}>
    <div className={secciones__left}>
      <section>
        <h2 className={secciones__left__h2}>Observatorios</h2>
        <p className={secciones__left__p}>Entorno</p>
        <p className={secciones__left__p}>Capacidades</p>
        <p className={secciones__left__p}>Sectores</p>
        <p className={secciones__left__ideas}>Ideas SURA</p>
        </section>
    </div>

    <div className={secciones__right}>
      <section>
        <p>Estas viendo: Ultimas publicaciones</p>
        <div className={seccionesCard}>
          {noticias.map (noticia => <Publicaciones noticia = {noticia} key={noticia._id}/>)}
        </div>
      </section>
    </div>
    </div>
    </>
    )
}

export default Obs