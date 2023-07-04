import React, { useState, useEffect } from "react";
import "../scss/media-slider.scss";
import img from "../assests/Group 938.png";
import img1 from "../assests/Promos (1).png";
import img2 from "../assests/Promos (2).png";
import img3 from "../assests/Promos.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import axios from "../api/axios";
import "../scss/styles.scss";
import "../scss/modal.scss";
import slideImg from "../assests/Basemap image.png";

const MediaSlider = () => {
  const [slide, setSlide] = useState(2);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [sponsors, setSponsors] = useState([]);
  // Other methods...

  function openModal(imgSrc) {
    setSelectedImage(imgSrc);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  window.addEventListener("scroll", () => {
    // if (window.innerWidth > 1200) {
    //   setSlide(4);
    // }
    if (window.innerWidth > 786) {
      setSlide(4);
    }
    if (window.innerWidth < 786) {
      setSlide(1);
    }
  });
  const getSponsors = async () => {
    const { data } = await axios.get("/api/v1/gallery");
    setSponsors(data);
  };
  useEffect(() => {
    getSponsors();
  }, []);
  return (
    <>
      <section id="car2">
        <div className="inner">
          <div className="container">
            <div className="img">
              {/* <img src={slideImg} alt="" /> */}
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
                {/* {sponsors.map((spon) => {
                  return (
                    <SwiperSlide onClick={() => openModal(spon?.image?.url)}>
                      <div className="box">
                        <img src={spon?.image?.url} alt="" />
                        <img src={slideImg} alt="" />
                      </div>
                    </SwiperSlide>
                  );
                })} */}
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
                <SwiperSlide>
                  <div className="box">
                    <img src={img1} alt="" />
                  </div>
                </SwiperSlide>
              </Swiper>
              {modalIsOpen && (
                <div className="modal__">
                  <div className="modal-content__">
                    <img src={selectedImage} alt="Selected" />
                    <button onClick={closeModal}>Close</button>
                  </div>
                </div>
              )}
            </div>
            <div className="content">
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

export default MediaSlider;
