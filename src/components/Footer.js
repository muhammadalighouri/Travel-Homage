import React, { useState } from "react";
import "../scss/footer__.scss";
import { Partners_1, Partners_2 } from "../assests/data";
import img1 from "../assests/footer-img/Badge.png";
import img2 from "../assests/footer-img/Badge (1).png";
import icon from "../assests/footer-img/Group.png";
import chatImg from "../assests/footer-img/Chatbot.png";

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
      link1: "/fleet",
      link2: "/services",
      link3: "/media",
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
              <img src={icon} alt="" />
            </div>
          </div>

          {data.map((i) => {
            return (
              <>
                <div className="box">
                  <h2>{i.name}</h2>
                  <ul>
                    <li
                      onClick={() => {
                        navigate("/privacy-policy");
                        window.scroll(0, 0);
                      }}
                    >
                      {i.h2}
                    </li>
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
            <span>شركة ترفل المحدودة © 2023</span>
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
