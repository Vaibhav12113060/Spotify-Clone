import React, { useContext } from "react";
import { assets, Artist_data } from "../assets/assets";
import { PlayerContext } from "../Context/PlayerContext";
import "./AlbumDetails.css"; // Reusing AlbumDetails CSS for consistency

const SongDetails = ({ song, onBack }) => {
  const { playSongWithContext } = useContext(PlayerContext);

  if (!song) return <p>Song not found</p>;

  const artistNames = song.artists
    .map((id) => Artist_data.find((a) => a.id === id)?.name)
    .join(", ");

  return (
    <div className="album-details">
      {/* Header */}
      <div className="album-header">
        <img className="img-head" src={song.image} alt={song.name} />
        <div className="album-info">
          <p className="type">Song</p>
          <h1 className="Name-class">{song.name}</h1>
          <p className="meta">
            {artistNames} • {song.duration}
          </p>
          <button onClick={onBack}>← Back</button>
        </div>
      </div>

      {/* Play Button */}
      <div className="Mid-alb">
        <div
          className="Icons-Mid"
          onClick={() => playSongWithContext(song, [song])}
        >
          <img className="play-Mid" src={assets.play_icon} alt="Play" />
          <img className="plus-Mid" src={assets.plus_icon} alt="Add" />
        </div>
      </div>

      {/* Details */}
      <div className="song-list" style={{ padding: "20px" }}>
        <h3>Description</h3>
        <p style={{ color: "#b3b3b3" }}>{song.desc}</p>
        <br />
        <p style={{ color: "#b3b3b3" }}>Album ID: {song.albumId}</p>
      </div>
    </div>
  );
};

export default SongDetails;
