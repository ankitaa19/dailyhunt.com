// models/Sports.js
const mongoose = require('mongoose');

const sportsNewsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    publishedAt: { type: Date, required: true },
    url: { type: String, required: true },
});

const Sports = mongoose.model('Sports', sportsNewsSchema);

module.exports = Sports;
