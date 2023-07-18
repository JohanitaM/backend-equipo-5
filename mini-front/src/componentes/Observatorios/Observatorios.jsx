
import React from 'react';
import styles from "./Observatorios.module.scss";
import Descripcionseñal from '../Descripcionseñal/Descripcionseñal';
import Paises from '../Paises/Paises';
import Crearseñal from '../CrearSeñal/Crearseñal';




export const Observatorios = () => {

  const {form, group1, group1__izquierdo1, group1__derecho1, group1__input} = styles;
  const {group2, group2__izquierdo2, group2__derecho2, group2__input, group2__inputd} = styles;
  const {group3, group3__izquierdo3, group3__derecho3, group3__input, group3__inputd2} = styles;
  const {adj, button, button__primary, button__secondary} = styles;

  return (
    <form className={form}>
      <Crearseñal/>
      <div className={group1}>
        <div className={group1__izquierdo1}>
          <span className={group1}>Titulo: *</span><br></br>
          <input id="titulo" type="text" className={group1__input}></input>
        </div><br/>

        <div className={group1__izquierdo1}>
          <span className={group1}>Categorias: *</span><br></br>
          <select id="observatorio" className={group1__input}>
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
        </div><br/>

        <div>
          <Paises/>
        </div><br/>

        <div className={group1__derecho1}>
          <Descripcionseñal/>
        </div>
      </div><hr/>

    <div className={group2}>
      <div className={group2__izquierdo2}>
        <span className={group2__izquierdo2}>Temas:</span><br/>
        <select id="temas" className={group2__input}>
          <option>Selecione</option>
          <option>Nuevas formas de trabajo</option>
          <option>Las personas en el centro</option>
          <option>Cambios en el aprendizaje</option>
          <option>Avances tecnologicos en el trabajo</option>
          <option>El lugar de trabajo</option>
          <option>Compensacion total</option>
          <option>Gestion del desempeño</option>
        </select>
      </div><br/>
      <div>
      <span className={group2__derecho2}>Tags:</span><br/>
        <select id="tags" className={group2__inputd}>
          <option>Selecione</option>
          <option></option>
          <option></option>
          <option></option>
        </select>
      </div><br/>
    </div><br/>

    <div>
      <div className={group3}>
          <span className={group3__izquierdo3}>URL: *</span><br/>
          <input id="url" type="url" className={group3__input}></input><br/>
        </div>

        <div>
          <span className={group3__derecho3}>¿Cuando ocurrio la señal?:*</span>
          <input id="fecha-señal" type="date"className={group3__inputd2}></input>
        </div>
    </div>

    <div>
      <span className={adj}> Adjuntar imagen y/o documento:</span><br/>
      <input type="file" />
    </div><br/>

    <div className={button}>
      <button className={button__primary}>
        CANCELAR
      </button>

      <button className={button__secondary}>
        CREAR SEÑAL
      </button>
    </div><br/>
    </form>

  )
}
