import React from 'react';
import styles from "./Obs.module.scss";

const Obs = () => {

  const {navbar, navbar__title, navbar__li, navbar__links, navbar__button, navbar__a} = styles;

  return (
    <nav className={navbar}>
        <h1 className={navbar__title}>OBSERVATORIO</h1>
        <button className={navbar__button}>CREAR</button>
    </nav>
  )
}

export default Obs