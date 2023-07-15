import React from 'react';
import styles from "./Navbar.module.scss";

const Navbar = () => {

  const {navbar, navbar__title, navbar__li, navbar__links, navbar__button, navbar__a} = styles;

  return (
    <nav className={navbar}>
        <h1 className={navbar__title}>OBSERVATORIO</h1>
        <ul className={navbar__links}>
            <li className={navbar__li}><a href='/' className={navbar__a}>Metodologia</a></li>
            <li className={navbar__li}><a href='Tendencias'className={navbar__a}>Tendencias</a></li>
            <li className={navbar__li}><a href='Mis favoritos' className={navbar__a}>Mis Favoritos</a></li>
            <li className={navbar__li}><a href='Talleres' className={navbar__a}>Talleres</a></li>
        </ul>
        <button className={navbar__button}>CREAR +</button>
    </nav>
  )
}

export default Navbar