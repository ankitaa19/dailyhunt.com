const express = require('express');
const Business = require('../models/Business');
const router = express.Router();

// Get all business news
router.get('/', async (req, res) => {
    try {
        const businessNews = await Business.find();
        res.status(200).json(businessNews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new business news entry
router.post('/', async (req, res) => {
    const { title, description, publishedAt, category, imgUrl } = req.body; // Include imgUrl here

    const business = new Business({
        title,
        description,
        publishedAt,
        category,
        imgUrl, // Add imgUrl to the document
    });

    try {
        await business.save();
        res.status(201).send(business);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});

module.exports = router;
