const { MongoClient } = require('mongodb');
const uri = 'mongodb://127.0.0.1:27017'; // Utiliza la dirección IPv4
const express = require('express');
const puppeteer = require('puppeteer');
const path = require('path');
// fs para guardar el archivo en el servidor en formato JSON
const fs = require('fs');
async function connectToMongoDB() {
  const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
  return client.db('scraping'); // Reemplaza 'myDatabase' con el nombre de tu base de datos
}

const app = express();
const port = 3001;

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.post('/scrape', async (req, res) => {
  const { url } = req.body;

  const db = await connectToMongoDB();
  const collection = db.collection('news'); 
  try {
    const result = await collection.insertMany({
      title: title,
      paragraphs: paragraphs,
      date: date,
    });

    console.log('Datos guardados en MongoDB:', result.insertedId);
  } catch (error) {
    console.error('Ocurrió un error al guardar en MongoDB:', error);
  }

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

    // Obtener todos los enlaces
    // const links = await page.evaluate(() => {
    //   const links = [];
    //   const linkElements = document.querySelectorAll('a');
    //   linkElements.forEach((element) => {
    //     links.push(element.href);
    //   });
    //   return links;
    // });

    // Guardar la información extraída en un archivo JSON
    fs.writeFile('data.json', JSON.stringify({ paragraphs, headers}, null, 2), (err) => {
      if (err) {
        console.error('Ocurrió un error al guardar el archivo:', err);
        return;
      }
      console.log('Archivo guardado');
    });
    await browser.close();

    // Enviar la información extraída como respuesta
    res.json({
      paragraphs: paragraphs,
      headers: headers,
    });
  } catch (error) {
    console.error('Ocurrió un error:', error);
    res.status(500).json({ error: 'Ocurrió un error durante el scraping' });
  }
});

app.listen(port, () => {
  console.log(`Servidor web en ejecución en http://localhost:${port}`);
});
