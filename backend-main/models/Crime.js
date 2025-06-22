const mongoose = require('mongoose');

// Define the Crime schema
const CrimeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    publishedAt: { type: Date, default: Date.now },
    imgurl: { type: String, required: true }, // Optional, if you have a URL for the article
});

// Create and export the model
const Crime = mongoose.model('Crime', CrimeSchema);
module.exports = Crime; // Exporting the Crime model
