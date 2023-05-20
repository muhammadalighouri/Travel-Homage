import React from "react";
import Navigation from "../components/Navigation";
import About from "../components/About";
import Quality from "../components/Quality";
import Aides from "../components/Aides";
import FooterOne from "../components/FooterOne";
import bg from "../assests/bg/banner.1.jpeg";
import img1 from "../assests/bg/footer.1.jpeg";
import Banner from "../components/Banner";
import Controls from "../components/Controls";
import Geo from "../components/Geo";
import Car from "../components/Car";
import Car2 from "../components/Car2";
import Form from "../components/Form";
import Signup from "../components/Signup.js";
import Footer from "../components/Footer";
const HomePage = () => {
  window.scroll(0, 0)
  return (
    <>
      <section id="home">
        <Navigation />
        <Banner
          bg={bg}
          isCenter={true}
          text={"Votre borne de recharge avec MK Green Energy"}
        />
        <Car />
        <Car2 />
        <Geo />
        <Signup />
        <Footer/>
      </section>
    </>
  );
};

export default HomePage;
