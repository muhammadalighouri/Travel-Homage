import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { nav } from "../assests/data";
import "../scss/navigation.scss";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineBars3 } from "react-icons/hi2";
import logo from "../assests/Logo.png";
import avatar from "../assests/Avatar.png"
import bell from "../assests/bell.png"
const Navigation = ({ }) => {
  const [navToggler, setNavToggler] = useState(false);
  const [color, setColor] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [translate, setTranslate] = useState(false)
  const [nave, setNave] = useState(false);

  console.log(translate);
  return (
    <>
      <header>
        <div className="outer">
          <div className="container">
            <div className="nav__grid">
              <div className="user">
                <div className="avatar">
                  <img src={avatar} alt="" />

                </div>
                <div className="icon">
                  <img src={bell} alt="" />
                </div>
                <span>
                  اهلا أحمد
                </span>
              </div>
              <div className="translate">
                <div className="first">
                  ر.س
                </div>
                <div className="second">
                  English
                </div>
              </div>
              <nav>
                <div className="nav-wrap">
                  <ul style={nave ? { transform: "translateX(0%) " } : {}}>
                    <div className="nav-logo-side">
                      <Link to={"/"}>
                        <img src={logo} alt="" />
                      </Link>
                    </div>
                    {nav.map((ite, ind) => {
                      return (
                        <li key={ind} >
                          <Link onClick={() => window.scroll(0, 0)} to={ite.path}>{ite.name}</Link>
                        </li>
                      );
                    })}
                    <li>
                      <a href="">       الشركة</a>
                    </li>
                    <li className="translate__option">
                      <div className="translate">
                        <div className="first">
                          ر.س
                        </div>
                        <div className="second">
                          English
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="logo">
                <Link to={"/"}>
                  <img src={logo} alt="" />
                </Link>
              </div>
              <div
                className="bars"
                onClick={() => {
                  setNave(!nave);
                  setColor(!color);
                }}
              >
                {nave ? (
                  <RxCross2
                  // onClick={() => {
                  //   setNavColor(false);
                  // }}
                  />
                ) : (
                  <HiOutlineBars3 />
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className="color"
          onClick={() => {
            setNave(false);
            setColor(false);

          }}
          style={color ? { display: "block" } : { display: "none" }}
        ></div>
      </header >
    </>
  );
};

export default Navigation;
