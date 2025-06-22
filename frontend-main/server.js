// src/services/api_service.js
import axios from 'axios';

const apiUrl = ''; // Replace with your actual API URL

export const sendOtp = async (email) => {
  try {
    const response = await axios.post(`${apiUrl}/send-otp`, { email });
    return response.data;
  } catch (error) {
    throw new Error('Failed to send OTP: ' + error.message);
  }
};

export const verifyOtp = async (email, otp) => {
  try {
    const response = await axios.post(`${apiUrl}/verify-otp`, { email, otp });
    return response.data;
  } catch (error) {
    throw new Error('Failed to verify OTP: ' + error.message);
  }
};
