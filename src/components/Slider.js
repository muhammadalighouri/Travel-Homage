import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../scss/bannertwo.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../scss/slide.scss";

// import required modules
import { Pagination } from "swiper";

export default function Slider({ content }) {
  return (
    <>
      <div id="banner-wrapper-2">
        <section id="banner-2">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {content.map((i) => {
              return (
                <>
                  <SwiperSlide>
                    <div className="container__">
                      <div className="grid-2">
                        <div className="start-2">
                          <img src={i.img} alt="" />
                        </div>
                        <div className="end-2">
                          <h1>{i.text}</h1>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </section>
      </div>
    </>
  );
}
