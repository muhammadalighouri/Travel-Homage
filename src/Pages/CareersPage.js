import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../scss/careeers-page.scss";
const CareersPage = () => {
  return (
    <>
      <Navigation nav={[]} />

      <section id="careers-page">
        <div className="container">
          <div className="heading">
            <ul>
              <li>
                الرئيسية <span></span>
              </li>
              <li>
                <a href="#">التوظيف</a>
              </li>
            </ul>
            <h1>انضم الينا</h1>
          </div>
          <div className="content">
            <div className="form-1">
              <div className="form-heading">
                <div className="input-box">
                  <label htmlFor="">الهاتف</label>
                  <input type="text" />
                </div>
                <div className="input-box">
                  <label htmlFor=""></label>
                  <input type="text" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CareersPage;
