import React from "react";
import "../scss/footer__.scss";
import { Partners_1, Partners_2 } from "../assests/data";
import img1 from "../assests/Icons/logo.1.png";
import icon from "../assests/icon.png";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaLinkedin,
} from "react-icons/fa";
import { Instagram } from "@material-ui/icons";
import { Link } from "react-router-dom";
const Footer = () => {
  const data = [
    {
      name: "About Us",
      h1: "Company",
      h2: "Diversity",
      h3: "Leadership",
      h4: "Jobs",
      h5: "Press",
      h6: "Wavelength",
    },
    {
      name: "Workflow Solutions",
      h1: "Project Management",
      h2: "Agile",
      h3: "Task Management",
      h4: "Reporting",
      h5: "Work Tracking",
      h6: "See All Uses",
    },
    {
      name: "Team Solutions",
      h1: "Engineering",
      h2: "Designers",
      h3: "Sales",
      h4: "Developers",
      h5: "Developers",
      h6: "See All team",
    },
  ];
  return (
    <footer>
      <div className="container">
        <div className="footer-top" data-aos="fade-up">
          <div className="footer-logo">
            <div className="logo" data-aos={"fade-up"}>
              <img src={img1} alt="" />
            </div>
            <div className="btn">
              <Link to={"/contact"}>Contact US</Link>
            </div>
            <div className="contact">
              <p data-aos={"fade-up"}>
                <span>Company:</span> <a href="#">MK GREEN ENERGY </a>
              </p>
              <p data-aos={"fade-up"}>
                <span>N•Siret</span> <a href="#"> 90038314200016</a>
              </p>
              <p data-aos={"fade-up"}>
                <span></span>{" "}
                <a href="#"> AFNOR (organisation internationale)</a>
              </p>
              <p data-aos={"fade-up"}>
                <span></span> <a href="#"> Advenir (comité français )</a>
              </p>
              <p data-aos={"fade-up"}>
                <span>Tel:</span> <a href="#">33(0)9 88 31 29 23</a>
              </p>

              <p data-aos={"fade-up"}>
                <span>Address:</span>{" "}
                <a href="#">197 avenue gambetta Bagnolet , 93170</a>
              </p>
              <p data-aos={"fade-up"}>
                <span>Email:</span>{" "}
                <a href="mailto:Contact@mkgreenenergy.com">
                  Contact@mkgreenenergy.com
                </a>
              </p>
            </div>
            <div className="email">
              <input type="email" placeholder="Email" name="" id="" />
              <button>Submit</button>
            </div>
          </div>

        </div>
        <div className="bottom__footer">
          <p>©MK Green Energy 2023 All rights reserved.</p>

          <ul className="icons">
            <a href="">
              <FaFacebookF />{" "}
            </a>

            <a href="https://twitter.com/@mkgreenenergy">
              <FaTwitter />
            </a>
          </ul>
          <ul className="end">
            <Link to={'/'}>Home</Link>|<Link to={'/Contact'}>Contact Us</Link>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
