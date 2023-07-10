import React from 'react';
import styles from "./Observatorios.module.scss"

export const Observatorios = () => {
  return (
    <form>
      <div>
        <label htmlFor="titulo">Titulo: *</label><br></br>
        <input id="titulo" type="text"></input>
    </div><br></br>

      <div>
       <label htmlFor="titulo">Observatorios: *</label><br></br>
        <select id="titulo">
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
      <label htmlFor="pais-donde-ocurre-la-señal">Pais donde ocurre la señal: *</label>
      <select id="pais-donde-ocurre-la-señal">
        <option>Selecione</option>
        <option>Global</option>
        <option></option>
        <option></option>
      </select>
    </div><br></br>

    <div>
      <label htmlFor="decripcion-de-la-señal">Descripcion de la señal: *</label><br></br>
      <textarea name="textarea"></textarea>
    </div><hr></hr>

    <div>
    <label htmlFor="temas">Temas: *</label><br></br>
      <select id="temas">
        <option>Selecione</option>
        <option></option>
        <option></option>
        <option></option>
      </select>

      <label htmlFor="tags">Tags: *</label><br></br>
      <select id="tags">
        <option>Selecione</option>
        <option></option>
        <option></option>
        <option></option>
      </select>
    </div>

    <div>
      <label htmlFor="url">URL: *</label><br></br>
      <input id="url" type="url"></input><br></br>

      <label htmlFor="fecha-senal">¿Cuando ocurrio la señal?: *</label><br></br>
      <input id="fecha-señal" type="date"></input>
    </div><br></br>
    <div>
      <label htmlFor="adjuntar-img">Adjuntar imagen y/o documento:</label><br></br>
      <input type="file" />
    </div><br></br>
    
    <div>
      <button>CANCELAR</button>
      <button>CREAR SEÑAL</button>
    </div>
    </form>
    
  )
}
