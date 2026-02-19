import React, { useContext } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../src/components/navbar";
import Your_Lib from "../src/pages/Your_Lib";
import Player from "../src/pages/Templates Pages/Player";
import { AuthContext } from "../src/Context/AuthContext";

const MainLayout = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="app">
      <Navbar />

      <div className="body">
        <Your_Lib />

        <div className="main-content">
          <Outlet /> {/* Dynamic Page Content */}
        </div>
      </div>

      {currentUser && <Player />}
    </div>
  );
};

export default MainLayout;
