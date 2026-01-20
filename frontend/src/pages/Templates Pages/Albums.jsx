import "./Albums.css";
import React from "react";
import { assets } from "../../assets/assets";

const Albums = ({ img, name, singers, onClick }) => {
  return (
    <div className="Album-card" onClick={onClick}>
      <img className="Album-img" src={img} alt={name} />

      <h3>{name}</h3>
      <p>{singers?.join(", ") || "Unknown Artist"}</p>

      <button className="play-btn" onClick={(e) => e.stopPropagation()}>
        <img src={assets.play_icon} alt="Play" />
      </button>
    </div>
  );
};

export default Albums;
