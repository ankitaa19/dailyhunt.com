// routes/login.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const sendOTP = require('../utils/sendOTP'); // Utility to send OTP

// POST login
router.post('/', async (req, res) => {
    const { email } = req.body; // Assuming only email for sending OTP
    const otp = Math.floor(1000 + Math.random() * 9000).toString(); // Generate 4-digit OTP

    try {
        const user = await User.findOne({ email });

        if (user) {
            // User found, send OTP
            user.otp = otp; // Set OTP
            await user.save(); // Save user with OTP

            await sendOTP(email, otp); // Call function to send OTP
            return res.status(200).json({ message: 'OTP sent to email' });
        } else {
            return res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});

module.exports = router;
