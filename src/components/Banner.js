import React from "react";
import "../scss/banner.scss";
import { Link } from "react-router-dom";
import first from "../assests/Photo.png"
const Banner = () => {
  return (
    <>
      <div id="banner-wrapper">
        <section
          id="banner"

        >
          <div className="container__">
            <div className="grid">
              <div className="start">
                <img src={first} alt="" />
              </div>
              <div className="end">
                <h1>
                  <h1>نصنع من</h1> رحلتكم وترحالكم شيئأ ممتعاً
                </h1>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Banner;
