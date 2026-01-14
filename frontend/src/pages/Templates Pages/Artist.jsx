import "./Artist.css";
import React from "react";

const Artist = (props) => {
  return (
    <div className="Art-class">
      <img src={props.img} alt="Music Image 1"></img>

      <h3>{props.artist_name}</h3>
      <h5>Artist</h5>
    </div>
  );
};

export default Artist;
