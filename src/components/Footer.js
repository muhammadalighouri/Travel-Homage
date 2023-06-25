import React, { useState } from "react";
import "../scss/footer__.scss";
import { Partners_1, Partners_2 } from "../assests/data";
import img1 from "../assests/footer-img/Badge.png";
import img2 from "../assests/footer-img/Badge (1).png";
import icon from "../assests/footer-img/Group.png";
import chatImg from "../assests/footer-img/Chatbot.png";
import arrow from "../assests/footer-img/Vector (6).png";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaLinkedin,
} from "react-icons/fa";
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
    },
    {
      name: "الشركة",
      h1: "  من نحن",
      h2: "              التوظيف",
      h3: "              الأسطول     ",
      h4: "              الخدمات     ",
      h5: "             الفروع      ",
      h6: "             المركز الإعلامي     ",
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
  const navigate = useNavigate()
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
                    <li>{i.h1}</li>
                    <li onClick={() => {
                      navigate('/privacy-policy')
                      window.scroll(0, 0)
                    }}>{i.h2}</li>
                    <li>{i.h3}</li>
                    <li>{i.h4}</li>
                    <li>{i.h5}</li>
                    <li>{i.h6}</li>
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
