import React from "react";
import f1 from "../assests/Profile/Frame 1.png";
import f2 from "../assests/Profile/Frame 2.png";
import f3 from "../assests/Profile/Frame 3.png";
import tick from "../assests/Profile/tick.png";
import plus from "../assests/Profile/plus.png";
import car1 from "../assests/Profile/car1.png";
import car2 from "../assests/Profile/carr2.png";
import car3 from "../assests/Profile/car3.png";
import '../scss/ride.scss'
const Ride = () => {
  const data = [
    {
      img: car1,
      h: "سيدان",
      star: f1,
      btn: "تم التقييم",
      icon: tick,
    },
    {
      img: car2,

      h: "دفع رباعي",
      star: f2,
      btn: "تم التقييم",
      icon: tick,
    },
    {
      img: car3,

      h: "نقل",
      star: f3,
      btn: "إضافة تقييم",
      icon: plus,
    },
  ];
  return (
    <>
      <section id="ride">
        <div className="container">
          {data.map((i) => {
            return (
              <>
                <div className="box">
                  <div className="content">
                    <h1>{i.h}</h1>
                    <img src={i.star} alt="" />
                    <div className="btn">
                      <a href="#">
                        {i.btn}
                        <img src={i.icon} alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="img-box">
                    <div className="img-wrapper">
                      <img src={i.img} alt="" />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Ride;
