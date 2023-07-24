import React from 'react';
import styles from "./Obs.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import Publicaciones from '../publicaciones/Publicaciones';

const Obs = () => {

  const {navbar, navbar__title, navbar__button, seccionesCard} = styles;
  const {secciones, secciones__right, secciones__left, secciones__left__p, secciones__left__ideas, secciones__left__h2} = styles;

  return (
    <>
     <nav className={navbar}>
        <h1 className={navbar__title}>OBSERVATORIO</h1>
        <a href='http://localhost:3001/' className={navbar__button}>CREAR</a>
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
          <Publicaciones/>
          <Publicaciones/>
          <Publicaciones/>
          <Publicaciones/>
          <Publicaciones/>
          <Publicaciones/>
        </div>
      </section>
    </div>
    </div>
    </>
    )
}

export default Obs