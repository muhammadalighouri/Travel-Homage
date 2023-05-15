import React from "react";
import img1 from "../assests/q.1.png";
import img2 from "../assests/q.2.png";
import icon from "../assests/icon.png";
import Aos from "aos";
import "../scss/quality.scss";
const Quality = ({ isDisplay }) => {
  return (
    <>
      <section id="quality">
        <div className="container">
  
          <div className="heading" data-aos="fade-up">
            <h1>Qualifications & Label</h1>
          </div>
          <div className="content">
            <div className="img" data-aos="fade-up">
              <img src={icon} alt="" />
              <div className="im-box">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
              </div>
            </div>
            <div className="box" data-aos="fade-up">
              <p>
                MK Green Energy est certifiée et spécialisée aux installations
                de bornes de recharge pour véhicules électriques (IRVE).
              </p>
              <p>
                La certification AFNOR (IRVE) et le label ADVENIR vous
                permettent, a vous clients, de bénéficier d'une expertise
                métier, d'une installation réalisée par des professionnels
                qualifies et d'un conseil personnalisé sur vos subventions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Quality;
