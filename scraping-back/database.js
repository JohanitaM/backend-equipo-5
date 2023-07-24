const { MongoClient } = require('mongodb');
const uri = 'mongodb://127.0.0.1:27017'; // Utiliza la dirección IPv4

async function connectToMongoDB() {
    const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
    return client.db('scraping'); // scraping: nombre de tu base de datos
  }

module.exports = connectToMongoDB;