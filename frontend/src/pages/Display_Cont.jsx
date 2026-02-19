import "./Display_Cont.css";
import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

import Music_List_Temp from "./List of Templates/Music_List_Temp";
import Artist_List_Temp from "./List of Templates/Artist_List_Temp";
import Album_List_Temp from "./List of Templates/Album_List_Temp";
import Radio_List_Temp from "./List of Templates/Radio_List_Temp";
import Featured_List_Temp from "./List of Templates/Featured_List_Temp";
import AlbumDetails from "./AlbumDetails";
import { songsData, Album_data, Artist_data } from "../assets/assets";
import ArtistDetails from "./ArtistDetails";
import SongDetails from "./SongDetails";
import Footer from "../components/Footer";

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
      <div>
        <AlbumDetails
          album={album}
          songs={albumSongs}
          onBack={() => navigate("/")}
        />
        <div class="line"></div>
        <Footer />
        <div class="line"></div>
        <div style={{ height: "80px" }}></div>
      </div>
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
      <div>
        <ArtistDetails
          artist={artist}
          songs={artistSongs}
          onBack={() => navigate("/")}
        />
        <Footer />
        <div style={{ height: "80px" }}></div>
      </div>
    );
  }

  /* SONG PAGE */
  if (location.pathname.startsWith("/song")) {
    const songId = Number(id);
    const song = songsData.find((s) => s.id === songId);

    return (
      <div>
        <SongDetails song={song} onBack={() => navigate(-1)} />
        <Footer />
        <div style={{ height: "80px" }}></div>
      </div>
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
          <div className="rad-content">
            <Radio_List_Temp />
          </div>
        </div>

        {/* Featured Charts */}
        <div className="Feat-chart">
          <div className="Feat-head">
            <h2>Featured Charts</h2>
            <p>Show all</p>
          </div>
          <div className="Feat-content">
            <Featured_List_Temp />
          </div>
        </div>

        <div class="line"></div>
        <Footer />
        <div class="line"></div>
        <div style={{ height: "80px" }}></div>
      </div>
    </div>
  );
};

export default Display_Cont;
