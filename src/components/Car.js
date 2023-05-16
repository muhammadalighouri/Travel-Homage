import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../scss/styles.scss";
// import required modules
import { Navigation } from "swiper";
import "../scss/car.scss";
import img from "../assests/Group 938.png";
import img1 from "../assests/Car Card (1).png";
import img2 from "../assests/Car Card.png";
import Controls from "../components/Controls";
const Car = () => {
  const [slide, setSlide] = useState(2)
  window.addEventListener('scroll', () => {
    if (window.innerWidth > 786) {
      setSlide(2)
    }
    if (window.innerWidth < 786) {
      setSlide(1)
    }
  })
  return (
    <>
      <section id="car">
        <Controls />

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
                {" "}
                <div className="box">
                  <img src={img1} alt="" />
                  <div className="title">
                    *السعر يشمل خصم الدفع الإلكتروني (10%)
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="box">
                  <img src={img1} alt="" />
                  <div className="title">
                    *السعر يشمل خصم الدفع الإلكتروني (10%)
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box">
                  <img src={img2} alt="" />
                  <div className="title">
                    *السعر يشمل خصم الدفع الإلكتروني (10%)
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box">
                  <img src={img2} alt="" />
                  <div className="title">
                    *السعر يشمل خصم الدفع الإلكتروني (10%)
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="content">
            <div className="icon">
              <img src={img} alt="" />
            </div>
            <div className="heading">
              <h1>سيارات جديدة</h1>
              <h2>انضمت إلى الأسطول</h2>
            </div>
            <div className="btn">
              <a href="#">استكشف جميع السيارات</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Car;
