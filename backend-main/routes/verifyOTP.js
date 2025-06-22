// routes/verifyOTP.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// POST verify OTP
router.post('/', async (req, res) => {
    const { email, otp } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (user.otp === otp) {
            user.isVerified = true; // Mark user as verified
            user.otp = null; // Clear OTP
            await user.save(); // Save user

            return res.status(200).json({ message: 'OTP verified, user profile created' });
        } else {
            return res.status(400).json({ message: 'Invalid OTP' });
        }
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});

module.exports = router;
