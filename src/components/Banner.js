import React, { useRef, useState } from "react";

import "../scss/banner.scss";
import { Link } from "react-router-dom";
import first from "../assests/Photo.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../scss/slide.scss";

// import required modules
import { Pagination } from "swiper";
const Banner = ({ img, text, icon, mi, p }) => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div id="banner-wrapper">
            <section id="banner">
              <div
                className="container__"
                style={p ? { marginBottom: "-160px" } : {}}
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
        </SwiperSlide>
        <SwiperSlide>
          <div id="banner-wrapper">
            <section id="banner">
              <div
                className="container__"
                style={p ? { marginBottom: "-160px" } : {}}
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
        </SwiperSlide>
        <SwiperSlide>
          <div id="banner-wrapper">
            <section id="banner">
              <div
                className="container__"
                style={p ? { marginBottom: "-160px" } : {}}
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
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
