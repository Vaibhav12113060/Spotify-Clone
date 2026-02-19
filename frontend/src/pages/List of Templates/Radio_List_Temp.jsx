import React from "react";
import Albums from "../Templates Pages/Albums";
import { Album_data } from "../../assets/assets";
import "./Radio_List_Temp.css";

const Radio_List_Temp = () => {
  return (
    <div className="Radio-data">
      {Album_data.map((item, index) => (
        <Albums
          key={index}
          image={item.image}
          name={item.name}
          desc="Radio Station"
          id={item.id}
        />
      ))}
    </div>
  );
};

export default Radio_List_Temp;
