import "./Footer.css";

import React from "react";

const Footer = () => {
  return (
    <div className="Foot-class">
      <div className="Company">
        <h3>Company</h3>
        <ul>
          <li>About</li>
          <li>Jobs</li>
          <li>For the Record</li>
        </ul>
      </div>
      <div className="Communities">
        <h3>Communities</h3>
        <ul>
          <li>For Artists</li>
          <li>Developers</li>
          <li>Advertising</li>
          <li>Investors</li>
          <li>Vendors</li>
        </ul>
      </div>
      <div className="Useful">
        <h3>Useful links</h3>
        <ul>
          <li>Support</li>
          <li>Free Mobile App</li>
          <li>Popular by Country</li>
          <li>Import your music</li>
        </ul>
      </div>
      <div className="Spot-Plan">
        <h3>Spotify Plans</h3>
        <ul>
          <li>Premium Lite</li>
          <li>Premium Standard</li>
          <li>Premium Platinum</li>
          <li>Premium Silver</li>
          <li>Stotify Free</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
