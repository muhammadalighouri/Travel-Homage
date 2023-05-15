import React from "react";
import "../scss/histry.scss";
const Histries = () => {
  return (
    <>
      <section id="histry">
        <div className="container">
          <div className="heading" data-aos="fade-up">
            <h1>Notre histoire...</h1>
          </div>

          <p data-aos="fade-up">
            Depuis quelques années MK Green Energy s'est promis de permettre &
            chacun ‘acces a une mobilité durable et électrique. En partenariat
            avec des acteurs de qualités et engagés notre entreprise est fiere
            de vous accompagner dans votre transition électrique.
          </p>
          <p data-aos="fade-up">De nombreux clients nous ont fait confiance.</p>
          <p data-aos="fade-up">
            Et vous ? Passer a électrique ¢a vous dit ? Le monde demain est
            entre vos mains !
          </p>
        </div>
      </section>
    </>
  );
};

export default Histries;
