import React, { useState, useEffect } from "react";
import first from "../assests/Photo car.png";
import "../scss/media-page.scss";
import axios from "../api/axios"
import mediaImg from "../assests/Sale.1.jpg";
import Banner from "../components/Banner";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import mediaIcon from "../assests/msdia-icon.png";
import logo from "../assests/logo-media.png";
import { GoShareAndroid } from "react-icons/go";
import { BiDotsVerticalRounded, BiGridAlt } from "react-icons/bi";
import MediaSlider from "../components/MediaSlider";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import MediaModal from "../components/MediaModal"
const MediaPage = () => {
  const [show, setShow] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const getSlides = async () => {
    const { data } = await axios.get("/api/v1/media/blogs");
    setBlogs(data);
  };
  useEffect(() => {
    getSlides()
  }, [])

  return (
    <>
      <Navigation nav={[]} />
      <Banner
        text={"اسطولنا"}
        img={first}
        p={false}
        icon={true}
        mi={mediaIcon}
      />
      <section id="media-page">
        <div className="container">
          <div className="grid-1">
            <div className="box-heading">
              <span>داخل</span>
              <div>
                خطة توسع
                <BiGridAlt />
              </div>
            </div>
            <div className="boxes-top">
              {
                blogs.map((item) => {
                  return (
                    <div className="box" >
                      <img src={item?.image?.url} alt="" />
                      <h2>{item.title}</h2>
                      <p>لدينا خطة توسع شاملة للوصول ا</p>
                      <div className="bottom-box">
                        <span>كانوا</span>
                        <div className="icons">
                          <GoShareAndroid />
                          <BiDotsVerticalRounded />
                        </div>
                      </div>
                    </div>
                  )
                })
              }

            </div>


          </div>
          <div className="grid-2">
            <div className="main-box">
              <img src={blogs[0]?.image?.url} alt="" />
              <h2>
                {blogs[0]?.content}
              </h2>

              <div className="bottom-box">
                <span>كانوا</span>{" "}
                <div className="icons">
                  <GoShareAndroid />
                  <BiDotsVerticalRounded />
                </div>
              </div>
            </div>
          </div>
        </div>
        <MediaSlider />

        <div className="layer-wrapper">
          <div className="layer">
            <div className="start">
              <div className="btn1">
                <BsFillArrowDownCircleFill />
                إلى عملائن
              </div>
            </div>
            <div className="end">
              <h1>
                لدينا خطة توسع أينما كانوا <p>أينما كانوا داخل وخارج</p>
              </h1>
              <div className="log">
                <img src={logo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {
        show && <MediaModal />
      }
      <Footer />
    </>
  );
};

export default MediaPage;
