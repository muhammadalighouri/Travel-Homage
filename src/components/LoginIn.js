import React from "react";
import logo from "../assests/Logo.png";
import icon from "../assests/Group 17.png";
import img1 from "../assests/Icons/Tail icon q.png";
import img2 from "../assests/Icons/Lead icon.png";
import img3 from "../assests/Icons/Lead icon.svg";
import img4 from "../assests/Icons/Vector (6).png";
import img5 from "../assests/Icons/Tail icon.svg";
import "../scss/logIn.scss";
const LoginIn = () => {
  return (
    <>
      <section id="login">
        <div className="container">
          <div className="top">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="icon">
              <img src={icon} alt="" />
            </div>
          </div>
          <div className="form">
            <div className="heading">
              <h1>Sign In</h1>
              <p>Welcome to Travel car rental solution.</p>
            </div>
            <form action="">
              <div id="email" className="same">
                <p>Email Adress</p>
                <div className="under">
                  <img src={img2} alt="" />
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Example@domain.com"
                  />{" "}
                  <img src={img1} alt="" />
                </div>
              </div>
              <div id="phone" className="same">
                <p>Phone Number</p>
                <div className="under">
                  {" "}
                  <input type="number" name="" id="" />
                </div>
              </div>
              

              <div className="btns">
                <a href="#" className="a"> SignIn</a>
                <a href="#" className="b">Create an account</a>
              </div>
              <p className="para">
                Already have an account
                <a href="#">Sign in</a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginIn;
