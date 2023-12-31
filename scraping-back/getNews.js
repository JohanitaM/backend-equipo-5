const connectToMongoDB = require('./database')
const express = require('express');
const cors = require('cors')
const puppeteer = require('puppeteer');
const path = require('path');
const fetchNews = require('./fetchNews');
// fs para guardar el archivo en el servidor en formato JSON
const fs = require('fs');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.use("/news", fetchNews);

app.use(express.static(path.join(__dirname, 'public')));

app.post('/scrape', async (req, res) => {
  const { url } = req.body;

  const db = await connectToMongoDB();
  const collection = db.collection('news'); //news: nombre de la coleccion

  

  //Configurar el navegador y la página web en puppeteer
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

     // Obtener el encabezado de la página
     const title = await page.evaluate(() => {
      const title = document.querySelector("h1").innerText;
      return title;
    });

    // Obtener todos los parrafos
    const paragraphs = await page.evaluate(() => {
      const paragraphs = [];
      const paragraphElements = document.querySelectorAll('p');
      paragraphElements.forEach((element) => {
        paragraphs.push(element.innerText);
      });
      return paragraphs;
    });
  
  
    // Obtener la fecha de publicación o página
    const date = await page.evaluate(() => {
      const date = document.querySelector("time").innerText;
      return date;
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
    fs.writeFile('data.json', JSON.stringify({ title, paragraphs, date}, null, 2), (err) => {
      if (err) {
        console.error('Ocurrió un error al guardar el archivo:', err);
        return;
      }
      console.log('Archivo guardado');
    });
    await browser.close();

    // Guardar la información extraída en un arreglo de objetos
    const news = [ { title, paragraphs, date } ];
    await collection.insertMany(news);
   

    // Enviar la información extraída como respuesta
    res.json({
      paragraphs: paragraphs,
      title: title,
      date: date,
    });
  } catch (error) {
    console.error('Ocurrió un error:', error);
    res.status(500).json({ error: 'Ocurrió un error durante el scraping' });
  }
});

app.listen(port, () => {
  console.log(`Servidor web en ejecución en http://localhost:${port}`);
});


