const connectToMongoDB = require('./database')
const express = require('express');
const { ListCollectionsCursor } = require('mongodb');
const router = express.Router();
router.get('/', async function(req, res) {
    const db = await connectToMongoDB();
    const collection = db.collection('news');
    const news = await collection.find().toArray();
    res.json(news);
});

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> b00da1d7721d36a8d656d15fd136d2695871b803
