import React from "react";
import "../scss/about.scss";
import a33 from "../assests/About-img/a.33.png";

const About = ({ mainImg, heading, img, des, order, end, top, id }) => {
  return (
    <>
      <section id={id} className="about-wrapper">
        <div
          className="about-box"
          style={order ? { gridTemplateColumns: "  2fr 1fr" } : {}}
        >
          <div
            id="img"
            style={order ? { order: "2" } : {}}
            className={top ? "top" : {}}
          >
            <img src={mainImg} alt="" style={top ? { zIndex: "1" } : {}} />
          </div>
          <div className="content">
            <div className="heading">
              <img className="i" src={img} alt="" />
              <h1>
                {heading} <img src={a33} alt="" />
              </h1>
            </div>
            <div className="para">
              <p style={end ? { textAlign: "end" } : {}}>{des}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
