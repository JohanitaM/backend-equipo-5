// app.js
const scrapeForm = document.getElementById('scrapeForm');
const urlInput = document.getElementById('urlInput');
const paragraphsContainer = document.getElementById('paragraphsContainer');
const headersContainer = document.getElementById('headersContainer');

scrapeForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const url = urlInput.value.trim();

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

    const { paragraphs, headers, links } = await response.json();

    paragraphsContainer.innerHTML = paragraphs.map(p => `<p>${p}</p>`).join('');
    headersContainer.innerHTML = headers.map(h => `<h3>${h}</h3>`).join('');
    linksContainer.innerHTML = links.map(l => `<a href="${l}">${l}</a>`).join('');
  } catch (error) {
    console.error(error);
    alert('Scraping failed');
  }
});
