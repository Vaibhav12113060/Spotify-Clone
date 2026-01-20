import "./Artist_List_Temp.css";
import Artist from "../Templates Pages/Artist";
import { Artist_data, songsData } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import React from "react";

const Artist_List_Temp = () => {
  const navigate = useNavigate();

  return (
    <div className="Art-data">
      {Artist_data.map((data) => (
        <Artist
          key={data.id}
          img={data.image}
          artist_name={data.name}
          onClick={() => navigate(`/artist/${data.id}`)}
        />
      ))}
    </div>
  );
};

export default Artist_List_Temp;
