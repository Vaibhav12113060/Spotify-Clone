import "./Login.css";
import { assets } from "../assets/assets";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const result = login(email, password);
    if (result.success) {
      navigate("/");
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="login-container">
      <img className="logo" src={assets.spotify_logo} alt="Spotify Logo" />

      <h1>Welcome back</h1>

      <div className="form-box">
        <form onSubmit={handleLogin}>
          <label>Email or username</label>
          <input
            type="text"
            placeholder="Email or username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label style={{ display: "block", marginTop: "15px" }}>
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="continue-btn">
            Log In
          </button>
        </form>
      </div>

      <p className="or-text">or</p>

      <div className="social-btn">
        📱 <span>Continue with phone number</span>
      </div>

      <div className="social-btn">
        <img src={assets.google} alt="google" />
        <span>Continue with Google</span>
      </div>

      <div className="social-btn">
        <img src={assets.facebook} alt="facebook" />
        <span>Continue with Facebook</span>
      </div>

      <div className="social-btn">
        <img src={assets.apple} alt="apple" />
        <span>Continue with Apple</span>
      </div>

      <p className="footer-text">
        Don’t have an account?{" "}
        <span onClick={() => navigate("/signup")}>Sign up</span>
      </p>

      <p className="captcha-text">
        This site is protected by reCAPTCHA and the Google{" "}
        <span>Privacy Policy</span> and <span>Terms of Service</span> apply.
      </p>
    </div>
  );
};

export default Login;
