import React from "react";
import profile from "../assests/Profile/Profile1.png";
import { side } from "../assests/data";
import { Link } from "react-router-dom";
import p from "../assests/Profile/Profile 2.png";
import inpu from "../assests/booking/Tail icon.png";
import "../scss/bookingside.scss";
import img1 from "../assests/booking/Rectangle 23.png";
const BookingSidebar = ({ selectedCar }) => {
  return (
    <>
      <section id="sidebar">
        <div className="container">
          <div className="top">
            <img src={selectedCar?.mainImages[0]} alt="" />
            <div className="detial">
              <span className="year">{selectedCar?.year}</span>
              <h2 className="title">
                {selectedCar?.name}
              </h2>
            </div>
          </div>
          <ul className="bottom">
            <li className="btns">
              <div className="submit-btn">
                <span>إضافة</span>
              </div>

              <div className="input-box">
                <p></p>
                <div className="input">
                  <input type="text" placeholder="CGER3E" />
                  <img src={inpu} alt="" />
                </div>
              </div>
            </li>
            <li className="box">
              <span className="h">المجموع الأولي</span>
              <span className="n">{selectedCar?.pricePerDay
              } ر.س.</span>
            </li>
            <li className="box">
              <span className="h">الخصم</span>
              <span className="n">-300.00 ر.س.</span>
            </li>
            <li className="box">
              <span className="h">كود الخصم</span>
              <span className="n">-0.00 ر.س.</span>
            </li>
            <li className="box">
              <span className="h">الإضافات</span>
              <span className="n">الإضافات</span>
            </li>
            <li className="box">
              <span className="h">الضريبة</span>
              <span className="n" style={{ color: '#00AFAA' }}>مجاناً</span>
            </li>
            <li className="box">
              <span className="h" style={{ fontWeight: '700' }}>الإجمالي</span>
              <span className="n" >2440.00 ر.س.</span>
            </li>
          </ul>
        </div>

      </section>
    </>
  );
};

export default BookingSidebar;
