import React from "react";
import first from "../assests/Photo car.png";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import sh from "../assests/Faq-img/s.h.png";
import "../scss/faq-main.scss";
import FaqAccordion from "../components/FaqAccordion";
const FaqPage = () => {
  return (
    <>
      <section id="faq-page">
        <Navigation />
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
              <h2> فردي</h2>
              {/* <img src={sh} alt="" /> */}
            </div>
            <div className="content">
              نحن في شركة السفر نعمل على تقديم خدماتنا المتنوعة في حلول التنقل
              من خلال تزويد العميل بجميع متطلباته بشكل يومي وشهري وسنوي سواء
              للعملاء الأفراد أو للقطاعين الخاص والحكومي بالإضافة إلى تقديم
              المزايا والخصومات بشكل دائم لضمان سعادتهم والاستفادة القصوى من كل
              ما نقدمه لهم بخيارات واسعة ومتنوعة وجودة وابتكار.
            </div>
          </div>
<FaqAccordion/>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default FaqPage;
