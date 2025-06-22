// components/Signup.jsx
import React, { useState } from "react";
import { auth } from './firebase.config'; // Adjusting to point to the correct location
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast } from "react-hot-toast";
import OtpInput from "otp-input-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);

  const handleSignup = async () => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Account created successfully!");
    } catch (error) {
      toast.error("Error creating account: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePhoneSignup = () => {
    const appVerifier = new RecaptchaVerifier("recaptcha-container", {
      size: "invisible",
    }, auth);
    
    signInWithPhoneNumber(auth, phone, appVerifier)
      .then((result) => {
        setConfirmationResult(result);
        setShowOTP(true);
        toast.success("OTP sent!");
      })
      .catch((error) => {
        toast.error("Error sending OTP: " + error.message);
      });
  };

  const handleOTPVerify = () => {
    confirmationResult.confirm(otp)
      .then((result) => {
        toast.success("Phone number verified!");
      })
      .catch((error) => {
        toast.error("Error verifying OTP: " + error.message);
      });
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.success("Google Sign-In successful!");
    } catch (error) {
      toast.error("Google Sign-In failed: " + error.message);
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup / Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup} disabled={loading}>
        {loading ? "Loading..." : "Sign Up"}
      </button>
      <div id="recaptcha-container"></div>
      <PhoneInput country={"in"} value={phone} onChange={setPhone} />
      <button onClick={handlePhoneSignup} disabled={loading}>
        {loading ? "Sending..." : "Send OTP"}
      </button>
      {showOTP && (
        <>
          <OtpInput value={otp} onChange={setOtp} OTPLength={6} otpType="number" />
          <button onClick={handleOTPVerify}>
            Verify OTP
          </button>
        </>
      )}
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
    </div>
  );
};

export default Signup;
