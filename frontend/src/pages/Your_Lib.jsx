import "./Your_Lib.css";
import React from "react";
import { assets } from "../assets/assets";
import "./Your_Lib.css";

export default function Your_Lib() {
  return (
    <div className="Lib-class">
      <div className="Your-Lib-class">
        <h2>Your Library</h2>
        <img src={assets.plus_icon} alt="Plus icon"></img>
      </div>

      <div className="Create-Play-class">
        <h4>Create your first playlist</h4>

        <p>It's easy, we'll help you</p>

        <button>Create playlist</button>
      </div>

      <div className="brow-pod-class">
        <h3>Let's find some podcasts to follow</h3>
        <p>We'll keep you updated on new episodes</p>

        <button>Browse Podcasts</button>
      </div>

      <div className="Terms-class">
        <ul className="Term1" style={{ display: "flex" }}>
          <li>Legal</li>
          <li>Safety & Privacy</li>
          <li>Privacy Policy</li>
          <li>Cookies</li>
        </ul>

        <ul className="Term2" style={{ display: "flex" }}>
          <li>About Ads</li>
          <li>Accessibility</li>
        </ul>
      </div>

      <div className="Lang-class">
        <img src={assets.globe_icon} alt="globe icon"></img>
        <p>English</p>
      </div>
      <br />
      <br />
    </div>
  );
}
