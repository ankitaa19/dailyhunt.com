import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginRegisterForm = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false); // Track if the user is registering or logging in

  const handleSendOtp = async () => {
    try {
      const endpoint = isRegistered
        ? 'http://localhost:5005/api/register'
        : 'http://localhost:5005/api/login';
      const response = await axios.post(endpoint, { email });
      toast.success(response.data.message);
      setShowOtpInput(true);
    } catch (error) {
      toast.error(error.response.data.error || 'Something went wrong');
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await axios.post('http://localhost:5005/api/verify-otp', { email, otp });
      toast.success(response.data.message);
      // User profile creation successful; proceed to next steps in your app
    } catch (error) {
      toast.error(error.response.data.error || 'Invalid OTP');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>{isRegistered ? 'Register' : 'Login'}</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '10px' }}
      />
      {showOtpInput && (
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '10px' }}
        />
      )}
      {!showOtpInput ? (
        <button
          onClick={handleSendOtp}
          style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none' }}
        >
          {isRegistered ? 'Register' : 'Login'}
        </button>
      ) : (
        <button
          onClick={handleVerifyOtp}
          style={{ padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', border: 'none' }}
        >
          Verify OTP
        </button>
      )}
      <p
        style={{ marginTop: '10px', cursor: 'pointer', color: '#007bff' }}
        onClick={() => {
          setIsRegistered(!isRegistered);
          setShowOtpInput(false);
        }}
      >
        {isRegistered ? 'Already have an account? Login' : "Don't have an account? Register"}
      </p>
      <ToastContainer />
    </div>
  );
};

export default LoginRegisterForm;
