const express = require('express');
const router = express.Router();
const Sports = require('../models/Sports'); // Ensure the path is correct

// GET request for all sports news
router.get('/', async (req, res) => {
    try {
        const sportsNews = await Sports.find();
        res.json(sportsNews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST request to create new sports news
router.post('/', async (req, res) => {
    const sportsNews = new Sports({
        title: req.body.title,
        description: req.body.description,
        publishedAt: req.body.publishedAt,
        url: req.body.url,
    });

    try {
        const newSportsNews = await sportsNews.save();
        res.status(201).json(newSportsNews);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
