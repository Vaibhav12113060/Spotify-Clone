import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Your_Lib from "./pages/Your_Lib";
import Display_Cont from "./pages/Display_Cont";
import Footer from "./components/Footer";
import Player from "./pages/Templates Pages/Player";

import Sign_Up from "./pages/Sign_Up";
import Login from "./pages/Login";

const App = () => {
  return (
    <Routes>
      {/* HOME PAGE */}
      <Route
        path="/"
        element={
          <div className="app">
            <Navbar />

            <div className="body">
              <Your_Lib />

              <div className="main-content">
                <Display_Cont />
                <Footer />
              </div>
            </div>

            <Player />
          </div>
        }
      />

      {/* ARTIST PAGE */}

      <Route
        path="/artist/:id"
        element={
          <div className="app">
            <Navbar />

            <div className="body">
              <Your_Lib />

              <div className="main-content">
                <Display_Cont />
                <Footer />
              </div>
            </div>

            <Player />
          </div>
        }
      />

      {/* ALBUM DETAILS PAGE */}
      <Route
        path="/album/:id"
        element={
          <div className="app">
            <Navbar />

            <div className="body">
              <Your_Lib />

              <div className="main-content">
                <Display_Cont />
                <Footer />
              </div>
            </div>

            <Player />
          </div>
        }
      />

      {/* AUTH PAGES */}
      <Route path="/signup" element={<Sign_Up />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
