import React from "react";
import "../../scss/profile.scss";
import '../../scss/booking.scss'
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
// import Slide  from "../../components/Sidebar";
import Sidebar from "../../components/Sidebar";
import first from "../../assests/Photo.png";

import BookingF from "../../components/BookingF";
const Booking = () => {

  return (
    <>
      <Navigation />
      <Banner text={"حجوزاتي "} img={first} />
      <section id="user-profile">
        <div className="user-container">
      <BookingF/>
          <Sidebar />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Booking;
