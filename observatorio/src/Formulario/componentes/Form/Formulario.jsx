
import React from 'react';
import styles from "./Formulario.module.scss";
import Descripcionseñal from '../Descripcionseñal/Descripcionseñal';
import Paises from '../Paises/Paises';
import Crearseñal from '../CrearSeñal/Crearseñal';
import Categoria from '../Categoria/Categoria';


export const Formulario = () => {
  

  const {seccionform1, seccionform1__left, seccionform1__right, seccionform1__input} = styles;
  const {seccionform2, seccionform2__left, seccionform2__right, seccionform2__input} = styles;
  const {seccionform3, seccionform3__left, seccionform3__right, seccionform3__input} = styles;
  const {adjuntar, adjuntar__input, botones, botones__primario, botones__secundario} = styles;

  return (
    <>
    <Crearseñal/>
    <div className={seccionform1}>
      <section className={seccionform1__left}>
          <div>
            <span>Titulo: *</span><br></br>
            <input id="titulo" type="text" className={seccionform1__input}></input>
          </div>

          <div style={{ width: '71%', padding: '5px', border:'5px', heigh:'auto'}}>
            <Categoria id="categoria"/><br />
          </div>

          <div>
            <Paises/>
          </div>
      </section>
      <section className={seccionform1__right}>
          <span>
            <Descripcionseñal/>
          </span>
      </section>
    </div><hr/>

    <div className={seccionform2}>
      <section className={seccionform2__left}>
        <span>Temas:</span><br/>
        <select id="temas" className={seccionform2__input}>
          <option>Selecione</option>
          <option>Nuevas formas de trabajo</option>
          <option>Las personas en el centro</option>
          <option>Cambios en el aprendizaje</option>
          <option>Avances tecnologicos en el trabajo</option>
          <option>El lugar de trabajo</option>
          <option>Compensacion total</option>
          <option>Gestion del desempeño</option>
        </select>
      </section><br/>
      <section className={seccionform2__right}>
        <span>Tags:</span><br/>
        <select id="tags" className={seccionform1__input}>
            <option>Selecione</option>
            <option></option>
            <option></option>
            <option></option>
        </select>
      </section><br/>
    </div>

    <div className={seccionform3}>
      <section className={seccionform3__left}>
          <span>URL: </span><br />
          <input id="url" type="url" className={seccionform3__input}></input>
      </section>

      <section className={seccionform3__right}>
        <span>¿Cuando ocurrio la señal? </span>
        <input id="fecha-señal" type="date"></input>
      </section>
    </div>

    <div>
      <span className={adjuntar}> Adjuntar imagen y/o documento:</span><br/>
      <input type="file" className= {adjuntar__input}/>
    </div>

    <div className={botones}>
      <a href='http://localhost:3000/' className={botones__primario}>CANCELAR</a>

      <a  href='http://localhost:3001/' className={botones__secundario} target='blanck'>CREAR SEÑAL</a>
    </div><br/>


    </>


  )
}
export default Formulario