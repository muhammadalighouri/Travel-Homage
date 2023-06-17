import React, { useEffect } from "react";
import "../../scss/profile.scss";
import "../../scss/bookinghistory.scss";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import first from "../../assests/Photo.png";
import BookingF from "../../components/BookingF";
import ProfileSidebar from "../../components/ProfileSidebar";
import { useDispatch } from "react-redux";
import { getUserBookings } from "../../Redux/actions/bookingActions";
import { HomeNav } from "../../assests/data";
const BookingHistory = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserBookings())
  }, [])

  return (
    <>
      <Navigation nav={HomeNav}/>
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
