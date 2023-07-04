import React, { useState } from "react";
import "../scss/signupform.scss";
import message from "../assests/message.png"
import captcha from "../assests/captcha.png"
import circle from "../assests/circle.png"
import mail from "../assests/mail.png"
import phone from "../assests/phone.png"
import icon from "../assests/172.png"
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";

import axios from "../api/axios"
const Signup = () => {
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
        <section id="contact__form">
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
    );
};

export default Signup;