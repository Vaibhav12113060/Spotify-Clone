import "./Artist.css";
import React from "react";
import { assets } from "../../assets/assets";

const Artist = ({ img, artist_name, onClick }) => {
  return (
    <div className="Art-class" onClick={onClick}>
      <img className="Art-img" src={img} alt={artist_name} />

      <h3>{artist_name}</h3>
      <h5>Artist</h5>

      <button className="play-btn">
        <img src={assets.play_icon} alt="Play" />
      </button>
    </div>
  );
};

export default Artist;
