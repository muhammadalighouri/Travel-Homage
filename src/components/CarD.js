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

import "../scss/card.scss";
const CarD = () => {
  const [display, setDisplay] = useState(false);
  return (
    <>
      {[1, 2, 3, 4, 5, 6].map((a) => {
        return (
          <>
            <div
              className="wrapper-main"
              onClick={() => {
                setDisplay(true);
              }}
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
                  <h1>نيسان باترول</h1>
                  <div className="year">
                    <span>2023</span>
                    <div className="price">1450 ر.س.</div>
                  </div>

                  <div className="layer">
                    <h2>1200 ر.س.*</h2>
                  </div>
                </div>
                <div className="wrap-img">
                  <img src={c1} alt="" className="main" />
                  <div className="icon">
                    <li>
                      <img src={s1} alt="" />
                      <span>L</span>{" "}
                    </li>
                    <li>
                      <img src={s2} alt="" />
                      <span>4</span>{" "}
                    </li>
                    <li>
                      <img src={s3} alt="" />
                      <span>5</span>{" "}
                    </li>
                    <li>
                      <img src={s4} alt="" />
                      <span>4-5</span>{" "}
                    </li>
             
                  </div>
                  <div className="main-btn">
                    <span>احجز الآن</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default CarD;
