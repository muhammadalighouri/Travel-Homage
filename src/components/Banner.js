import React from "react";
import "../scss/banner.scss";
import { Link } from "react-router-dom";
import first from "../assests/Photo.png";
const Banner = ({ img, text }) => {
  return (
    <>
      <div id="banner-wrapper">
        <section id="banner">
          <div className="container__">
            <div className="grid">
              <div className="start">
                <img src={first} alt="" />
              </div>
              <div className="end">
                <h1>{text}</h1>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Banner;
