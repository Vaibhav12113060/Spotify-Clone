import React from "react";
import Artist from "../Templates Pages/Artist";
import { Artist_data } from "../../assets/assets";
import "./Artist_List_Temp.css";

const Artist_List_Temp = () => {
  return (
    <div className="Art-data">
      {Artist_data.map((item, index) => (
        <Artist key={index} image={item.image} name={item.name} id={item.id} />
      ))}
    </div>
  );
};

export default Artist_List_Temp;
