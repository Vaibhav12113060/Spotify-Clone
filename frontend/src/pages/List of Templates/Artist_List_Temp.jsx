import "./Artist_List_Temp.css";
import Artist from "../Templates Pages/Artist";
import { Artist_data } from "../../assets/assets";

import React from "react";

const Artist_List_Temp = () => {
  return (
    <div className="Art-data">
      {Artist_data.map((data) => (
        <Artist key={data.id} img={data.image} artist_name={data.name} />
      ))}
    </div>
  );
};

export default Artist_List_Temp;
