import React from 'react';
import styles from "./Observatorios.module.scss";
import Descripcionseñal from '../Descripcionseñal/Descripcionseñal';
import Paises from '../Paises/Paises';


export const Observatorios = () => {

  const {form, group1, group1__input} = styles;

  return (
    <form className={form}>

    <div className={group1}>
      <div>
        <label htmlFor="titulo" className={group1}>Titulo: *</label><br></br>
        <input id="titulo" type="text" className= {group1__input}></input>
      </div><br></br>

      <div>
       <label htmlFor="observaorio" className={group1}>Observatorios: *</label><br></br>
        <select id="observatorio" className= {group1__input}>
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
      </div><br></br>

      <div>
        <Paises/>
      </div><br></br>
    </div>
    <div>
      <div>
          <Descripcionseñal/>
        </div>
    </div><hr></hr>

    <div className={group1}>
      <div>
      <label htmlFor="temas" className={group1}>Temas:</label><br></br>
        <select id="temas" className= {group1__input}>
          <option>Selecione</option>
          <option>Nuevas formas de trabajo</option>
          <option>Las personas en el centro</option>
          <option>Cambios en el aprendizaje</option>
          <option>Avances tecnologicos en el trabajo</option>
          <option>El lugar de trabajo</option>
          <option>Compensacion total</option>
          <option>Gestion del desempeño</option>
        </select><br></br>

        <label htmlFor="tags" className={group1}>Tags:</label><br></br>
        <select id="tags" className= {group1__input}>
          <option>Selecione</option>
          <option></option>
          <option></option>
          <option></option>
        </select>
      </div>
      

        <div>
        <label htmlFor="url" className={group1}>URL: *</label><br></br>
          <input id="url" type="url" className= {group1__input}></input><br></br>
        </div>

    </div><br></br>

<div>
        <div>
        <label htmlFor="fecha-senal"  className={group1}>¿Cuando ocurrio la señal?: *</label><br></br>
        <input id="fecha-señal" type="date"className= {group1__input}></input>
      </div><br></br>
    
    
    <div className={group1}>
      <label htmlFor="adjuntar-img"> Adjuntar imagen y/o documento:  </label><br></br>
      <input type="file" />
    </div><br></br>
    </div>
    <div><br></br>
      <button  >CANCELAR</button>
      <button>CREAR SEÑAL</button>
    </div><br></br><br></br>
    </form>
    
  )
}
