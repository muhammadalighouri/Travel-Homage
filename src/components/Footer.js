import React, { useState } from "react";
import "../scss/footer__.scss";
import { Partners_1, Partners_2 } from "../assests/data";
import img1 from "../assests/footer-img/Badge.png";
import img2 from "../assests/footer-img/Badge (1).png";
import icon from "../assests/footer-img/Group.png";
import chatImg from "../assests/footer-img/Chatbot.png";
import scocialIcon1 from "../assests/footer-icons/download 1.svg";
import scocialIcon2 from "../assests/footer-icons/download 2.svg";
import scocialIcon3 from "../assests/footer-icons/download 3.svg";
import scocialIcon4 from "../assests/footer-icons/download 4.svg";
import { Group, Instagram } from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import ChatBox from "./ChatBox";
const Footer = () => {
  const [scroll, setScroll] = useState(false);
  const [chat, setChat] = useState(false);
  const data = [
    {
      name: "قانوني",
      h1: "  شروط الاستخدام",
      h2: "              سياسة الخصوصية",
      h3: "              إشعارات قانونية      ",
      h4: "              سياسة الكوكيز      ",
      h5: "              إدارة الكوكيز      ",
      link1: "",
      link2: "",
      link3: "",
    },
    {
      name: "الشركة",
      h1: "  من نحن",
      h2: "              التوظيف",
      h3: "              الأسطول     ",
      h4: "              الخدمات     ",
      h5: "             الفروع      ",
      h6: "             المركز الإعلامي     ",
      h7: "                        من نحن          ",
      link1: "/fleet",
      link2: "/services",
      link3: "/media",
      link4: "/about-us",
    },
  ];
  const icons = [
    {
      img: scocialIcon1,
      link: "https://twitter.com/i/flow/login?redirect_after_login=%2Ftravelcrs",
    },
    {
      img: scocialIcon2,
      link: "https://web.facebook.com/travelcrs?_rdc=1&_rdr",
    },
    {
      img: scocialIcon3,
      link: "https://www.linkedin.com/company/travelcrs",
    },
    {
      img: scocialIcon4,
      link: "https://www.instagram.com/travel_crs/",
    },
  ];
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      setScroll(true);
    } else {
      setScroll(false);
      setChat(false);
    }
  });
  const navigate = useNavigate();
  return (
    <footer>
      <div className="container">
        <div className="top">
          <div className="box">
            <h2>تطبيق ترفل</h2>
            <p>
              جرب تطبيقاتنا الإلكترونية وتلبية جميع احتياجاتك للسفر بكل سهولة
            </p>
            <div className="icons">
              <img src={img1} alt="" />
              <img className="second" src={img2} alt="" />
            </div>
            <div className="media-icon">
              <div className="social-icons">
                {icons.map((e) => {
                  return (
                    <a href={e.link}>
                      <img src={e.img} alt="" />
                    </a>
                  );
                })}
                <div className="text">Travalcrs</div>
              </div>
            </div>
          </div>

          {data.map((i) => {
            return (
              <>
                <div className="box">
                  <h2>{i.name}</h2>
                  <ul>
                    <Link
                      onClick={() => {
                        navigate("/privacy-policy");
                        window.scroll(0, 0);
                      }}
                      style={{ color: "black" }}
                    >
                      {i.h2}
                    </Link>
                    <Link
                      to={i.link1}
                      onClick={() => {
                        window.scroll(0, 0);
                      }}
                    >
                      <li>{i.h3}</li>
                    </Link>
                    <Link
                      to={i.link2}
                      onClick={() => {
                        window.scroll(0, 0);
                      }}
                    >
                      <li>{i.h4}</li>
                    </Link>
                    <Link
                      to={""}
                      onClick={() => {
                        window.scroll(0, 0);
                      }}
                    >
                      <li>{i.h5}</li>
                    </Link>
                    <Link
                      to={i.link3}
                      onClick={() => {
                        window.scroll(0, 0);
                      }}
                    >
                      <li>{i.h6}</li>
                    </Link>
                    <Link
                      to={i.link4}
                      onClick={() => {
                        window.scroll(0, 0);
                      }}
                    >
                      <li>{i.h7}</li>
                    </Link>
                  </ul>
                </div>
              </>
            );
          })}
        </div>
        <div className="bottom__footer">
          <div className="center">
            <p>ترفل حلول تأجير السيارات</p>
            <span>مزود خدمة التنقل السعودي لحلول تأجير السيارات</span>
            <span>Travel LTD شركة ترفل المحدودة © 2023 </span>
          </div>
          <div className="chatbot">
            {chat && <ChatBox />}
            <img
              src={chatImg}
              style={scroll ? { transform: "scale(1)" } : {}}
              onClick={() => setChat(!chat)}
              alt=""
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
