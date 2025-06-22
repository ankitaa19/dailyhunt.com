import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const navigate = useNavigate();

  const sendOtp = async () => {
    if (!email) {
      alert("Please enter your email first.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5005/api/otp/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("OTP sent to your email!");
        setIsOtpSent(true);
      } else {
        alert(data.message || "Failed to send OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!otp || !email) {
      alert("Please fill all the fields and enter the OTP.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5005/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Login successful! Redirecting to your profile...");
        navigate("/profile"); // Redirect to the profile page
      } else {
        alert(data.message || "Failed to login. Please try again.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: "15px" }}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "10px", marginBottom: "10px", fontSize: "16px" }}
          />
          {isOtpSent && (
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              style={{ width: "100%", padding: "10px", marginBottom: "10px", fontSize: "16px" }}
            />
          )}
          {!isOtpSent && (
            <button
              type="button"
              onClick={sendOtp}
              style={{ width: "100%", padding: "10px", backgroundColor: "orange", color: "white", fontSize: "16px", cursor: "pointer", border: "none", borderRadius: "5px" }}
            >
              Send OTP
            </button>
          )}
        </div>
        {isOtpSent && (
          <button
            type="submit"
            style={{ width: "100%", padding: "10px", backgroundColor: "green", color: "white", fontSize: "16px", cursor: "pointer", border: "none", borderRadius: "5px" }}
          >
            Login
          </button>
        )}
      </form>
    </div>
  );
};

export default Login;
