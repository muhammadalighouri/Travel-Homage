import React, { useState } from "react";
import "../scss/car2.scss";
import img from "../assests/Group 938.png";
import img1 from "../assests/Promos (1).png";
import img2 from "../assests/Promos (2).png";
import img3 from "../assests/Promos.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../scss/styles.scss";
// import required modules
const Car2 = () => {
  const [slide, setSlide] = useState(2)
  window.addEventListener('scroll', () => {
    if (window.innerWidth > 786) {
      setSlide(3)
    }
    if (window.innerWidth < 786) {
      setSlide(1)
    }
  })
  return (
    <>
      <section id="car2">
        <div className="inner">
          <div className="container">
            <div className="img">
              <Swiper
                navigation={true}
                modules={[Navigation]}
                slidesPerView={slide}
                spaceBetween={35}
                pagination={{
                  clickable: true,
                }}
                className="mySwiper"

              >

                <SwiperSlide>
                  <div className="box">
                    <img src={img1} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="box">
                    <img src={img2} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="box">
                    <img src={img3} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="box">
                    <img src={img1} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="box">
                    <img src={img2} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="box">
                    <img src={img3} alt="" />
                  </div>
                </SwiperSlide>

              </Swiper>

              <p>عروضنا الخاصة والجذابة ... قمنا بتخصيصها لك</p>

            </div>
            <div className="content">
              <div className="icon">
                <img src={img} alt="" />
              </div>
              <div className="heading">
                <h1>عروض</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Car2;
