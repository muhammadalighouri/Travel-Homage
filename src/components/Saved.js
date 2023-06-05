import React from "react";
import t1 from "../assests/Profile/trash.png";
import t2 from "../assests/Profile/trash (1).png";
import i1 from "../assests/Profile/t1.png";
import i2 from "../assests/Profile/t2.png";
import '../scss/saved.scss'
import CreateAddressForm from "./CreateAddressForm";
import { useSelector } from "react-redux";
const Saved = () => {
  const { addresses } = useSelector(state => state.Address) || {}
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
          <CreateAddressForm />
          {addresses?.map((a) => {
            return (
              <>
                <div className="saved-box">
                  <div className="btns">
                    <div className="btn1">
                      <a href="#">
                        Confirm <img src={a.btni1} alt="" />{" "}
                      </a>
                    </div>
                    <div className="btn2">
                      <a href="#">
                        Edit  <img src={a.btni2} alt="" />{" "}
                      </a>
                    </div>
                  </div>

                  <div className="box">
                    <div className="content">
                      <img src={a.icon} alt="" />
                      <h1>{a.title}</h1>
                    </div>
                    <p>City: {a.city}</p>
                    <p>State: {a.state}</p>
                    <p>Street: {a.street}</p>
                    <p>Zip: {a.zip}</p>
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
