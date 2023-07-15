const express = require('express');
const puppeteer = require('puppeteer');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.post('/scrape', async (req, res) => {
  const { url } = req.body;

  //Configurar el navegador y la página web en puppeteer

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const paragraphs = await page.evaluate(() => {
      const paragraphs = [];
      const paragraphElements = document.querySelectorAll('p');
      paragraphElements.forEach((element) => {
        paragraphs.push(element.innerText);
      });
      return paragraphs;
    });
  
    // Obtener todos los encabezados
    const headers = await page.evaluate(() => {
      const headers = [];
      const headerElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      headerElements.forEach((element) => {
        headers.push(element.innerText);
      });
      return headers;
    });

    await browser.close();

    // Enviar la información extraída como respuesta
    res.json({
      paragraphs: paragraphs,
      headers: headers
    });
  } catch (error) {
    console.error('Ocurrió un error:', error);
    res.status(500).json({ error: 'Ocurrió un error durante el scraping' });
  }
});

app.listen(port, () => {
  console.log(`Servidor web en ejecución en http://localhost:${port}`);
});
