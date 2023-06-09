import React from "react";
import profile from "../assests/Profile/Profile1.png";
import img1 from "../assests/Profile/p.1.png";
import img2 from "../assests/Profile/p.2.png";
import { side } from "../assests/data";
import { Link } from "react-router-dom";
import p from "../assests/Profile/Profile 2.png";
import icon10 from "../assests/Profile/10.10.png";
import "../scss/side.scss";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/actions/userActions";
const ProfileSidebar = ({
  handleDataChange,
  setAvatar,
  setAvatarPreview,
  avatarPreview,
}) => {
  const user = useSelector((state) => state.UserLogin?.userInfo?.user) || {};
  const { firstName, lastName, avatar } = user || {};
  const dispatch = useDispatch();
  return (
    <>
      <section id="sidebar">
        <div className="container">
          <aside>
            <input
              type="file"
              name="avatar"
              id="upload"
              accept="image/*"
              onChange={handleDataChange}
              className="update"
              style={{ display: "none" }}
            />
            <label htmlFor="upload" className="detail">
              {
                avatarPreview ? <img src={avatarPreview} alt="" /> : <img src={avatar?.url ? avatar?.url : p} alt="" />
              }

              <span>
                {firstName}&nbsp;{lastName}
              </span>
            </label>
            <div className="image">
              <img src={img1} alt="" />
              <img src={img2} alt="" />
            </div>
            <ul className="flex">
              {side.map((a) => {
                return (
                  <Link
                    to={a.path}
                    style={
                      window.location.pathname === a.path
                        ? { background: "#00afaa " }
                        : { background: "none" }
                    }
                  >
                    <div
                      style={{
                        color:
                          window.location.pathname === a.path ? "white" : null,
                      }}
                    >
                      {a.name}
                    </div>{" "}
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
                  </Link>
                );
              })}
              <Link onClick={() => dispatch(logout())}>
                <div>خروج</div> <img src={icon10} alt="" />
              </Link>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
};

export default ProfileSidebar;
