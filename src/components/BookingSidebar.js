import React from "react";
import profile from "../assests/Profile/Profile1.png";
import img1 from "../assests/Profile/p.1.png";
import img2 from "../assests/Profile/p.2.png";
import { side } from "../assests/data";
import { Link } from "react-router-dom";
import p from "../assests/Profile/Profile 2.png";
import "../scss/bookingside.scss";
const BookingSidebar = () => {
  return (
    <>
      <section id="sidebar">
        <div className="container">
          <div className="top">
            <img src="" alt="" />
            <div className="detial">
              <h2 className="title">لكزس <span>E250</span></h2>
              <span className="year">2023</span>
            </div>
          </div>
          <div className="bottom">
            <div className="btns">
              <div className="input-box">
                <p></p>
                <div className="input">
                  <input type="text" placeholder="CGER3E" />
                  <img src="" alt="" />
                </div>
              </div>
              <div className="submit-btn">
                <span>إضافة</span>
              </div>
            </div>
            <div className="box">
              <span className="h"></span>
              <span className="n"></span>
            </div>
            <div className="box">
              <span className="h"></span>
              <span className="n"></span>
            </div>
            <div className="box">
              <span className="h"></span>
              <span className="n"></span>
            </div>
            <div className="box">
              <span className="h"></span>
              <span className="n"></span>
            </div>
            <div className="box">
              <span className="h"></span>
              <span className="n"></span>
            </div>
            <div className="box">
              <span className="h"></span>
              <span className="n"></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingSidebar;
