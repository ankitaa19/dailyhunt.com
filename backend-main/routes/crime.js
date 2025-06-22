const express = require('express');
const Crime = require('../models/Crime'); // Ensure the path is correct
const router = express.Router();

// Get all crime news
router.get('/', async (req, res) => {
    try {
        const crimeNews = await Crime.find();
        res.status(200).json(crimeNews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new crime news entry
router.post('/', async (req, res) => {
    const { title, description, publishedAt, imgurl } = req.body; // Use imgurl instead of url

    const crime = new Crime({
        title,
        description,
        publishedAt,
        imgurl, // Correctly using imgurl here
    });

    try {
        await crime.save();
        res.status(201).send(crime);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});

module.exports = router;
