const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema({
    imagePath: {
        type: String,
        required: true,
        default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ADefault_pfp.svg&psig=AOvVaw2W7HsCFHjKQhYjGGgxq1RW&ust=1734678034021000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNiT7rGhs4oDFQAAAAAdAAAAABAE"
    },
    description: {
        type: String,
        required: false,
    },
    uploadedAt: {
        type: Date,
        default: Date.now,
    },
});

const Upload = mongoose.model('Upload', uploadSchema);

module.exports = Upload;
