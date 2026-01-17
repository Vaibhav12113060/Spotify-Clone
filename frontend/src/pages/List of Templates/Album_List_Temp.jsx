import "./Album_List_Temp.css";
import { Album_data } from "../../assets/assets";

import React from "react";
import Albums from "../Templates Pages/Albums";

const Album_List_Temp = () => {
  return (
    <div className="Album-data">
      {Album_data.map((data) => (
        <Albums img={data.image} name={data.name} singers={data.singers} />
      ))}
    </div>
  );
};

export default Album_List_Temp;
