import "./Albums.css";
import React, { useContext } from "react";
import { assets, songsData } from "../../assets/assets";
import { PlayerContext } from "../../Context/PlayerContext";
import { useNavigate } from "react-router-dom";

const Albums = ({ image, name, desc, id }) => {
  const navigate = useNavigate();
  const { playSongWithContext } = useContext(PlayerContext);

  const handlePlay = (e) => {
    e.stopPropagation();
    // Find songs for this album
    const albumSongs = songsData.filter((song) => song.albumId === id);
    if (albumSongs.length > 0) {
      playSongWithContext(albumSongs[0], albumSongs);
    }
  };

  return (
    <div className="Album-card" onClick={() => navigate(`/album/${id}`)}>
      <img className="Album-img" src={image} alt={name} />
      <h3>{name}</h3>
      <p>{desc}</p>
      <button className="play-btn" onClick={handlePlay}>
        <img src={assets.play_icon} alt="Play" />
      </button>
    </div>
  );
};

export default Albums;
