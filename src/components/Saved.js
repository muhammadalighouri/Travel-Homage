import React from "react";
import t1 from "../assests/Profile/trash.png";
import t2 from "../assests/Profile/trash (1).png";
import i1 from "../assests/Profile/t1.png";
import i2 from "../assests/Profile/t2.png";
import '../scss/saved.scss'
const Saved = () => {
  const list = [
    {
      h: "Home",
      icon: t1,
      p: "14552 Lorem ipsum dolor sit amet, consectetuer adipiscing",
      btn1: "افتراضي",
      btn2: "تعديل العنوان",
      btni1: i1,
      btni2: i2,
    },
    {
      h: "Work",
      icon: t1,
      p: "14552 Lorem ipsum dolor sit amet, consectetuer adipiscing",
      btn1: "افتراضي",
      btn2: "تعديل العنوان",
      btni1: i1,
      btni2: i2,
    },
    {
      h: "Address 1Home",
      icon: t1,
      p: "14552 Lorem ipsum dolor sit amet, consectetuer adipiscing",
      btn1: "افتراضي",
      btn2: "تعديل العنوان",
      btni1: i1,
      btni2: i2,
    },
  ];
  return (
    <>
      <section id="saved">
        <div className="container">
          {list.map((a) => {
            return (
              <>
                <div className="saved-box">
                <div className="btns">
                    <div className="btn1">
                      <a href="#">
                        {a.btn1} <img src={a.btni1} alt="" />{" "}
                      </a>
                    </div>
                    <div className="btn2">
                      <a href="#">
                        {a.btn2} <img src={a.btni2} alt="" />{" "}
                      </a>
                    </div>
                  </div>

                  <div className="box">
                    <div className="content">
                      <img src={a.icon} alt="" />
                      <h1>{a.h}</h1>
                    </div>
                    <p>{a.p}</p>
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

export default Saved;
