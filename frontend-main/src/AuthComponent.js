import React, { useState } from 'react';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

const AuthComponent = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [error, setError] = useState(null);

  const setupRecaptcha = () => {
    const auth = getAuth();
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      size: 'invisible',
      callback: () => {
        // reCAPTCHA solved - will proceed with submit function
        console.log('Recaptcha solved');
      },
      defaultCountry: 'IN', // Change to your default country code
    }, auth);
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setupRecaptcha();

    const auth = getAuth();
    const appVerifier = window.recaptchaVerifier;

    try {
      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      setConfirmationResult(confirmationResult);
      alert('OTP sent to your phone number');
    } catch (error) {
      setError(error.message);
      console.error('Error during signInWithPhoneNumber', error);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (confirmationResult) {
      try {
        await confirmationResult.confirm(otp);
        alert('OTP verified successfully!');
      } catch (error) {
        setError('Invalid OTP');
        console.error('Error while verifying OTP', error);
      }
    }
  };

  return (
    <div>
      <h2>Phone Authentication</h2>
      <form onSubmit={handleSendOtp}>
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button type="submit">Send OTP</button>
      </form>
      <div id="recaptcha-container"></div>
      {confirmationResult && (
        <form onSubmit={handleVerifyOtp}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button type="submit">Verify OTP</button>
        </form>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default AuthComponent;
