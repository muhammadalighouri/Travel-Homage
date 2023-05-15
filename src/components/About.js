import React from "react";
import "../scss/about.scss";
import { about } from "../assests/data";
import { Link, useNavigate } from "react-router-dom";
const About = ({isDisplay}) => {
  const navigate = useNavigate();
  return (
    <>
      <section className="about">
        <div className="container">
          <div className="heading" data-aos="fade-up">
            <h1>L'organisation de votre projet en 4 étapes</h1>
          </div>
          <div className="content" data-aos="fade-up">
            {about.map((a) => {
              return (
                <div className="box">
                  <div className="i">
                    <img src={a.i} alt="" />
                  </div>
                  <div className="content-box">
                    <h2>{a.h}</h2>
                    <p>{a.p}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className="btn" data-aos="fade-up"
            style={isDisplay ? { display: "none" } : { display: "block" }}
          >
            <Link to="/Contact">Nous contacter</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
