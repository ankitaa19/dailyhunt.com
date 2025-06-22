const express = require('express');
const router = express.Router();
const Technology = require('../models/Technology');

// GET all technology articles
router.get('/', async (req, res) => {
    try {
        const articles = await Technology.find();
        res.json(articles);
    } catch (error) {
        console.error('Error fetching technology articles:', error);
        res.status(500).json({ error: 'Failed to fetch articles' });
    }
});

// POST a new technology article
router.post('/', async (req, res) => {
    const { title, description, url } = req.body;
    try {
        const newArticle = new Technology({ title, description, url });
        await newArticle.save();
        res.status(201).json(newArticle);
    } catch (error) {
        console.error('Error creating technology article:', error);
        res.status(500).json({ error: 'Failed to create article' });
    }
});

module.exports = router;
