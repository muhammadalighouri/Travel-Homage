import React, { useState, useEffect } from "react";
import "../scss/signupform.scss";
import first from "../assests/Photo car.png";
import icon1 from "../assests/Services-img/icon.1.png";
import sh from "../assests/Services-img/s.h.png";
import mail from "../assests/mail.png"
import phone from "../assests/phone.png"
import icon from "../assests/172.png"
import message from "../assests/message.png"
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
import ReCAPTCHA from "react-google-recaptcha";

const ServicesPage = () => {
  const [show, setShow] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isVerified, setIsVerified] = useState(false);
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleCaptchaChange = value => {
    setIsVerified(true);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!isVerified) {
      toast.error("يرجى التحقق من أنك لست روبوت!");
      return;
    }
    try {
      const response = await axios.post('/api/v1/contact', formData);
      if (response.status === 200) {
        toast.success("تم إرسال الرسالة بنجاح!");
      }
      console.log(response.data);
    } catch (error) {
      console.error(error);
      toast.error(error);
    }
  };
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
                <button style={{
                  color: 'black',
                  background: '#ffcd00',
                  padding: '12px 42px',
                  boxShadow: '0px 1px 3px rgba(47, 43, 67, 0.1), inset 0px -1px 0px rgba(47, 43, 67, 0.1)',
                  borderRadius: '25px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '10px'
                }} onClick={() => setShow(true)}>Contact Us</button>
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

      {
        show && <section id="contact__form">
          <div className="inner">
            <div className="container">
              <div className="grid">
                <div className="start">
                  <form onSubmit={handleSubmit}>
                    <div className="item">
                      <div className="item__">
                        <label htmlFor="name">الاسم</label>
                        <input
                          required={true} type="text" name="name" placeholder="اكتب اسمك هنا" onChange={handleChange} />
                      </div>
                    </div>
                    <div className="item">
                      <div className="item__grid">
                        <div className="item__">
                          <label htmlFor="phone">الهاتف</label>
                          <input
                            required={true} type="number" name="phone" placeholder="رقم الهاتف" onChange={handleChange} />
                        </div>
                        <div className="item__">
                          <label htmlFor="email">البريد الإلكتروني</label>
                          <input
                            required={true} type="email" name="email" placeholder="البريد الإلكتروني" onChange={handleChange} />
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="item__">
                        <label htmlFor="message">رسالتك</label>
                        <textarea
                          name="message"
                          id=""
                          required={true}
                          placeholder="اكتب رسالتك هنا..."
                          cols="30"
                          rows="10"
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>
                    <p>بالنقر على "إرسال"، فإنك توافق على الشروط والأحكام الخاصة بنا.</p>
                    <div className="btns">
                      <ReCAPTCHA
                        sitekey="6LciM3YmAAAAADJzGKnaMOLBJfEFxZEcsUwbwqNB"
                        onChange={handleCaptchaChange}
                      />
                      <button type="submit">
                        إرسال
                        <img src={message} alt="" />
                      </button>
                    </div>
                  </form>
                </div>
                <div className="end">
                  <div className="img">
                    <img src={icon} alt="" />
                  </div>
                  <h2>اتصل بنا</h2>
                  <h3>خدمة العملاء</h3>
                  <div className="item">
                    <h4>الأحد إلى الخميس</h4>
                    <p>9:00 صباحا - 11:00 مساءا</p>
                  </div>
                  <div className="item">
                    <h4>الجمعة - السبت</h4>
                    <p>4:00 مساءً - 11:00 مساءً</p>
                  </div>
                  <div className="flex">
                    cs@travelcrs.com <img src={mail} alt="" />
                  </div>
                  <div className="flex">
                    966 920033361 <img src={phone} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      }
    </>
  );
};

export default ServicesPage;
