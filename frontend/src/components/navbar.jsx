import React from "react";
import { assets } from "../assets/assets";
import "./navbar.css";
import Your_Lib from "../pages/Your_Lib";
import Display_Cont from "../pages/Display_Cont";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="Nav-class">
        {/* LEFT */}
        <div className="nav-left">
          <img src={assets.spotify_logo} alt="Spotify Logo" />
        </div>

        {/* CENTER */}
        <div className="nav-center">
          <img src={assets.home_icon} alt="Home" />

          <div className="sear-class">
            <img src={assets.search_icon} alt="search" />
            <input type="text" placeholder="What do you want to play?" />
            <div className="divider"></div>
            <img src={assets.browse_icon} alt="browse" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="nav-right">
          <ul className="nav-page-class">
            <li>Premium</li>
            <li>Support</li>
            <li>Download</li>
          </ul>

          <div className="divider"></div>

          <div className="down-class">
            <img src={assets.down_icon} alt="download" />
            <p>Install App</p>
          </div>

          <Link to="/signup" className="signup">
            Sign up
          </Link>

          <Link to="/login" className="login-btn">
            Log in
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
