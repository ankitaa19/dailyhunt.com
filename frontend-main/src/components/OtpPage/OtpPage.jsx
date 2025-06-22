import React, { useState } from "react";
import axios from "axios";
import "./OtpPage.css"; // Import a CSS file for styling

const OtpPage = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success" or "error"
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleSendOtp = async () => {
    if (!email) {
      setMessage("Please enter a valid email address.");
      setMessageType("error");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5005/api/send-otp", {
        email,
      });
      setMessage("OTP sent successfully!");
      setMessageType("success");
      setIsOtpSent(true);
    } catch (error) {
      setMessage("OTP declined. Please try again.");
      setMessageType("error");
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp) {
      setMessage("Please enter the OTP.");
      setMessageType("error");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5005/api/verify-otp", {
        email,
        otp,
      });
      setMessage("OTP verified! Profile created successfully.");
      setMessageType("success");
    } catch (error) {
      setMessage("Invalid OTP. Please try again.");
      setMessageType("error");
    }
  };

  return (
    <div className="otp-container">
      <h2 className="title">Login / Register</h2>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <button className="btn send-otp" onClick={handleSendOtp}>
        Send OTP
      </button>
      {message && (
        <p className={`message ${messageType === "success" ? "success" : "error"}`}>
          {message}
        </p>
      )}
      {isOtpSent && (
        <div className="form-group otp-group">
          <label htmlFor="otp">Enter OTP:</label>
          <input
            type="text"
            id="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter 4-digit OTP"
          />
          <button className="btn verify-otp" onClick={handleVerifyOtp}>
            Verify OTP
          </button>
        </div>
      )}
    </div>
  );
};

export default OtpPage;
