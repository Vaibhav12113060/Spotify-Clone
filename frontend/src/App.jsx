import React from "react";
import Navbar from "./components/navbar";
import Your_Lib from "./pages/Your_Lib";
import Display_Cont from "./pages/Display_Cont";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      {/* Top Navbar */}
      <Navbar />

      {/* Main body */}
      <div className="body">
        {/* Left Sidebar */}
        <Your_Lib />

        {/* Right Content Area */}
        <div className="main-content">
          <Display_Cont />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
