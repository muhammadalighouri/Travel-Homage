import React from "react";
import d1 from "../assests/Profile/doucment1.png";
import d2 from "../assests/Profile/VectorD.png";
import d3 from "../assests/Profile/yellow.png";
import '../scss/doucmentf.scss'
const DoucmentF = () => {
  return (
    <>
      <div id="doucment">
        <div className="container">
          <img src={d1} alt="" />
          <img src={d1} alt="" />
          <div className="box">
            <img src={d3} alt="" />
           <div className="up">
           <img  src={d2} alt="" />
           </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoucmentF;
