const mongoose = require('mongoose');

// Define the Technology schema
const TechnologySchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    publishedAt: { type: Date, default: Date.now },
    imgurl: { type: String, required: true }, // Optional, if you have a URL for the article
});

// Create and export the model
module.exports = mongoose.model('Technology', TechnologySchema);
