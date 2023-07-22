import React from 'react';
import { useState } from 'react';
import Select from 'react-select';
import styles from '../Categoria/Categoria.scss'

const Categoria = () => {

    const {seccionform1__input} = styles;

    const options = [
        { value: '', label: '' },
        { value: 'Talento Humano', label: 'Talento Humano' },
        { value: 'Comunicación y marca', label: 'Comunicación y marca' },
        { value: 'Canales de distribución', label: 'Canales de distribución' },
        { value: 'Autonomía', label: 'Autonomía' },
        { value: 'Consumidor', label: 'Consumidor' },
        { value: 'Competitividad', label: 'Competitividad' },
        { value: 'Tecnología', label: 'Tecnología' },
        { value: 'Sector energía', label: 'Sector energía' },
        { value: 'Sector retail', label: 'Sector retail' },
        { value: 'Gestión financiera', label: 'Gestión financiera' },
        { value: 'Trabajo autónomo', label: 'Trabajo autónomo' },
        { value: 'Movilidad', label: 'Movilidad' },
        { value: 'Responsabilidad social', label: 'Responsabilidad social' },
        { value: 'Segmento alta renta', label: 'Segmento alta renta' },
        { value: 'Habitat', label: 'Habitat' },
        { value: 'Regulación', label: 'Regulación' },
        { value: 'Sectores economicos', label: 'Sectores economicos' },
        { value: 'Megatendecias', label: 'Megatendecias' },
        { value: 'Sector Logística', label: 'Sector Logística' },
        { value: 'Salud', label: 'Salud' },
        { value: 'Urbanización', label: 'Urbanización' },
        { value: 'Escasez de recursos', label: 'Escasez de recursos' },
        { value: 'Macroeconomía', label: 'Macroeconomía' },
        { value: 'Modelos de alianzas', label: 'Modelos de alianzas' },
        { value: 'Inmobiliario', label: 'Inmobiliario' },
        { value: 'Nutrición y alimentación', label: 'Nutrición y alimentación' },
        { value: 'Conectividad', label: 'Conectividad' },
        { value: 'Coronavirus', label: 'Coronavirus' },
        { value: 'Agrícola', label: 'Agrícola' },
        { value: 'Mercado LATAM', label: 'Mercado LATAM' },
        { value: 'Sistemas de información geográfica', label: 'Sistemas de información geográfica' },
        { value: 'Límites Planetarios', label: 'Límites Planetarios' },
        { value: 'Demandas cuidadanas', label: 'Demandas cuidadanas' },
        { value: 'Analítica', label: 'Analítica' },
        { value: 'Auditoría Interna', label: 'Auditoría Interna' },
        { value: 'Transformación digital', label: 'Transformación digital' },
        { value: 'Construcción', label: 'Construcción' },
        { value: 'Clase media', label: 'Clase media' },
        { value: 'Cambios demográficos', label: 'Cambios demográficos' },
        { value: 'Educación', label: 'Educación' },
        { value: 'Ciberseguridad', label: 'Ciberseguridad' },

      ];
     

      // Estado para almacenar las opciones seleccionadas
      const [selectedOptions, setSelectedOptions] = useState([]);

      // Manejar cambios en la selección
      const handleSelectChange = (selected) => {
        setSelectedOptions(selected);
      };

      return (
        <>
          <p>Categorias: *</p>
          <Select
            isMulti
            options={options}
            onChange={handleSelectChange}
            value={selectedOptions}
            placeholder="Seleccione las categorias"
          />
        </>
      );
    };

export default Categoria