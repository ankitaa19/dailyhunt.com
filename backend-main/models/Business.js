// models/Business.js
const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    publishedAt: { type: Date, required: true },
    category: { type: String, required: true },
    imgUrl: { type: String, required: true }
});

const Business = mongoose.model('Business', businessSchema);

module.exports = Business;
