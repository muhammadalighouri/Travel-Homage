import React from "react";
import "../scss/car.scss";
import img from "../assests/Icons/1.png";
import img2 from "../assests/q.2.png";
const Car = () => {
  return (
    <>
      <section id="car">
        <div className="container">
          <div className="heading" data-aos="fade-up">
            <h1>Un incontournable pour la flotte de votre société</h1>
          </div>
          <div className="grid-box">
            <div className="img" 
            data-aos="fade-up"
            >
              <img src={img} alt="" />
            </div>
            <div className="content">
              <div className="para" data-aos="fade-up">
                <p>
                  MK Green Energy vous propose la solution la plus adaptée a vos
                  besoins.
                </p>
                <p>
                  De l'étude de votre projet a installation, nos équipes restent
                  & votre écoute pour un résultat sur-mesure a la hauteur de vos
                  attentes et exigences.
                </p>
                <p>
                  Offrez & vos locaux, salariés et/ou visiteurs un confort et
                  une mobilité durable pour faire la différence.
                </p>
              </div>
              <div className="btn" data-aos="fade-up">
                <a href="#">Nous contacter pour en discuter ?</a>
              </div>
            </div>
          </div>
        </div>
        <div className="container2">
          <div className="parteners">
            <h1 data-aos="fade-up">
              Les aides financiéres allouées aux installations de bornes de
              recharge
            </h1>
            <ul data-aos="fade-up"> 
              <li className="main" >
                PROGRAMME
                <img src={img2} alt="" />
              </li>
              <li>LES CRÉDIT D'IMPOT</li>
              <li>LA REDUCTION DU TAUX DE TVA</li>
              <li>LES AIDES DES COLLECTIVITES</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Car;
