import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import React from "react";
import first from "../assests/Photo.png";
import main from "../assests/About-img/Block 1.png";
import a1 from "../assests/About-img/a.1.1.png";
import a2 from "../assests/About-img/a.1.2.png";
import a3 from "../assests/About-img/a.2.1.png";
import a4 from "../assests/About-img/a.2.2.png";
import a5 from "../assests/About-img/a.3.1.png";
import a6 from "../assests/About-img/a.3.2.png";
import a7 from "../assests/About-img/a.4.1.png";
import a8 from "../assests/About-img/a.4.2.png";
import i1 from "../assests/About-img/i.1.png";
import i2 from "../assests/About-img/i.2.png";
import i3 from "../assests/About-img/i.3.png";
import i4 from "../assests/About-img/i.4.png";
import "../scss/aboutmain.scss";
import About from "../components/About";
import Footer from "../components/Footer";
import { AboutNav } from "../assests/data";
const AboutPage = () => {
  return (
    <>
      <section id="about-page">
        <Navigation nav={AboutNav} />
        <Banner text={"من نحن تتوالى النجاحات عبر السنين "} img={first} />
        <div className="container-about">
          <div className="top-heading">
            <div className="content">
              منــذ عام 2010، كانــت بدايــة تأســيس مجموعــة شــركات ترفــل
              ومــن الريــاض بالمملكــة العربيــة الســعودية اتخــذت طريقهــا
              نحــو الاحترافيــة والتميــز فــي العديــد مــن المجــالات ومنهــا
              كان بــزوغ علامتنــا المميــزة فــي حلول تأجير الســيارات والخدمات
              اللوجســتية عبر أســطول متنامي ومتجدد وإدارة رئيســية متكاملــة
              الأقســام لخدمــة ذات جــودة وامتيــاز.
            </div>
            <div className="img">
              <img src={main} alt="" />
            </div>
          </div>
          <About
            mainImg={a1}
            heading={"رؤيتنا"}
            img={a2}
            order={false}
            id={"رؤيتنا"}
            des={
              "To professionally be the best‭, ‬earn loyalty of our customers and make them pleased by providing exceptional service and innovative solutions for mobility and logistics‭. ‬"
            }
          />
          <About
            mainImg={a3}
            end={true}
            heading={"رسالتنا"}
            img={a4}
            order={true}
            des={
              "تقديــم الأفضــل دومــا عبــر خدماتنــا المبتكــرة لحلــول التنقــل والخدمــات اللوجيســتية وبشــكل يلبــي إحتياجــات العمــلاء وإســعادهم بــكل ثقــة وبأفضــل مســتويات الجــودة وتوفيــر باقــات متنوعــة ومميــزة بجهــد وإخــلاص ومثابــرة غيــر مســبوقة ومتطــورة ومــن أي مــكان.    "
            }
            id={"رسالتنا"}
          />
          <About
            mainImg={a5}
            end={true}
            heading={"أهدافنا"}
            img={a6}
            order={false}
            top={true}
            id={"أهدافنا"}
            des={` دائما وأبدا نحــن شــركة خدمــات يحركهــا العمــلاء وإرضــاء العمــلاء يمثل الإهتمــام بمــا يريــدون وتقديــم حلــول مــن الدرجــة الأولــى وإعــادة تقييــم مســتمرة لــكل خطواتنــا حيــث نديــر أعمالنــا بشــكل لا يتجــزأ مــن نهــج طموحاتنــا. 
           إن كل ابتــكار نقــوم بتطويــره يضمــن جــودة الخدمــة التــي تقدمهــا العلامــة التجاريــة لترفــل وذلــك لخلــق قيمــة مقابــل خدماتنــا وتجربــة قيــادة آمنــة وخدمــة لوجيســتية متطــورة، فنحــن نقــدم خدماتنــا باحترافيــة وموثوقيــة، والجــودة فــي كل منتــج مــن منتجاتنــا لتقديــم أفضــل النتائــج. 
           فــي كل يــوم نرتقــي إلــى مســتوى قيمنــا حتــى نتمكــن مــن الحفــاظ علــى عملائنــا، ونحافــظ علــى مكانتنــا الخاصــة فــي المجتمــع فنحــن نشــجع موظفينــا علــى التطــور إلــى أقصــى إمكاناتهــم ونغمــر كل جانــب مــن جوانــب أعمالنــا بــروح الابتــكار.`}
          />
          <About
            mainImg={a7}
            heading={"قيمنا"}
            id={"قيمنا"}
            img={a8}
            order={true}
            end={true}
            des={` إن قيمنــا العاليــة هــي محــور ســعادتنا وســعادة عملائنــا لكوننــا شــركة ملتزمــة بالقيــم والمبــادئ المجتمعيــة وتراعي الأنظمــة والقوانيــن المحليــة والعالميــة ونضــع نصــب أعيننــا  هــذه القيــم حتــى نحافــظ علــى الصــورة الأجمــل فــي ًدومــا نظــر عملائنــا والمجتمــع بــكل رحابــة وفــرح.
            .`}
          />
          <div className="bottom">
            <div className="icon">
              <img src={i1} alt="" />
              المسؤولية الاجتماعية
            </div>
            <div className="icon">
              <img src={i2} alt="" />
              النمو والابتكار
            </div>
            <div className="icon">
              <img src={i3} alt="" />
              النزاهة
            </div>
            <div className="icon">
              <img src={i4} alt="" />
              الجودة
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default AboutPage;
