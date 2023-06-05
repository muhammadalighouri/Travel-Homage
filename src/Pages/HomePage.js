import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import Controls from "../components/Controls";
import Geo from "../components/Geo";
import Car from "../components/Car";
import Car2 from "../components/Car2";
import first from "../assests/Photo.png";
import Signup from "../components/Signup.js";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilters } from "../Redux/actions/filterActions";
import Maps from "../components/Maps";
// import BookingSidebar from "../components/BookingSidebar";
import Booking from "./Booking";
import Navigate from "../components/Navigate";
import Slider from "../components/Slider";
import BookingF from "../components/BookingF";
const HomePage = () => {
  window.scroll(0, 0);
  const filter = useSelector((state) => state.Filters);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFilters());
  }, []);
  const array = [

    {
      img: first,
      text: " نصنع من رحلتكم وترحالكم شيئأ ممتعاً",
    },
    {
      img: first,
      text: " نصنع من رحلتكم وترحالكم شيئأ ممتعاً",
    },
    {
      img: first,
      text: " نصنع من رحلتكم وترحالكم شيئأ ممتعاً",
    },
  ];
  return (
    <>
      <section id="home">
        <Navigation />
        {/* <Banner /> */}
        <Slider content={array} />
        <Car />
        <Car2 />
        <Geo />
        <div className="parent__map">
          <Maps />
        </div>
        <Signup />
        <Footer />
        {/* <Booking/> */}
        {/* <BookingF /> */}
      </section>
    </>
  );
};

export default HomePage;
