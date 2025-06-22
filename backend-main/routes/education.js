const express = require('express');
const router = express.Router();
const Education = require('../models/Education');

// Get all education articles
router.get('/', async (req, res) => {
    try {
        const articles = await Education.find();
        res.json(articles);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch education articles' });
    }
});

// Create a new education article
router.post('/', async (req, res) => {
    const { title, description, publishedAt, url } = req.body;
    const newArticle = new Education({ title, description, publishedAt, url });

    try {
        const savedArticle = await newArticle.save();
        res.status(201).json(savedArticle);
    } catch (error) {
        res.status(400).json({ error: 'Failed to create education article' });
    }
});

module.exports = router;
