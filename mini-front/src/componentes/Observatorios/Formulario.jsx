
import React from 'react';
import styles from "./Formulario.module.scss";
import Descripcionseñal from '../Descripcionseñal/Descripcionseñal';
import Paises from '../Paises/Paises';
import Crearseñal from '../CrearSeñal/Crearseñal';




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
          <span>
            <p>Titulo: *</p><br></br>
            <input id="titulo" type="text" className={seccionform1__input}></input>
          </span>

          <span>
            <p>Categorias: *</p><br />
            <select id="observatorio" className={seccionform1__input}>
              <option>Seleccione</option>
              <option>Talento Humano</option>
              <option>Comunicación y marca</option>
              <option>Canales de distribución</option>
              <option>Autonomía</option>
              <option>Consumidor</option>
              <option>Competitividad</option>
              <option>Tecnología</option>
              <option>Sector energía</option>
              <option>Sector retail</option>
              <option>Gestión financiera</option>
              <option>Trabajo autónomo</option>
              <option>Movilidad</option>
              <option>Responsabilidad social</option>
              <option>Segmento alta renta</option>
              <option>Habitat</option>
              <option>Regulación</option>
              <option>Sectores economicos</option>
              <option>Megatendecias</option>
              <option>Sector Logística</option>
              <option>Salud</option>
              <option>Urbanización</option>
              <option>Escasez de recursos</option>
              <option>Macroeconomía</option>
              <option>Modelos de alianzas</option>
              <option>Inmobiliario</option>
              <option>Nutrición y alimentación</option>
              <option>Conectividad</option>
              <option>Coronavirus</option>
              <option>Agrícola</option>
              <option>Mercado LATAM</option>
              <option>Sistemas de información geográfica</option>
              <option>Límites Planetarios</option>
              <option>Demandas cuidadanas</option>
              <option>Analítica</option>
              <option>Auditoría Interna</option>
              <option>Transformación digital</option>
              <option>Construcción</option>
              <option>Clase media</option>
              <option>Cambios demográficos</option>
              <option>Educación</option>
              <option>Ciberseguridad</option>
            </select>
          </span>

          <span>
            <Paises/>
          </span>
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
          <span>URL: *</span>
          <input id="url" type="url" className={seccionform3__input}></input>
      </section>

      <section className={seccionform3__right}>
        <span>¿Cuando ocurrio la señal?</span>
        <input id="fecha-señal" type="date"></input>
      </section>
    </div>

    <div>
      <span className={adjuntar}> Adjuntar imagen y/o documento:</span><br/>
      <input type="file" className= {adjuntar__input}/>
    </div>

    <div className={botones}>
      <a href='http://localhost:3001/' className={botones__primario}>
        CANCELAR
      </a>

      <a  href='http://localhost:3001/' className={botones__secundario}>
        CREAR SEÑAL
      </a>
    </div><br/>


    </>


  )
}
export default Formulario