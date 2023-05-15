import React from "react";
import "../scss/borne.scss";
import img from "../assests/borne.jpeg";
const Borne = () => {
  return (
    <>
      <section id="borne">
        <div className="container">
          <div className="img" data-aos="fade-up">
            <img src={img} alt="" />
          </div>
          <div className="content">
            <div className="heading" data-aos="fade-up">
              <h1>En copropriété ou en maison, installez votre borne!</h1>
            </div>
            <p data-aos="fade-up">
              Et oui, contrairement aux idées regues la borne de recharge n'est
              pas destinée qu'aux entreprises ou aux maisons individuelles, méme
              en copropriété bénéficiez d'une solution adaptée a vos besoins.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Borne;
