import "./ArtistDetails.css";
import React, { useContext, useState } from "react";
import { assets, songsData, Artist_data } from "../assets/assets";
import { PlayerContext } from "../Context/PlayerContext";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const ArtistDetails = ({ artist, songs, onBack }) => {
  if (!artist) return <p>Artist not found</p>;
  const { playSongWithContext } = useContext(PlayerContext);
  const { currentUser } = useContext(AuthContext);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const [act, setAct] = useState(false); // Logic for follow button logic
  const navigate = useNavigate();

  return (
    <div className="artist-details">
      {/* Header */}
      <div className="artist-header">
        <img src={artist.image} alt={artist.name} />
        <div className="artist-det">
          <p className="type">Artist</p>
          <h1>{artist.name}</h1>
          <p>{songs.length} songs</p>
          <button onClick={onBack}>← Back</button>
        </div>
      </div>

      {/* Controls */}
      <div className="artist-actions">
        <img
          src={assets.play_icon}
          className="play"
          onClick={() =>
            songs.length > 0 && playSongWithContext(songs[0], songs)
          }
        />
        <button
          onClick={() => {
            if (!currentUser) {
              navigate("/login");
              return;
            }
            setAct((prev) => !prev);
          }}
          className="Follow-button"
        >
          {act === true ? <p>Following</p> : <p>Follow</p>}
        </button>
      </div>

      {/* Song List */}
      <div className="artist-song-list">
        {songs.map((song, index) => {
          const artistNames = song.artists
            .map((id) => Artist_data.find((a) => a.id === id)?.name)
            .join(", ");

          return (
            <div
              className="song-row"
              key={song.id}
              onClick={() => navigate(`/song/${song.id}`)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ cursor: "pointer" }}
            >
              {hoveredIndex === index ? (
                <img
                  src={assets.play_icon}
                  style={{ width: "15px", marginRight: "10px" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    playSongWithContext(song, songs);
                  }}
                />
              ) : (
                <span>{index + 1}</span>
              )}

              <img src={song.image} className="song-img" />

              <div className="song-info">
                <p className="song-name">{song.name}</p>
                <p className="song-artists">{artistNames}</p>
              </div>

              <span className="duration">{song.duration}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArtistDetails;
