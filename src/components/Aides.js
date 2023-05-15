import React from "react";
import aides from "../assests/aides11.png";
import "../scss/aides.scss";
const Aides = () => {
  return (
    <>
      <section id="aides">
        <div className="container">
          <div className="heading" data-aos="fade-up">
            <h1>Aides et subventions pour</h1>
            <h1>I'installation de votre borne de recharge.</h1>
          </div>
          <div className="content">
            <div className="img" data-aos="fade-up">
              <img src={aides} alt="" />
            </div>
            <div className="para" data-aos="fade-up">
              <p>
                Le Gouvernement a mis en place plusieurs aides et subventions
                afin de permettre aux professionnels et particuliers de passer a
                I'électrique pour une mobilité durable !{" "}
              </p>
              <p>
                Que vous soyez particulier ou professionnel, nos équipes vous
                accompagnent dans toutes vos démarches d'aides allouées a votre
                installation de borne de recharge électrique.
              </p>
              <div className="btn" data-aos="fade-up">
                <a href="https://advenir.mobi/" target="blank_">Consulter Les aides</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aides;
