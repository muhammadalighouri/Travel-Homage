import React from "react";
import first from "../assests/Photo car.png";
import icon1 from "../assests/Services-img/icon.1.png";
import sh from "../assests/Services-img/s.h.png";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import "../scss/services-main.scss";
import Services from "../components/Services";
import c1 from "../assests/Services-img/center-main.png";
import c2 from "../assests/Services-img/center-i.png";
import s1 from "../assests/Services-img/s.11.png";
import s2 from "../assests/Services-img/s.22.png";
import s3 from "../assests/Services-img/s.33.png";
import s4 from "../assests/Services-img/s.44.png";
import s5 from "../assests/Services-img/s.55.png";
import s6 from "../assests/Services-img/s.66.png";
import s7 from "../assests/Services-img/s.77.png";
import i1 from "../assests/Services-img/si.1.png";
import i2 from "../assests/Services-img/si.2.png";
import i3 from "../assests/Services-img/si.3.png";
import { ServiceNav } from "../assests/data";

const ServicesPage = () => {
  return (
    <>
      <section id="services-page">
        <Navigation nav={ServiceNav} />
        <Banner text={" خدمات "} img={first} icon={true} mi={icon1} p={true} />
        <div className="container-services" id="فردي">
          <div className="top-heading">
            <div className="heading-s">
              <h2> فردي</h2>
              <img src={sh} alt="" />
            </div>
            <div className="content">
              نحن في شركة السفر نعمل على تقديم خدماتنا المتنوعة في حلول التنقل
              من خلال تزويد العميل بجميع متطلباته بشكل يومي وشهري وسنوي سواء
              للعملاء الأفراد أو للقطاعين الخاص والحكومي بالإضافة إلى تقديم
              المزايا والخصومات بشكل دائم لضمان سعادتهم والاستفادة القصوى من كل
              ما نقدمه لهم بخيارات واسعة ومتنوعة وجودة وابتكار.
            </div>
          </div>
          <Services
            heading={" (خدمة وجهة واحدة)"}
            span={"مسارك "}
            id={"مسارك"}
            des={
              " لتوفير أقصى درجات الراحة لعملائنا ، قدمنا لهم خدمة المسار الخاص بك ، حيث يمكنهم التنقل بين مناطق المملكة العربية السعودية بسلاسة وسهولة ، واستلام سيارتهم في أي مكان. ضعها وقم بتسليمها في مكان آخر ، برسوم مخفضة عندما تختلف المدينة ورسوم مجانية في نفس المدينة."
            }
            mainImg={s1}
          />

          <Services
            heading={" (  (خدمة تصاريح السفر الدولية))"}
            span={"Limitless"}
            id={"Limitless"}
            reverse={true}
            order={true}
            des={
              " نسهل لك الطريق إلى جميع دول مجلس التعاون الخليجي من خلال أسطول مركباتنا ونكمل الإجراءات بسهولة ومرونة من أجل سعادتك في سفرك ورحلتك ونوفر لك الدعم أثناء سفرك لراحتك ."
            }
            mainImg={s2}
          />
          <Services
            heading={" ( غير محدود (الكيلومتر المفتوح))"}
            id={"غير محدود"}
            des={
              " نجعل عميلنا غير مقيد وغير محدود في تحركاته حتى يتمكن من إضافة خدمة الكيلومتر المفتوح إلى عقده ، وبعد ذلك لن يكون هناك سبب للتفكير في مسافة رحلاته وأسفاره. سوف يستمتع بجميع أسفاره إلى مختلف أنحاء المملكة العربية السعودية وخارجها. ‬"
            }
            mainImg={s3}
          />
          <Services
            heading={" (خدمة المركبات بسائق)"}
            span={"ليمو"}
            id={"ليمو"}
            order={true}
            des={
              " نقدم خدمات المركبات بسائقين مسئولين وكفؤين يتحدثون اللغتين العربية والإنجليزية ويرتدون زي موحد يعكس مدى الاحتراف والجودة لخدمة عملائنا في القطاعين الحكومي والخاص والوفود الزائرة ، بالإضافة إلى الزوار إلى المشاعر المقدسة في كل من مكة المكرمة والمدينة المنورة.‬"
            }
            mainImg={s4}
          />
          <div className="center-wrapper" id='خدمات الأعمال'>
            <div className="center">
              <div className="img">
                <img src={c1} alt="" />
              </div>
              <div className="content">
                <div className="heading">
                  <h1> خدمات الأعمال</h1>
                  <img src={c2} alt="" />
                </div>
                <div className="para">
                  نقدم خدماتنا لقطاع الأعمال بعقود طويلة وقصيرة الأجل من خلال
                  الكفاءات الإدارية لتلبية احتياجات سوق العمل للقطاعين الحكومي
                  والخاص وتطلعاته من خلال توفير الكمية المطلوبة من السيارات
                  وتغطية المؤتمرات والندوات والفعاليات مع أحدث المركبات مع توفير
                  سائقين محترفين. تشمل المركبات أيضًا تأمينًا شاملاً وخدمات
                  المساعدة على الطريق واستبدال السيارة في حالة حدوث عطل أو صيانة
                  على مدار الساعة. ‬
                </div>
              </div>
            </div>
          </div>
          <Services
            span={" العضويات"}
            id={" العضويات"}
            con={true}
            img={i1}
            des={
              " عضوية السفر تتجاوز مفهوم كسب الأميال واستبدالها. لدينا 3 مستويات من الأعضاء وعلى أساس مستواهم ؛ يستفيد أعضاؤنا من الخصومات مع شركائنا. نحن نعمل على الحصول على شركاء مختلفين بدءًا من شركات الطيران والفنادق والمطاعم وصالات الألعاب الرياضية وأيضًا خصومات على أسعار وخدمات الإيجار وساعات إضافية عند التوصيل وعدد أميال إضافي مجاني."
            }
            mainImg={s5}
          />
          <Services
            span={"  مبيعات السيارات المستعملة"}
            id={"  مبيعات السيارات المستعملة"}
            con={true}
            order={true}
            img={i2}
            des={
              "يتميز قسم مبيعات ترافل للسيارات المستعملة بتقديم موديلات حديثة ومتنوعة من السيارات التي تخضع للصيانة الدورية طوال فترة خدمة قطاع التأجير بأسعار تنافسية وفي متناول الجميع ، وكذلك استكمال البيع وإجراءات التحويل في فترة وجيزة وبطريقة سلسة.."
            }
            mainImg={s6}
          />
          <Services
            span={" المساعدة على الطريق"}
            id={" المساعدة على الطريق"}
            con={true}
            img={i3}
            des={
              "  نقدم خدماتنا للمساعدة على الطريق على مدار الساعة ، حيث يتم متابعة الأمور مع الجهات المختصة. لدينا أيضًا ورش صيانة متنقلة داخل المدن الرئيسية من أجل تسهيل الخدمة. عند حدوث أي طارئ ، نحن على استعداد للمساعدة والحفاظ على سلامة عملائنا."
            }
            mainImg={s7}
          />
        </div>
        <Footer />
      </section>
    </>
  );
};

export default ServicesPage;
