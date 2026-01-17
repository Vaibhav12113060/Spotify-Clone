import "./Albums.css";
import React from "react";
import { assets } from "../../assets/assets";

const Albums = (props) => {
  return (
    <div className="Album-card">
      {/* Album Image */}
      <img className="Album-img" src={props.img} alt={props.name} />

      {/* Album Info */}
      <h3>{props.name}</h3>
      <p>{props.singers.join(", ")}</p>

      {/* Play Button */}
      <button className="play-btn">
        <img src={assets.play_icon} alt="Play" />
      </button>
    </div>
  );
};

export default Albums;
