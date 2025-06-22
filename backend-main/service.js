// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config(); // Load environment variables from .env file

// Import routes
const uploadRouter = require('./routes/upload');
const businessRouter = require('./routes/business');
const sportsRouter = require('./routes/sports');
const technologyRouter = require('./routes/technology');
const entertainmentRouter = require('./routes/entertainment');
const educationRouter = require('./routes/education');
const crimesRouter = require('./routes/crime'); // Ensure this is correct
const loginRouter = require('./routes/login'); // Include your login route

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// API Routes
app.use('/api/upload', uploadRouter);
app.use('/api/business', businessRouter);
app.use('/api/sports', sportsRouter);
app.use('/api/technology', technologyRouter);
app.use('/api/entertainment', entertainmentRouter);
app.use('/api/education', educationRouter);
app.use('/api/crimes', crimesRouter);
app.use('/api/login', loginRouter); // Add the login route

// 404 Error Handling
app.use((req, res, next) => {
    res.status(404).json({ error: 'Endpoint not found' });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something broke!' });
});

// Start Server
const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
