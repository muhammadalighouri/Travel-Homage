import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../scss/bannertwo.scss";
import "swiper/css";
import "swiper/css/pagination";
import "../scss/slide.scss";
import axios from "../api/axios"
import { Pagination } from "swiper";
export default function Slider({ content }) {
  const [slides, setSlides] = useState([])
  const getSlides = async () => {
    const { data } = await axios.get("/api/v1/slides");
    setSlides(data);
  };
  useEffect(() => {
    getSlides()
  }, [])

  return (
    <>
      <div id="banner-wrapper-2">
        <section id="banner-2">
          <Swiper
            autoplay={{
              // delay: 250,
              disableOnInteraction: true,
            }}
            // pagination={{
            //   clickable: true,
            // }}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {slides?.map((i) => {
              return (
                <>
                  <SwiperSlide>
                    <div className="container__">
                      <div className="grid-2">
                        <div className="start-2">
                          <img src={i?.image?.url} alt="" />
                        </div>
                        <div className="end-2">
                          <h1>{i?.title}</h1>
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
