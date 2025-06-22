const mongoose = require('mongoose');

// Define the Education schema
const EducationSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    publishedAt: { type: Date, default: Date.now },
    url: { type: String, required: true }, // Optional, if you have a URL for the article
});

// Create and export the model
module.exports = mongoose.model('Education', EducationSchema);
