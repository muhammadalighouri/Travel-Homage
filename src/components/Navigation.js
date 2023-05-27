import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { nav } from "../assests/data";
import "../scss/navigation.scss";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineBars3 } from "react-icons/hi2";
import logo from "../assests/Logo.png";
import avatar from "../assests/Avatar.png";
import avatarLogout from "../assests/Avatar-logout.png";
import bell from "../assests/bell.png";
import { useSelector } from "react-redux";
import Register from "./Register";
import LoginIn from "./LoginIn";
const Navigation = ({ }) => {
  const [navToggler, setNavToggler] = useState(false);
  const [color, setColor] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [translate, setTranslate] = useState(false);
  const [nave, setNave] = useState(false);
  const [mode, setMode] = useState();
  const [dropdownOpen, setDropdownOpen] = useState(false); // new state variable
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.UserLogin.userInfo);
  const success = userInfo?.success;
  const user = userInfo?.user;

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  return (
    <>
      <header>
        <div className="outer">
          <div className="container">
            <div className="nav__grid">
              {success ? (
                <div className="user">
                  <div className="avatar" onClick={toggleDropdown}>
                    <img src={avatar} alt="" />
                  </div>
                  {dropdownOpen && (
                    <div className="dropdown-menu">
                      <Link to="/profile" className="dropdown-item">Profile</Link>
                      <div className="dropdown-item" >Logout</div>
                    </div>
                  )}
                  <div className="icon">
                    <img src={bell} alt="" />
                  </div>
                  <span>{user?.firstName} {user?.lastName}</span>
                </div>
              ) : (
                <div className="user__signout">
                  <div className="avatar">
                    <img src={avatarLogout} alt="" />
                  </div>
                  <button className="signup" onClick={() => setMode('register')}>التسجيل</button>
                  <button className="login" onClick={() => setMode('login')}>تسجيل الدخول</button>
                </div>
              )}
              <div className="translate">
                <div className="first">ر.س</div>
                <div className="second">English</div>
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
                        <li key={ind}>
                          <Link
                            onClick={() => window.scroll(0, 0)}
                            to={ite.path}
                          >
                            {ite.name}
                          </Link>
                        </li>
                      );
                    })}
                    <li>
                      <a href=""> الشركة</a>
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
      </header>
      {
        mode === "register" && <Register setMode={setMode} />
      }
      {
        mode === "login" && <LoginIn setMode={setMode} />
      }
    </>
  );
};

export default Navigation;
