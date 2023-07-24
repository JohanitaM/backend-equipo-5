// app.js
const scrapeForm = document.getElementById('scrapeForm');
const urlInput = document.getElementById('urlInput');
const headerContainer = document.getElementById('headerContainer');
const paragraphsContainer = document.getElementById('paragraphsContainer');
const dateContainer = document.getElementById('dateContainer');
const loadingContainer = document.getElementById('loading');
const buttonsContainer = document.getElementById('buttons');

scrapeForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const url = urlInput.value.trim();

  // Mostrar "Cargando"
  loadingContainer.textContent = 'Extrayendo datos...';

  if (!url) {
    alert('Please enter a URL');
    return;
  }


  try {
    const response = await fetch('/scrape', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    });

    if (!response.ok) {
      throw new Error('Scraping failed');
    }

    const { paragraphs, title, date } = await response.json();

    // Ocultar "Cargando" y mostrar resultados
    loadingContainer.textContent = 'Datos guardados';
    // Cuando los resultados estén listo crear 2 botones
    // 1. Para volver a ingresar una URL
    // 2. Para volver a la página principal

    buttonsContainer.innerHTML = `<button id="backButton" onclick="window.location.href='/'">Ingresar otra url</button>`;
    buttonsContainer.innerHTML += `<a id="backButton" href='http://localhost:3000/'">Ir al observatorio</a>`;

    // paragraphsContainer.innerHTML = paragraphs.map(p => `<p>${p}</p>`).join('');
    // headerContainer.innerHTML = `<h1>${title}</h1>`;
    // dateContainer.innerHTML = `<p>${date}</p>`;
  } catch (error) {
    console.log(error);
  }
});