import React from "react";
import profile from "../assests/Profile/Profile1.png";
import img1 from "../assests/Profile/p.1.png";
import img2 from "../assests/Profile/p.2.png";
import { side } from "../assests/data";
import { Link } from "react-router-dom";
import p from "../assests/Profile/Profile 2.png";

import "../scss/side.scss";
import { useSelector } from "react-redux";
const Sidebar = () => {
  const user = useSelector((state) => state.UserLogin.userInfo.user) || {};
  const { firstName, lastName } = user || {}
  return (
    <>
      <section id="sidebar">
        <div className="container">
          <aside>
            <div className="detail">
              <img src={p} alt="" />

              <span>{firstName}&nbsp;{lastName}</span>
            </div>
            <div className="image">
              <img src={img1} alt="" />
              <img src={img2} alt="" />
            </div>
            <ul className="flex">
              {side.map((a) => {
                return (
                  <li
                    style={
                      window.location.pathname === a.path
                        ? { background: "#00afaa " }
                        : { background: "none" }
                    }
                  >
                    <Link
                      to={a.path}
                      style={{
                        color:
                          window.location.pathname === a.path ? "white" : null,
                      }}
                    >
                      {a.name}
                    </Link>{" "}
                    <img
                      src={a.icon}
                      alt=""
                      style={{
                        filter:
                          window.location.pathname === a.path
                            ? "invert(1)"
                            : null,
                      }}
                    />
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
