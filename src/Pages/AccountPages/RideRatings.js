import React from "react";
import "../../scss/profile.scss";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
// import Slide  from "../../components/Sidebar";
import Sidebar from "../../components/Sidebar";

import icon from "../../assests/Icons/1.png";
import img1 from "../../assests/Icons/Tail icon q.png";
import img2 from "../../assests/Icons/Lead icon.png";
import img3 from "../../assests/Icons/Lead icon.svg";
import img4 from "../../assests/Icons/Vector (6).png";
import img5 from "../../assests/Icons/Tail icon.svg";
import Ride from "../../components/Ride";
const RideRatings = () => {
  return (
    <>
      <Navigation />
      <Banner text={"العضوية"} />
      <section id="user-profile">
        <div className="user-container">
      <Ride/>
          <Sidebar />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default RideRatings;