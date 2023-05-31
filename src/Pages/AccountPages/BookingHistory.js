import React from "react";
import "../../scss/profile.scss";
import "../../scss/bookinghistory.scss";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import first from "../../assests/Photo.png";
import BookingF from "../../components/BookingF";
import ProfileSidebar from "../../components/ProfileSidebar";
const BookingHistory = () => {
  return (
    <>
      <Navigation />
      <Banner text={"حجوزاتي "} img={first} />
      <section id="user-profile">
        <div className="user-container">
          <BookingF />
          <ProfileSidebar />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BookingHistory;
