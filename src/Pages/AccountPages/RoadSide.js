import React from "react";
import "../../scss/profile.scss";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
// import Slide  from "../../components/Sidebar";
import Sidebar from "../../components/Sidebar";
import first from "../../assests/Photo.png";
import '../../scss/road.scss'

import icon from "../../assests/Icons/1.png";
import img1 from "../../assests/Icons/Tail icon q.png";
import img2 from "../../assests/Icons/Lead icon.png";
import img3 from "../../assests/Icons/Lead icon.svg";
import img4 from "../../assests/Icons/Vector (6).png";
import img5 from "../../assests/Icons/Tail icon.svg";
const RoadSide = () => {
  return (
    <>
      <Navigation />
      <Banner text={"العضوية"}  img={first} />
      <section id="user-profile">
        <div className="user-container">
          <div className="road-input">
{/* <input type="color" name="" id="" /> */}
          </div>
          <Sidebar />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default RoadSide;
