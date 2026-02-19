import "./Artist.css";
import React, { useContext } from "react";
import { assets, songsData } from "../../assets/assets";
import { PlayerContext } from "../../Context/PlayerContext";
import { useNavigate } from "react-router-dom";

const Artist = ({ image, name, id }) => {
  const navigate = useNavigate();
  const { playSongWithContext } = useContext(PlayerContext);

  const handlePlay = (e) => {
    e.stopPropagation();
    // Find songs for this artist
    const artistSongs = songsData.filter((song) => song.artists.includes(id));
    if (artistSongs.length > 0) {
      playSongWithContext(artistSongs[0], artistSongs);
    }
  };

  return (
    <div className="Art-class" onClick={() => navigate(`/artist/${id}`)}>
      <img className="Art-img" src={image} alt={name} />
      <h3>{name}</h3>
      <h5>Artist</h5>
      <button className="play-btn" onClick={handlePlay}>
        <img src={assets.play_icon} alt="Play" />
      </button>
    </div>
  );
};

export default Artist;
