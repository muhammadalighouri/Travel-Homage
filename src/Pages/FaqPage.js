import React, { useState, useEffect } from "react";
import first from "../assests/Photo car.png";
import axios from "../api/axios"
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import sh from "../assests/Faq-img/s.h.png";
import search from "../assests/Faq-img/search.png";
import "../scss/faq-main.scss";
import FaqAccordion from "../components/FaqAccordion";
import i1 from "../assests/Faq-img/i.1.png";
import i2 from "../assests/Faq-img/i.2.png";
import i3 from "../assests/Faq-img/i.3.png";
import i4 from "../assests/Faq-img/i.4.png";
import i5 from "../assests/Faq-img/i.5.png";
import i6 from "../assests/Faq-img/i.6.png";
import i7 from "../assests/Faq-img/i.7.png";
import i8 from "../assests/Faq-img/i.8.png";
const FaqPage = () => {
  const [faqs, setFaqs] = useState([]);
  const getSlides = async () => {
    const { data } = await axios.get("/api/v1/media/faqs");
    setFaqs(data);
  };
  useEffect(() => {
    getSlides()
  }, [])

  return (
    <>
      <section id="faq-page">
        <Navigation nav={[]} />
        <Banner
          text={"  الأسئلةالمتكررة "}
          img={first}
          icon={true}
          p={true}
          mi={sh}
        />
        <div className="container-faq">
          <div className="top-heading">
            <div className="heading-s">
              <div className="input-box-wrap">
                <div className="input-box">
                  <div className="input">
                    <input
                      type="text"
                      placeholder=" ابحث عن إجابات أو تصفح حسب الموضوعات"
                    />
                    <img src={search} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="icon">
                <img src={i1} alt="" />
              </div>
              <div className="icon">
                <img src={i2} alt="" />
              </div>
              <div className="icon">
                <img src={i3} alt="" />
              </div>
              <div className="icon">
                <img src={i4} alt="" />
              </div>
              <div className="icon">
                <img src={i5} alt="" />
              </div>
              <div className="icon">
                <img src={i6} alt="" />
              </div>
              <div className="icon">
                <img src={i7} alt="" />
              </div>
              <div className="icon">
                <img src={i8} alt="" />
              </div>
            </div>
          </div>
          <div className="faq">
            <div className="heading">
              <h1> جديد في تطبيق النشرة الإخبارية؟</h1>
              <h2> كل ما تحتاج لمعرفته حول البدء.</h2>
            </div>
            {
              faqs.map((item, index) => (
                <>
                  <FaqAccordion title={item.question}>
                    <p style={{ textAlign: 'end' }}>{item.answer}</p>
                  </FaqAccordion>
                </>
              ))}
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default FaqPage;
