import "./Music.css";
import React from "react";
import { assets } from "../../assets/assets";

const Music = (props) => {
  return (
    <div className="Music-class">
      <img src={props.img} alt="Music Image 1"></img>

      <h3>{props.song_name}</h3>
      <h5>{props.artist_name}</h5>
    </div>
  );
};

export default Music;
