import "./Sign_Up.css";
import { assets } from "../assets/assets";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Sign_Up = () => {
  const navigate = useNavigate();
  const { signup } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const result = signup(email, password, name);
    if (result.success) {
      navigate("/");
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="signup-container">
      <img className="logo" src={assets.spotify_logo} alt="Spotify Logo" />

      <h1>Sign up to start listening</h1>

      <div className="form-box">
        <form onSubmit={handleSignup}>
          <label>Email address</label>
          <input
            type="email"
            placeholder="name@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label style={{ display: "block", marginTop: "15px" }}>
            Password
          </label>
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label style={{ display: "block", marginTop: "15px" }}>
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <label style={{ display: "block", marginTop: "15px" }}>Name</label>
          <input
            type="text"
            placeholder="What should we call you?"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <button type="submit" className="next-btn">
            Sign Up
          </button>
        </form>
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
        Already have an account?{" "}
        <span onClick={() => navigate("/login")}>Log in</span>
      </p>
    </div>
  );
};

export default Sign_Up;
