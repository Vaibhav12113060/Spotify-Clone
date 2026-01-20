import "./ArtistDetails.css";
import React from "react";

import { songsData } from "../assets/assets";
import { Artist_data } from "../assets/assets";

import { assets } from "../assets/assets";

const ArtistDetails = ({ artist, songs, onBack }) => {
  if (!artist) return <p>Artist not found</p>;

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
        <img src={assets.play_icon} className="play" />
        <button className="Follow-button">Follow</button>
      </div>

      {/* Song List */}
      <div className="artist-song-list">
        {songs.map((song, index) => {
          const artistNames = song.artists
            .map((id) => Artist_data.find((a) => a.id === id)?.name)
            .join(", ");

          return (
            <div className="song-row" key={song.id}>
              <span>{index + 1}</span>

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
