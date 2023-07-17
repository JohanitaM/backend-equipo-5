// frontend/src/App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  const getDataFromBackend = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/data'); // Asegúrate de que la URL coincida con el puerto en el que se ejecuta tu backend
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  return (
    <div>
      <h1>Observatorio</h1>
      <form id="scrapeForm">
      <input type="text" id="urlInput" required placeholder="ingresa la url"/>
      <button type="submit" onClick={getDataFromBackend}>buscar</button>
      </form>

      <div>{message}</div>

      <div id="resultsContainer">
        <h2>Resultados:</h2>
        <div id="paragraphsContainer"></div>
        <div id="headersContainer"></div>
        <script></script>
      </div>
    </div>
  );
}

export default App;