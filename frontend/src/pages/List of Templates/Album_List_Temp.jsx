import "./Album_List_Temp.css";
import React, { useState } from "react";
import Albums from "../Templates Pages/Albums";
import { Album_data, songsData, Artist_data } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Album_List_Temp = () => {
  const navigate = useNavigate();

  const getAlbumArtists = (albumId) => {
    const song = songsData.find((s) => s.albumId === albumId);
    if (!song) return ["Unknown Artist"];

    return song.artists.map((id) => {
      const artist = Artist_data.find((a) => a.id === id);
      return artist ? artist.name : "Unknown Artist";
    });
  };

  return (
    <div className="Album-data">
      {Album_data.map((data) => (
        <Albums
          key={data.id}
          img={data.image}
          name={data.name}
          singers={getAlbumArtists(data.id)}
          onClick={() => navigate(`/album/${data.id}`)}
        />
      ))}
    </div>
  );
};

export default Album_List_Temp;
