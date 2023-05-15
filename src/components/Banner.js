import React from "react";
import "../scss/banner.scss";
import { Link } from "react-router-dom";
const Banner = ({ bg, text, isCenter, bc }) => {
  return (
    <>
      <div id="banner-wrapper">
        <section
          id="banner"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
          }}
        >
          <div className="conatiner-wrapper" style={{ background: bc }}>
            <div
              className="container"
              style={
                isCenter
                  ? {
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                    }
                  : {}
              }
            >
              <div className="heading" data-aos="fade-up">
                <h1
                  style={isCenter ? { textAlign: "center" } : {}}
                  className={bc === "rgb(255 255 255 / 62%)" ? "grey" : null}
                >
                  {text}
                </h1>
              </div>
              <div className="banner-btns" data-aos="fade-up">
                <div className="btn">
                  <Link to={"/Contact"}>Obtenir votre devis</Link>
                </div>
                <div className="btn">
                  <a href="https://www.je-roule-en-electrique.fr" target="blank_"> Je passe à l'électrique</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Banner;
