import React from "react";
import "../../scss/profile.scss";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import first from "../../assests/Photo.png";
import "../../scss/road.scss";

import icon from "../../assests/Icons/1.png";
import img1 from "../../assests/Icons/Tail icon q.png";
import img2 from "../../assests/Icons/Lead icon.png";
import img3 from "../../assests/Icons/Lead icon.svg";
import img4 from "../../assests/Icons/Vector (6).png";
import img5 from "../../assests/Icons/Tail icon.svg";
import ProfileSidebar from "../../components/ProfileSidebar";
import r1 from '../../assests/road.1.png'
import r2 from '../../assests/road.2.png'
const RoadSide = () => {
  return (
    <>
      <Navigation nav={[]}/>

      <Banner text={"العضوية"} img={first} />
      <section id="user-profile">
        <div className="user-container">
          <div className="road-input">
            <div className="input-box-wrap">
              <div className="input-box">
                <p>ما هو نوع المساعدة التى تحتاجها؟</p>
                <div className="input">
                <img src={r1} alt="" />
                  <input
                    type="text"
                    name="addressLine1"
                    placeholder="اختر نوع المساعدة المطلوبة"
                  />
                  <img src={r2} alt="" />
                </div>
              </div>
            </div>
          </div>
          <ProfileSidebar />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default RoadSide;
