import React, { useContext, useState, useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import "./navbar.css";
import Your_Lib from "../pages/Your_Lib";
import Display_Cont from "../pages/Display_Cont";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser, logout } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleRestrictedClick = () => {
    if (!currentUser) {
      navigate("/login");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="Nav-class">
        {/* LEFT */}
        <div className="nav-left">
          <img
            onClick={() => navigate("/")}
            src={assets.spotify_logo}
            alt="Spotify Logo"
          />
        </div>

        {/* CENTER */}
        <div className="nav-center">
          <img
            onClick={() => navigate("/")}
            src={assets.home_icon}
            alt="Home"
          />

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
            <li onClick={handleRestrictedClick}>Premium</li>
            <li onClick={handleRestrictedClick}>Support</li>
            <li onClick={handleRestrictedClick}>Download</li>
          </ul>

          <div className="divider"></div>

          <div className="down-class" onClick={handleRestrictedClick}>
            <img src={assets.down_icon} alt="download" />
            <p>Install App</p>
          </div>

          {!currentUser ? (
            <>
              <Link to="/signup" className="signup">
                Sign up
              </Link>
              <Link to="/login" className="login-btn">
                Log in
              </Link>
            </>
          ) : (
            <div className="profile-container" ref={dropdownRef}>
              <div
                className="profile-circle"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                {currentUser.name ? currentUser.name[0].toUpperCase() : "U"}
              </div>
              {showDropdown && (
                <div className="profile-dropdown">
                  <p className="user-name">{currentUser.name}</p>
                  <p className="user-email">{currentUser.email}</p>
                  <hr />
                  <p
                    onClick={() => {
                      logout();
                      navigate("/");
                    }}
                  >
                    Sign out
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
