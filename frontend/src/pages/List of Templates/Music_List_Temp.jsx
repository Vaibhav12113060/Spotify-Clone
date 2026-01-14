import React from "react";
import Music from "../Templates Pages/Music";
import { songsData } from "../../assets/assets";

import "./Music_List_Temp.css";
const Music_List_Temp = () => {
  return (
    <div className="music-row">
      {songsData.map((data) => (
        <Music
          key={data.id}
          img={data.image}
          song_name={data.name}
          artist_name={data.desc}
        />
      ))}
    </div>
  );
};

export default Music_List_Temp;
