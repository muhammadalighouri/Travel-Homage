import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import Controls from "../components/Controls";
import Car from "../components/Car";
import Car2 from "../components/Car2";
import first from "../assests/Photo.png";
import Signup from "../components/Signup.js";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilters } from "../Redux/actions/filterActions";
const HomePage = () => {
  window.scroll(0, 0);
  const filter = useSelector((state) => state.Filters);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFilters());
  }, []);

  return (
    <>
      <section id="home">
        <Navigation />
        <Banner text={"   نصنع من رحلتكم وترحالكم شيئأ ممتعاً"} img={first} />
        <Car />
        <Car2 />
        <Signup />
        <Footer />
      </section>
    </>
  );
};

export default HomePage;
