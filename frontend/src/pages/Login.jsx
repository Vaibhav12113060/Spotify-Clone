import "./Login.css";
import { assets } from "../assets/assets";
import React from "react";

const Login = () => {
  return (
    <div className="login-container">
      <img className="logo" src={assets.spotify_logo} alt="Spotify Logo" />

      <h1>Welcome back</h1>

      <div className="form-box">
        <label>Email or username</label>
        <input type="text" />
        <button className="continue-btn">Continue</button>
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
        Don’t have an account? <span>Sign up</span>
      </p>

      <p className="captcha-text">
        This site is protected by reCAPTCHA and the Google{" "}
        <span>Privacy Policy</span> and <span>Terms of Service</span> apply.
      </p>
    </div>
  );
};

export default Login;
