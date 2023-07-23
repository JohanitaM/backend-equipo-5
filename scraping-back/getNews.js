const express = require("express");
const puppeteer = require("puppeteer");
const path = require("path");
// fs para guardar el archivo en el servidor en formato JSON
const fs = require("fs");
// Mongo client para guardar el archivo en la base de datos

const app = express();
const port = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

// Conexción a la base de datos


app.post("/scrape", async (req, res) => {
  const { url } = req.body;
  //Configurar el navegador y la página web en puppeteer
  // Configurar mongo client
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    // Obtener el encabezado de la página
    const title = await page.evaluate(() => {
      const title = document.querySelector("h1").innerText;
      return title;
    });

    const paragraphs = await page.evaluate(() => {
      const paragraphs = [];
      const paragraphElements = document.querySelectorAll("p");
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

  // Guardar la información extraída en un archivo JSON en un directorio del servidor


    // Guardar la información extraída en un archivo JSON
    fs.writeFile(
      "data.json",
      JSON.stringify({ title, paragraphs, date }, null, 2),
      (err) => {
        if (err) {
          console.error("Ocurrió un error al guardar el archivo:", err);
          return;
        }
        console.log("Archivo guardado");
      }
    );
    await browser.close();

    // Guardar la información extraída en la base de datos

    // Enviar la información extraída como respuesta
    res.json({
      paragraphs: paragraphs,
      title: title,
      date: date,
    });
  } catch (error) {
    console.error("Ocurrió un error:", error);
    res.status(500).json({ error: "Ocurrió un error durante el scraping" });
  }
});

app.listen(port, () => {
  console.log(`Servidor web en ejecución en http://localhost:${port}`);
});
