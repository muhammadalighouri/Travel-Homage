import React from "react";
import logo from "../assests/Logo.png";
import icon from "../assests/Group 17.png";
import "../scss/register.scss";
import img1 from '../assests/Icons/Tail icon q.png'
import img2 from '../assests/Icons/Lead icon.png'
import img3 from '../assests/Icons/Lead icon.svg'
import img4 from '../assests/Icons/Vector (6).png'
import img5 from '../assests/Icons/Tail icon.svg'
const Register = () => {
  return (
    <>
      <section id="register">
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
              <h1>Create An Account.</h1>
              <p>Welcome to Travel car rental solution.</p>
            </div>
            <form action="">
              <div id="names" className="same">
                <div className="input">
                  <p>First name</p>
                  <div className="under">
                  <input type="text" placeholder="First name" /> <img src={img1} alt="" /> 
                  </div>
                </div>
                <div className="input">
                  <p>Last name</p>
                  <div className="under">
               <input type="text" placeholder="Last name" />    <img src={img1} alt="" /> 
                  </div>
                </div>
              </div>
              <div id="phone" className="same">
                <p>Phone Number</p>
                <div className="under">
                  {" "}
                  <input type="number" name="" id="" />
                </div>
              </div>
              <div id="email" className="same">
                <p>Email Adress</p>
                <div className="under">
                  <img src={img2} alt="" /><input type="email" name="" id="" placeholder="Example@domain.com"/> <img src={img1} alt="" />
                </div>
              </div>
              <div id="password" className="same">
                <p>Password</p>
                <div className="under">
               <img src={img3} alt="" />   <input type="password" name="" id="" /> <img src={img5} alt="" />
                </div>
              </div>
              <div id="password" className="same">
                <p>Confirm Password</p>
                <div className="under">
                <img src={img3} alt="" />   <input type="password" name="" id="" /> <img src={img4} alt="" />

                </div>
              </div>
              <div className="btn">
                <a href="#">Create an account</a>
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

export default Register;
