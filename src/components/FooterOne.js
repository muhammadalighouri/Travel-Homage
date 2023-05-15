import React from "react";
import "../scss/footer.scss";
import { about } from "../assests/data";
import { Link } from "react-router-dom";

const FooterOne = ({ img, bgColor, invert }) => {
  return (
    <>
      <section id="footer-wrapper">
        <section
          id="footer"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
          }}
        >
          <div className="container__" style={{ background: bgColor }}>
            <div className="heading">
              <h1
                data-aos="fade-up"
                style={{
                  color:
                    bgColor === "rgb(255 255 255 / 66%)" ? "#006281" : null,
                }}
              >
                Vous avez un projet ?
              </h1>
              <h2
                data-aos="fade-up"
                style={{
                  color:
                    bgColor === "rgb(255 255 255 / 66%)" ? "#006281" : null,
                }}
              >
                Prenez contact avec nos equipes pour en discuter{" "}
              </h2>
            </div>
            <div className="footer-icons" data-aos="fade-up">
              {about.map((a) => {
                return (
                  <div className="i">
                    <img src={a.i} alt="" />
                  </div>
                );
              })}
            </div>
            {
              invert ? <div className="btn__" data-aos="fade-up">
                <Link
                  Link
                  to="/Contact"
                  style={
                    bgColor === "rgb(255 255 255 / 66%)"
                      ? { backgroundColor: "#006281", color: "#fff" }
                      : null
                  }
                >
                  Nous contacter
                </Link>
              </div> : <div className="btn" data-aos="fade-up">
                <Link
                  Link
                  to="/Contact"
                  style={
                    bgColor === "rgb(255 255 255 / 66%)"
                      ? { backgroundColor: "#006281", color: "#fff" }
                      : null
                  }
                >
                  Nous contacter
                </Link>
              </div>
            }
          </div>
        </section>
      </section>
    </>
  );
};

export default FooterOne;
