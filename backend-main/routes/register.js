// routes/register.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const sendOTP = require('../utils/sendOTP'); // Assuming this utility function exists

// POST register
router.post('/', async (req, res) => {
    const { email, password } = req.body;
    const otp = Math.floor(1000 + Math.random() * 9000).toString();

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }

        const newUser = new User({ email, password, otp });
        await newUser.save();

        await sendOTP(email, otp);
        return res.status(201).json({ message: 'User registered, OTP sent to email' });
    } catch (err) {
        console.error('Error:', err.message);
        return res.status(500).json({ error: err.message });
    }
});

module.exports = router;
