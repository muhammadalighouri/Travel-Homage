import React from "react";
import Navigation from "../components/Navigation";
import About from "../components/About";
import Quality from "../components/Quality";
import Aides from "../components/Aides";
import FooterOne from "../components/FooterOne";
import bg from "../assests/bg/banner.1.jpeg";
import img1 from "../assests/bg/footer.1.jpeg";
import Banner from "../components/Banner";
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
        <About />
        <Quality />
        <Aides />
        <FooterOne img={img1} bgColor={'#006281a1'} />
      </section>
    </>
  );
};

export default HomePage;
