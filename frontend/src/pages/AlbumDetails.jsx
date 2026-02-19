import "./AlbumDetails.css";
import React, { useContext } from "react";
import { songsData, Artist_data } from "../assets/assets";
import { assets } from "../assets/assets";
import { PlayerContext } from "../Context/PlayerContext";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const AlbumDetails = ({ album, songs, onBack }) => {
  if (!album) return <p>Album not found</p>;
  const { playSongWithContext } = useContext(PlayerContext);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const safeSongs = songs || []; // fallback if songs undefined

  return (
    <div className="album-details">
      {/* Album Header */}
      <div className="album-header">
        <img className="img-head" src={album.image} alt={album.name} />
        <div className="album-info">
          <p className="type">Album</p>
          <h1 className="Name-class">{album.name}</h1>
          <p className="meta">
            {album.artist || "Unknown"} • {album.year || "Unknown"} •{" "}
            {safeSongs.length} songs
          </p>
          <button onClick={onBack}>← Back</button>
        </div>
      </div>

      {/* Album Play/Plus Buttons */}
      <div className="Mid-alb">
        <div className="Icons-Mid">
          <img
            className="play-Mid"
            src={assets.play_icon}
            alt="Play"
            onClick={() =>
              safeSongs.length > 0 &&
              playSongWithContext(safeSongs[0], safeSongs)
            }
          />
          <img
            className="plus-Mid"
            src={assets.plus_icon}
            alt="Add"
            onClick={() => !currentUser && navigate("/login")}
          />
        </div>
      </div>

      {/* Song List */}
      <div className="song-list">
        {safeSongs.length === 0 ? (
          <p>No songs in this album.</p>
        ) : (
          safeSongs.map((song, index) => (
            <div
              className="song-row"
              key={song.id}
              onClick={() => navigate(`/song/${song.id}`)}
              style={{ cursor: "pointer" }}
            >
              <span className="index">{index + 1}</span>

              <button
                className="play-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  playSongWithContext(song, safeSongs);
                }}
              >
                ▶
              </button>

              <div className="title">
                <span className="song-name">{song.name}</span>
                <span className="artist">
                  {song.artists.map((id, i) => {
                    const artistName =
                      Artist_data.find((a) => a.id === id)?.name || "Unknown";
                    return (
                      <React.Fragment key={id}>
                        <span className="artist-name">{artistName}</span>
                        {i < song.artists.length - 1 && (
                          <span className="comma">, </span>
                        )}
                      </React.Fragment>
                    );
                  })}
                </span>
              </div>

              <span className="duration">{song.duration}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AlbumDetails;
