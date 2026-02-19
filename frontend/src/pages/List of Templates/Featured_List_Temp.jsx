import React from "react";
import Albums from "../Templates Pages/Albums";
import { Album_data } from "../../assets/assets";
import "./Featured_List_Temp.css";

const Featured_List_Temp = () => {
  // Reverse the data to show a different order for charts
  const featuredData = [...Album_data].reverse();

  return (
    <div className="Featured-data">
      {featuredData.map((item, index) => (
        <Albums
          key={index}
          image={item.image}
          name={item.name}
          desc="Global Top 50"
          id={item.id}
        />
      ))}
    </div>
  );
};

export default Featured_List_Temp;
