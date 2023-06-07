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
            toast.error("Please verify that you are not a robot!");
            return;
        }
        try {
            const response = await axios.post('/api/v1/contact', formData);
            if (response.status === 200) {
                toast.success("Message sent successfully!");
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
                                        <label htmlFor="name">Name</label>
                                        <input type="text" name="name" placeholder="Type your name here" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item__grid">
                                        <div className="item__">
                                            <label htmlFor="phone">Phone</label>
                                            <input type="number" name="phone" placeholder="Phone number" onChange={handleChange} />
                                        </div>
                                        <div className="item__">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item__">
                                        <label htmlFor="message">Your message</label>
                                        <textarea
                                            name="message"
                                            id=""
                                            placeholder="Type your message here..."
                                            cols="30"
                                            rows="10"
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>
                                </div>
                                <p>By clicking "Submit", you agree to our terms and services.</p>
                                <div className="btns">
                                    <ReCAPTCHA
                                        sitekey="6LdjE3YmAAAAAMXqq4Dt-arBbA0W3XuZnVmvVqPp"
                                        onChange={handleCaptchaChange}
                                    />
                                    <button type="submit">
                                        Submit
                                        <img src={message} alt="" />
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="end">
                            <div className="img">
                                <img src={icon} alt="" />
                            </div>
                            <h2>Contact us</h2>
                            <h3>Customer Service</h3>
                            <div className="item">
                                <h4>Sunday to Thursday</h4>
                                <p>9:00 AM - 11:00 PM</p>
                            </div>
                            <div className="item">
                                <h4>Friday - Saturday</h4>
                                <p>4:00 PM - 11:00 PM</p>
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
