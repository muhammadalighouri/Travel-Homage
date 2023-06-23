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
    const [userType, setUserType] = useState('');
    const [id, setId] = useState('');
    const [passport, setPassport] = useState('');
    const [nationality, setNationality] = useState('');
    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (e.target.name === "userType") setUserType(e.target.value);
        if (e.target.name === "id") setId(e.target.value);
        if (e.target.name === "passport") setPassport(e.target.value);
        if (e.target.name === "nationality") setNationality(e.target.value);
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
        const fullData = {
            ...formData,
            userType,
            id: userType === 'visitor' ? passport : id,
            nationality: userType === 'visitor' ? nationality : undefined
        };

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

        </section>
    );
};

export default Signup;
