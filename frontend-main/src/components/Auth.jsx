// components/Auth.jsx
import React, { useState } from 'react';
import { auth } from './firebase.config';
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';
import { toast, Toaster } from 'react-hot-toast';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

  const onCaptchVerify = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      size: 'invisible',
      callback: () => {},
      'expired-callback': () => {},
    }, auth);
  };

  const sendOTP = () => {
    setLoading(true);
    onCaptchVerify();
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phone, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success('OTP sent successfully!');
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        toast.error('Error sending OTP.');
      });
  };

  const verifyOTP = () => {
    setLoading(true);
    window.confirmationResult.confirm(otp)
      .then((result) => {
        setUser(result.user);
        setLoading(false);
        toast.success('Phone verified successfully!');
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        toast.error('Invalid OTP.');
      });
  };

  const registerUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        sendOTP(); // Trigger OTP sending after successful email registration
      })
      .catch((error) => {
        console.error(error);
        toast.error('Error registering user.');
      });
  };

  const loginUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        toast.success('Login successful!');
      })
      .catch((error) => {
        console.error(error);
        toast.error('Error logging in.');
      });
  };

  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success('Google login successful!');
      })
      .catch((error) => {
        console.error(error);
        toast.error('Error logging in with Google.');
      });
  };

  return (
    <div>
      <Toaster />
      <div id="recaptcha-container"></div>
      {user ? (
        <h2>Welcome, {user.email}</h2>
      ) : (
        <div>
          <h1>Login/Register</h1>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Email" 
          />
          <input 
            type="text" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            placeholder="Phone" 
          />
          {showOTP ? (
            <>
              <input 
                type="text" 
                value={otp} 
                onChange={(e) => setOtp(e.target.value)} 
                placeholder="Enter OTP" 
              />
              <button onClick={verifyOTP}>Verify OTP</button>
            </>
          ) : (
            <button onClick={sendOTP}>Send OTP</button>
          )}
          <button onClick={registerUser}>Register</button>
          <button onClick={loginUser}>Login</button>
          <button onClick={loginWithGoogle}>Login with Google</button>
        </div>
      )}
    </div>
  );
};

export default Auth;
