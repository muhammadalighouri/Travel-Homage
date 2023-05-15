import React from "react";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import About from "../components/About";
import bg from "../assests/bg/banner.2.jpeg"
import img1 from "../assests/bg/footer.1.jpeg";
import Car from "../components/Car";
import FooterOne from "../components/FooterOne";
const ProfessionelPage = () => {
  window.scroll(0, 0)
  return (
    <>
      <section id="professionel">
        <Navigation />
        <Banner bg={bg} isCenter={false} text={"MK Green Energy installe votre entreprise"} />
        <Car />
        <About isDisplay={true} />
        <FooterOne img={img1} bgColor={'#00000090'} />

      </section>
    </>
  );
};

export default ProfessionelPage;
