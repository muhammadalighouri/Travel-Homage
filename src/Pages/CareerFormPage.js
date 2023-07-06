import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../scss/careeers-page.scss";
import { Input, Select } from "@material-ui/core";
import Banner from "../components/Banner";
import first from "../assests/Photo car.png";

const CareerFormPage = () => {
  return (
    <>
      <section id="career-page">
        <Navigation nav={[]} />
        <Banner text={"اسطولنا"} img={first} p={false} />{" "}
        <div className="container"></div>
      </section>
    </>
  );
};

export default CareerFormPage;
