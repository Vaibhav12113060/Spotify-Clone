import React from "react";
import Music from "../Templates Pages/Music";
import { songsData, Artist_data } from "../../assets/assets";
import "./Music_List_Temp.css";

const Music_List_Temp = () => {
  // Get first song of each album
  const trendingSongs = songsData.filter(
    (song, index, self) =>
      index === self.findIndex((s) => s.albumId === song.albumId),
  );

  // Map artist IDs to their names
  const getArtistNames = (artistIds) =>
    artistIds.map((id) => {
      const artist = Artist_data.find((a) => a.id === id);
      return artist ? artist.name : "Unknown Artist";
    });

  return (
    <div className="music-row">
      {trendingSongs.map((data) => (
        <Music
          key={data.id}
          img={data.image}
          song_name={data.name}
          artist_name={getArtistNames(data.artists)}
        />
      ))}
    </div>
  );
};

export default Music_List_Temp;
