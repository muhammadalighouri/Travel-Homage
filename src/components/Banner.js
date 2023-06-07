import React from "react";
import "../scss/banner.scss";
import { Link } from "react-router-dom";
import first from "../assests/Photo.png";
const Banner = ({ img, text, icon, mi, p }) => {
  return (
    <>
      <div id="banner-wrapper">
        <section id="banner">
          <div
            className="container__"
            style={p ? { marginBottom: "-140px" } : {}}
          >
            <div className="grid">
              <div className="start">
                <img src={img} alt="" />
              </div>
              <div className="end">
                <h1>{text}</h1>
                {icon && (
                  <>
                    <div className="img">
                      <img src={mi} alt="" />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Banner;
