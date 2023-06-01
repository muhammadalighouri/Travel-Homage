import React from "react";
import first from "../assests/Photo car.png";
import icon1 from "../assests/Services-img/icon.1.png";

import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
const ServicesPage = () => {
  return (
    <>
      <section id="services-page">
        <Navigation />
        <Banner
          text={"من نحن تتوالى النجاحات عبر السنين "}
          img={first}
          icon={true}
          mi={icon1}
        />
        <div className="container-services">
          <div className="top-heading">
            <div className="content">
              منــذ عام 2010، كانــت بدايــة تأســيس مجموعــة شــركات ترفــل
              ومــن الريــاض بالمملكــة العربيــة الســعودية اتخــذت طريقهــا
              نحــو الاحترافيــة والتميــز فــي العديــد مــن المجــالات ومنهــا
              كان بــزوغ علامتنــا المميــزة فــي حلول تأجير الســيارات والخدمات
              اللوجســتية عبر أســطول متنامي ومتجدد وإدارة رئيســية متكاملــة
              الأقســام لخدمــة ذات جــودة وامتيــاز.
            </div>
            <div className="img"></div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default ServicesPage;
