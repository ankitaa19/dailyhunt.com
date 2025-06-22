// routes/entertainment.js
const express = require('express');
const Entertainment = require('../models/Entertainment');
const router = express.Router();

// Get all entertainment articles
router.get('/', async (req, res) => {
    try {
        const articles = await Entertainment.find();
        res.json(articles);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch articles' });
    }
});

// Create a new entertainment article
router.post('/', async (req, res) => {
    const { title, description, url } = req.body;
    const article = new Entertainment({ title, description, url });

    try {
        await article.save();
        res.status(201).json(article);
    } catch (error) {
        res.status(400).json({ error: 'Failed to create article' });
    }
});

// Export the router
module.exports = router;
