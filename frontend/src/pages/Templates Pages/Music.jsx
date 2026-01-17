import "./Music.css";
import React from "react";
import { assets } from "../../assets/assets";

const Music = ({ img, song_name, artist_name }) => {
  return (
    <div className="music-bar">
      {/* Album Image */}
      <img className="album-img" src={img} alt={song_name} />

      {/* Song Info */}
      <div className="music-info">
        <h3 title={song_name}>{song_name}</h3>

        {/* Join artists array safely */}
        <h5 title={artist_name.join(", ")}>{artist_name.join(", ")}</h5>
      </div>

      {/* Play Button */}
      <button className="play-btn">
        <img src={assets.play_icon} alt="Play" />
      </button>
    </div>
  );
};

export default Music;
