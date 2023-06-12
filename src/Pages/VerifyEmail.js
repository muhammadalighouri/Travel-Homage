import React, { useEffect } from "react";
import img from "../assests/gmail.png";
import axios from "../api/axios"
const VerifyEmail = () => {

    const sendEmail = async () => {
        try {
            await axios.post('/api/v1/user/send_confirmation_email');

        } catch (error) {

        }

    }
    useEffect(() => {
        sendEmail()
    }, [])

    return (

        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <img src={img} style={{ width: "100px" }} alt="" />
            <h1>Verify Your Email</h1>
            <p>Please check your email to verify your account.</p>
        </div>
    );
}

export default VerifyEmail;
