import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import first from "../../assests/Photo car.png";
import "../../scss/fleet.scss";
import f1 from "../../assests/Fleet/Categries.png";
import f2 from "../../assests/Fleet/Multiple options.png";
import f3 from "../../assests/Fleet/New Models.png";
import f4 from "../../assests/Fleet/i.11.png";
import f5 from "../../assests/Fleet/i.22.png";
import CarD from "../../components/CarD";
import field from "../../assests/Fleet/Field.png";
const Fleet = () => {
 
  return (
    <>
      <Navigation />
      <Banner text={"اسطولنا"} img={first} />
      <section id="fleet">
        <div className="container">
          <div className="top-main">
            <div className="first">
              <img src={f1} alt="" />
              <img src={f2} alt="" />
              <img src={f3} alt="" />
            </div>
            <div className="second">
              حن نعتبر واحدة من أكثر شركات تأجير السيارات ثقة في المملكة العربية
              السعودية ، حيث لدينا أسطول كبير من السيارات ، بما في ذلك السيارات
              الاقتصادية وسيارات السيدان والسيارات العائلية والمركبات الفاخرة.
              بخيارات متعددة تلبي كافة متطلبات كافة شرائح المجتمع.
            </div>
          </div>
          <div className="grid-box">
            <div className="btns">
              <div className="select">
                <img src={field} alt="" />
              </div>
              <div className="impression">
                <div className="btn">
                  عرض المحفوظ
                  <img src={f4} alt="" />
                </div>
                <div className="btn">
                  عرض المفضل
                  <img src={f5} alt="" />
                </div>
              </div>
              
            </div>
           <div className="flex-wrap">
            
           <div className="flex">
                <CarD/>
            </div>
           </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Fleet;
