// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Your_Lib from "./pages/Your_Lib";
// import Display_Cont from "./pages/Display_Cont";
// import Footer from "./components/Footer";
// import Sign_Up from "./pages/Sign_Up";
// import Login from "./pages/Login";
// const App = () => {
//   return (
//     <Routes>
//       {/* HOME / MAIN APP */}
//       <Route
//         path="/"
//         element={
//           <div className="app">
//             {/* Top Navbar */}
//             <Navbar />

//             {/* Main body */}
//             <div className="body">
//               {/* Left Sidebar */}
//               <Your_Lib />

//               {/* Right Content Area */}
//               <div className="main-content">
//                 <Display_Cont />
//                 <Footer />
//               </div>
//             </div>
//           </div>
//         }
//       />

//       {/* SIGN UP PAGE */}
//       <Route path="/signup" element={<Sign_Up />} />

//       {/* LOGIN PAGE */}
//       <Route path="/login" element={<Login />} />
//     </Routes>
//   );
// };

// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Your_Lib from "./pages/Your_Lib";
import Display_Cont from "./pages/Display_Cont";
import Footer from "./components/Footer";
import Player from "./pages/Templates Pages/Player";

import Sign_Up from "./pages/Sign_Up";
import Login from "./pages/Login";

const App = () => {
  return (
    <Routes>
      {/* HOME / MAIN APP */}
      <Route
        path="/"
        element={
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

            {/* Bottom Player */}
            <Player />
          </div>
        }
      />

      {/* SIGN UP PAGE */}
      <Route path="/signup" element={<Sign_Up />} />

      {/* LOGIN PAGE */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
