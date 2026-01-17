import "./Artist.css";
import React from "react";
import { assets } from "../../assets/assets";

const Artist = (props) => {
  return (
    <div className="Art-class">
      {/* Artist Image */}
      <img className="Art-img" src={props.img} alt={props.artist_name} />

      <h3>{props.artist_name}</h3>
      <h5>Artist</h5>

      {/* Play Button */}
      <button className="play-btn">
        <img src={assets.play_icon} alt="Play" />
      </button>
    </div>
  );
};

export default Artist;
