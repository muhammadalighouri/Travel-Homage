import React, { useState } from "react";
import btn from "../assests/Fleet/Button.png";
import c1 from "../assests/Fleet/Car Photo1.png";
import icons from "../assests/Fleet/Icons.png";
import bi from "../assests/Fleet/Badge.png";
import Vector from "../assests/Fleet/Vector1.png";
import top from "../assests/Fleet/top-left.png";
import bottom from "../assests/Fleet/bottom-right.jpeg";
import s1 from "../assests/Fleet/span1.png";
import s2 from "../assests/Fleet/span2.png";
import s3 from "../assests/Fleet/span3.png";
import s4 from "../assests/Fleet/span4.png";
import f4 from "../assests/Fleet/i.11.png";
import f5 from "../assests/Fleet/i.22.png";
import "../scss/card.scss";
import { useSelector } from "react-redux";
const CarD = ({ display }) => {
  const { cars, loading } = useSelector(state => state.Cars) || {}

  return (
    <>
      {
        loading ? <h2 style={{ color: "black" }}>Loading...</h2> : <>
          {cars?.map((a) => {

            return (
              <>
                <div className="box">
                  <div
                    className="wrapper-main"
                  // onClick={() => {
                  //   display(true);
                  // }}
                  >
                    <div className="top-h">
                      <div className="start">
                        <span>خصم 15%</span>
                      </div>
                      <div className="center">VIP بريميوم</div>
                      <div className="end">
                        <img src={Vector} alt="" className="vector" />
                      </div>
                    </div>
                    <div className="bottom-h">
                      <div className="content">
                        <div className="heading-1">
                          <h1>
                            لكزس <span>ES250</span>
                          </h1>
                        </div>
                        <div className="year">
                          <span>2023</span>
                          <div className="price">
                            <span className="n1">ر.س.</span>
                            <span className="n2">1450</span>
                          </div>
                        </div>

                        <div className="layer">
                          <h2>
                            1200
                            <span className="l1">ر.س.*</span>
                          </h2>
                        </div>
                      </div>
                      <div className="wrap-img">
                        <img src={c1} alt="" className="main" />
                        <div className="icons">
                          <li>
                            <img src={s1} alt="" />
                            <span>M</span>
                          </li>
                          <li>
                            <img src={s2} alt="" />
                            <span>4</span>
                          </li>
                          <li>
                            <img src={s3} alt="" />
                            <span>4</span>
                          </li>
                          <li>
                            <img src={s4} alt="" />
                            <span>4-5</span>
                          </li>
                        </div>
                        <div className="main-btn">
                          <span>احجز الآن</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="impression">
                    <div className="btn">
                      حفظ
                      <img src={f4} alt="" />
                    </div>
                    <div className="btn">
                      <img src={f5} alt="" />      اضافة للمفضله
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </>
      }
    </>
  );
};

export default CarD;
