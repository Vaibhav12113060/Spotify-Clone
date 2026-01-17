// import "./Display_Cont.css";
// import Footer from "../components/Footer";
// import Music from "./Templates Pages/Music";
// import { assets } from "../assets/assets";
// import React from "react";
// import Music_List_Temp from "./List of Templates/Music_List_Temp";
// import Artist_List_Temp from "./List of Templates/Artist_List_Temp";
// import Album_List_Temp from "./List of Templates/Album_List_Temp";

// const Display_Cont = () => {
//   return (
//     <div className="Cont-class">
//       {/* Treanding Songs */}

//       <div className="Trend-class">
//         <div className="Trend-head">
//           <h2>Treanding Songs</h2>
//           <p>Show all</p>
//         </div>

//         <div className="Trend-content">
//           <Music_List_Temp />
//         </div>
//       </div>

//       {/* Popular Artists */}

//       <div className="Popular-class">
//         <div className="Popular-head">
//           <h2>Popular artists</h2>
//           <p>Show all</p>
//         </div>

//         <div className="Popular-content">
//           <Artist_List_Temp />
//         </div>
//       </div>

//       {/* Popular albums and singles */}

//       <div className="Popular-alb">
//         <div className="alb-head">
//           <h2>Popular albums</h2>
//           <p>Show all</p>
//         </div>

//         <div className="alb-content">
//           <Album_List_Temp />
//         </div>
//       </div>

//       {/* Popular radio */}

//       <div className="Popular-rad">
//         <div className="rad-head">
//           <h2>Popular artists</h2>
//           <p>Show all</p>
//         </div>

//         <div className="rad-content"> Content Display 2 </div>
//       </div>

//       {/* Feature Chart */}
//       <div className="Feat-chart">
//         <div className="Feat-head">
//           <h2>Popular artists</h2>
//           <p>Show all</p>
//         </div>

//         <div className="Feat-content"> Content Display 2 </div>
//       </div>

//       <hr />
//     </div>
//   );
// };

// export default Display_Cont;

import "./Display_Cont.css";
import React from "react";
import Music_List_Temp from "./List of Templates/Music_List_Temp";
import Artist_List_Temp from "./List of Templates/Artist_List_Temp";
import Album_List_Temp from "./List of Templates/Album_List_Temp";

const Display_Cont = () => {
  return (
    <div className="Cont-class">
      <div className="scroll-wrapper">
        {/* Trending Songs */}
        <div className="Trend-class">
          <div className="Trend-head">
            <h2>Trending Songs</h2>
            <p>Show all</p>
          </div>
          <div className="Trend-content">
            <Music_List_Temp />
          </div>
        </div>

        {/* Popular Artists */}
        <div className="Popular-class">
          <div className="Popular-head">
            <h2>Popular artists</h2>
            <p>Show all</p>
          </div>
          <div className="Popular-content">
            <Artist_List_Temp />
          </div>
        </div>

        {/* Popular Albums */}
        <div className="Popular-alb">
          <div className="alb-head">
            <h2>Popular albums</h2>
            <p>Show all</p>
          </div>
          <div className="alb-content">
            <Album_List_Temp />
          </div>
        </div>

        {/* Popular Radio */}
        <div className="Popular-rad">
          <div className="rad-head">
            <h2>Popular radio</h2>
            <p>Show all</p>
          </div>
          <div className="rad-content">Content Display</div>
        </div>

        {/* Featured Charts */}
        <div className="Feat-chart">
          <div className="Feat-head">
            <h2>Featured Charts</h2>
            <p>Show all</p>
          </div>
          <div className="Feat-content">Content Display</div>
        </div>
      </div>
    </div>
  );
};

export default Display_Cont;
