import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import i1 from "../assests/Profile/1.1.png";
import i2 from "../assests/Lead icon (1).png";
import i3 from "../assests/Lead icon (2).png";
import i4 from "../assests/Lead icon (3).png";
import i5 from "../assests/Lead icon (4).png";
import i6 from "../assests/Lead icon (5).png";
import i7 from "../assests/Lead icon (6).png";
import i8 from "../assests/Lead icon (7).png";
import profile from "../assests/Avatar.png";
import arrow1 from "../assests/arrow1.png";
import { nav } from "../assests/data";
import { ArrowUpward } from "@material-ui/icons";

import "../scss/navigation.scss";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineBars3 } from "react-icons/hi2";
import logo from "../assests/Logo.png";
import avatar from "../assests/Avatar.png";
import avatarLogout from "../assests/Avatar-logout.png";
import bell from "../assests/bell.png";
import { useDispatch, useSelector } from "react-redux";
import Register from "./Register";
import LoginIn from "./LoginIn";
import down from "../assests/down.png";
import { logout } from "../Redux/actions/userActions";
const Navigation = ({ }) => {
  const [navToggler, setNavToggler] = useState(false);
  const [color, setColor] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [translate, setTranslate] = useState(false);
  const [nave, setNave] = useState(false);
  const [mode, setMode] = useState();
  const [dropdownOpen, setDropdownOpen] = useState(false); // new state variable
  const [dropdownOpen2, setDropdownOpen2] = useState(false); // new state variable
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.UserLogin.userInfo);
  const success = userInfo?.success;
  const user = userInfo?.user;
  const dispatch = useDispatch()
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleDropdown2 = () => setDropdownOpen2(!dropdownOpen2);
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });
  const dropdown1 = [
    {
      icon: i1,
      name: "حجوزاتي",
      path: "/booking",
    },
    {
      icon: i2,
      name: "العضوية",
      path: "/membership",
    },
    {
      icon: i3,
      name: "المساعدة على الطريق",
      path: "/roadside-assistance",
    },

  ];
  const dropdown2 = [
    {
      icon: i5,
      name: "من نحن",
      path: "/about-us",
    },
    {
      icon: i6,
      name: "الأسطول",
      path: "/fleet",
    },
    {
      icon: i7,
      name: "الخدمات",
      path: "/services",
    },
    {
      icon: i8,
      name: "المركز الإعلامي",
      path: "/faq",
    },
    {
      icon: i8,
      name: "الأسئلة المتكررة",
      path: "/booking-side",
    },
  ];
  console.log(mode);
  return (
    <>
      <header>
        <div className="outer">
          <div className="container">
            <div className="nav__grid">
              {success ? (
                <div className="user">
                  <div className="avatar" onClick={toggleDropdown}>
                    <img
                      src={user.avatar?.url ? user.avatar?.url : avatar}
                      alt=""
                    />
                  </div>
                  {dropdownOpen && (
                    <div className="dropdown">
                      <div className="dropdown-menu">
                        <div className="person-profile">
                          <Link to={"/profile"}>
                            <div className="arrow">
                              <img src={arrow1} alt="" />
                            </div>
                            <div className="detial">
                              <div className="name">
                                {" "}
                                {user?.firstName} {user?.lastName}
                              </div>
                              <p>عضوية ذهبية</p>
                            </div>
                            <div className="img">
                              <img
                                src={
                                  user.avatar?.url ? user.avatar?.url : avatar
                                }
                                alt=""
                              />{" "}
                            </div>
                          </Link>
                        </div>
                        {dropdown1.map((a) => {
                          return (
                            <>
                              <Link
                                to={a.path}
                                style={
                                  window.location.pathname === a.path
                                    ? { background: " #00000014" }
                                    : { background: "none" }
                                }
                              >
                                <div className="n">
                                  {a.name}
                                  <img src={a.icon} alt="" />
                                </div>
                              </Link>
                            </>
                          );
                        })}
                        <>
                          <Link
                            onClick={() => dispatch(logout())}
                          >
                            <div className="n" >
                              تسجيل الخروج
                              <img src={i4} alt="" />
                            </div>
                          </Link>
                        </>
                      </div>
                    </div>
                  )}
                  <div className="icon">
                    <img src={bell} alt="" />
                  </div>
                  <span>
                    {user?.firstName} {user?.lastName}
                  </span>
                </div>
              ) : (
                <div className="user__signout">
                  <div className="avatar">
                    <img src={avatarLogout} alt="" />
                  </div>
                  <button
                    className="signup"
                    onClick={() => {
                      setMode("register")
                      document.body.style.overflow = "hidden";
                    }
                    }
                  >
                    التسجيل
                  </button>
                  <button className="login" onClick={() => setMode("login")}>
                    تسجيل الدخول
                  </button>
                </div>
              )}
              <div className="translate">
                <div className="first">ر.س</div>
                <div className="second">English</div>
              </div>
              <button className="res-drop" onClick={toggleDropdown2}>
                الشركة
                <img src={down} alt="" />
                {dropdownOpen2 && (
                  <div className="dropdown">
                    <div className="dropdown-menu">
                      {dropdown2.map((a) => {
                        return (
                          <>
                            <Link
                              to={a.path}
                              style={
                                window.location.pathname === a.path
                                  ? { background: " #00000014" }
                                  : { background: "none" }
                              }
                            >
                              <div className="n">
                                {a.name}
                                <img src={a.icon} alt="" />
                              </div>
                            </Link>
                          </>
                        );
                      })}
                    </div>
                  </div>
                )}
              </button>
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
                        <li key={ind}>
                          <a
                            // onClick={() => window.scroll(0, 0)}
                            href={ite.path}
                          >
                            {ite.name}
                          </a>
                        </li>
                      );
                    })}
                    <li className="drop" onClick={toggleDropdown2}>
                      الشركة
                      <img src={down} alt="" />
                      {dropdownOpen2 && (
                        <div className="dropdown">
                          <div className="dropdown-menu">
                            {dropdown2.map((a) => {
                              return (
                                <>
                                  <Link
                                    to={a.path}
                                    style={
                                      window.location.pathname === a.path
                                        ? { background: " #00000014" }
                                        : { background: "none" }
                                    }
                                  >
                                    <div className="n">
                                      {a.name}
                                      <img src={a.icon} alt="" />
                                    </div>
                                  </Link>
                                </>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </li>
                    <li className="translate__option">
                      <div className="translate">
                        <div className="first">ر.س</div>
                        <div className="second">English</div>
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
                {nave ? <RxCross2 className="cross" /> : <HiOutlineBars3 />}
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
      </header>
      {mode === "register" && <Register setMode={setMode} />}
      {mode === "login" && <LoginIn setMode={setMode} />}
      <div
        onClick={() => window.scroll(0, 0)}
        className="auto_scroll"
        style={scroll ? { transform: "scale(1)" } : {}}
      >
        <ArrowUpward />
      </div>
    </>
  );
};

export default Navigation;
