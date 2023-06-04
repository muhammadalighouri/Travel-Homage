import React from "react";
import "../scss/signupform.scss";
import message from "../assests/message.png"
import captcha from "../assests/captcha.png"
import circle from "../assests/circle.png"
import mail from "../assests/mail.png"
import phone from "../assests/phone.png"
import icon from "../assests/172.png"
const Signup = () => {
    return (
        <section id ="contact__form">
            <div className="inner">
                <div className="container">
                    <div className="grid">
                        <div className="start">
                            <form
                                action=""
                            >
                                <div className="item">
                                    <div className="item__">
                                        <label htmlFor="">الاسم</label>
                                        <input type="text" placeholder="اكتب اسمك هنا" />
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item__grid">
                                        <div className="item__">
                                            <label htmlFor="">هاتف</label>
                                            <input type="text" placeholder="رقم الهاتف" />
                                        </div>
                                        <div className="item__">
                                            <label htmlFor="">بريد الكتروني</label>
                                            <input type="text" placeholder="البريد الإلكتروني" />
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item__">
                                        <label htmlFor="">رسالتك</label>
                                        <textarea
                                            name=""
                                            id=""
                                            placeholder="اكتب رسالتك هنا..."
                                            cols="30"
                                            rows="10"
                                        ></textarea>
                                    </div>
                                </div>
                                <p>بالنقر فوق "إرسال" ، فإنك توافق على شروطنا وخدماتنا.</p>
                                <div className="btns">
                                    <button>
                                        <img src={circle} alt="" />
                                        I'm Not a Robot
                                        <img src={captcha} alt="" />
                                    </button>
                                    <button>
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
                                <p>9:00 صباحًا - 11:00 مساءً</p>
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
    );
};

export default Signup;
