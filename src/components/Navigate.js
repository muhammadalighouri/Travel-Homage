import React from "react";
import star from "../assests/Fleet/Frame 199.png";
import v1 from "../assests/Fleet/Vector (3).png";
import v2 from "../assests/Fleet/Vector (4).png";
import v3 from "../assests/Fleet/Vector (5).png";
import v4 from "../assests/Fleet/Group (2).png";
import img1 from "../assests/Fleet/Rectangle 23.png";
import "../scss/navigate.scss";
import cross from "../assests/Fleet/Xmark.png";
const Navigate = () => {
  return (
    <>
      <div className="navigate-wrapper">
        <section id="navigate">
          <div className="container">
            <div className="content">
              <div className="heading">
                <div className="cross">
                  <img src={cross} alt="" />
                </div>
                <span className="year">2023</span>

                <h1>
                  <span>E250</span> لكزس{" "}
                </h1>
                
              </div>
              <div className="para">
                <img src={star} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetuer </p>
              </div>
              <div className="icons">
                <li>
                  <img src={v1} alt="" />
                  <span>M</span>
                </li>
                <li>
                  <img src={v2} alt="" />
                  <span>4</span>
                </li>
                <li>
                  <img src={v3} alt="" />
                  <span>4</span>
                </li>
                <li>
                  <img src={v4} alt="" />
                  <span>4-5</span>
                </li>
              </div>
              <div className="list">
                <ul className="light">
                  <li>ومن هنا وجب على المصمم أن يضع.</li>
                  <li>نصوصا مؤقتة على التصميم.</li>
                  <li>يظهر للعميل الشكل كاملاًدور مولد النص.</li>
                  <li>العربى أن يوفر على المصمم عناء البحث .</li>
                  <li>نص بديل لا علاقة له ب.</li>
                  <li>عنه التصميم فيظهر بشكل لا يليق.</li>
                </ul>
                <ul className="bold">
                  <li>هذا النص:</li>
                  <li>هو مثال:</li>
                  <li>لنص يمكن أن:</li>
                  <li>يستبدل في:</li>
                  <li>نفس:</li>
                  <li>المساحة:</li>
                </ul>
              </div>
              <div className="price-btn">
                <div className="btn-1">
                  <span>أحجز الآن</span>
                </div>
                <div className="btn-2">
                  <p className="one">1350</p>
                  <p className="second">1200 ر.س</p>
                </div>
              </div>
            </div>
            <div className="img">
              <img src={img1} alt="" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Navigate;
