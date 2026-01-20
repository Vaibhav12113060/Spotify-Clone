import "./Display_Cont.css";
import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

import Music_List_Temp from "./List of Templates/Music_List_Temp";
import Artist_List_Temp from "./List of Templates/Artist_List_Temp";
import Album_List_Temp from "./List of Templates/Album_List_Temp";
import AlbumDetails from "./AlbumDetails";
import { songsData } from "../assets/assets";

import { Album_data } from "../assets/assets";
import { Artist_data } from "../assets/assets";
import ArtistDetails from "./ArtistDetails";

const Display_Cont = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  /* ALBUM PAGE */
  if (location.pathname.startsWith("/album")) {
    const albumId = Number(id);
    const album = Album_data.find((a) => a.id === albumId);
    const albumSongs = songsData.filter((song) => song.albumId === albumId);

    return (
      <AlbumDetails
        album={album}
        songs={albumSongs}
        onBack={() => navigate("/")}
      />
    );
  }

  /* ARTIST PAGE */
  if (location.pathname.startsWith("/artist")) {
    const artistId = Number(id);
    const artist = Artist_data.find((a) => a.id === artistId);

    const artistSongs = songsData.filter((song) =>
      song.artists.includes(artistId),
    );

    return (
      <ArtistDetails
        artist={artist}
        songs={artistSongs}
        onBack={() => navigate("/")}
      />
    );
  }

  /* HOME PAGE */
  return (
    <div className="Cont-class">
      <div className="scroll-wrapper">
        {/* Trending Songs */}
        <div className="Trend-class">
          <div className="Trend-head">
            <h2>Trending Songs</h2>
            <p>Show all</p>
          </div>
          <div className="Trend-content">
            <Music_List_Temp />
          </div>
        </div>

        {/* Popular Artists */}
        <div className="Popular-class">
          <div className="Popular-head">
            <h2>Popular artists</h2>
            <p>Show all</p>
          </div>
          <div className="Popular-content">
            <Artist_List_Temp />
          </div>
        </div>

        {/* Popular Albums */}
        <div className="Popular-alb">
          <div className="alb-head">
            <h2>Popular albums</h2>
            <p>Show all</p>
          </div>
          <div className="alb-content">
            <Album_List_Temp />
          </div>
        </div>

        {/* Popular Radio */}
        <div className="Popular-rad">
          <div className="rad-head">
            <h2>Popular radio</h2>
            <p>Show all</p>
          </div>
          <div className="rad-content">Content Display</div>
        </div>

        {/* Featured Charts */}
        <div className="Feat-chart">
          <div className="Feat-head">
            <h2>Featured Charts</h2>
            <p>Show all</p>
          </div>
          <div className="Feat-content">Content Display</div>
        </div>
      </div>
    </div>
  );
};

export default Display_Cont;
