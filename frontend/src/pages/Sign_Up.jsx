import "./Sign_Up.css";
import { assets } from "../assets/assets";
import React from "react";

const Sign_Up = () => {
  return (
    <div className="signup-container">
      <img className="logo" src={assets.spotify_logo} alt="Spotify Logo" />

      <h1>Sign up to</h1>
      <h1>start listening</h1>

      <div className="form-box">
        <label>Email address</label>
        <input type="text" placeholder="name@domain.com" />

        <p className="link-text">Use phone number instead</p>

        <button className="next-btn">Next</button>
      </div>

      <p className="or-text">or</p>

      <div className="social-btn">
        <img src={assets.google} alt="google" />
        <span>Sign up with Google</span>
      </div>

      <div className="social-btn">
        <img src={assets.apple} alt="apple" />
        <span>Sign up with Apple</span>
      </div>

      <p className="footer-text">
        Already have an account? <span>Log in</span>
      </p>
    </div>
  );
};

export default Sign_Up;
