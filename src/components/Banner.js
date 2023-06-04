import React, { useRef, useState } from "react";
import '../scss/map.scss'
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
      <div id="banner-wrapper">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <section id="banner">
              <div
                className="container__"
                style={p ? { marginBottom: "-160px" } : {}}
                >
                <SwiperSlide>
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
            </SwiperSlide>
                <SwiperSlide>
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
            </SwiperSlide>
              </div>
   
          </section>
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
