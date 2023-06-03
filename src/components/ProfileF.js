import React, { useEffect, useState } from "react";
import "../scss/profilef.scss";

import icon from "../assests/Icons/1.png";
import img1 from "../assests//Fleet/PERSON.png";
import img2 from "../assests/Icons/Lead icon.png";
import img3 from "../assests/Icons/Lead icon.svg";
import p from "../assests/Profile/Profile 2.png";
import update from "../assests/Profile/Vector.png";
import tick from "../assests/Profile/tick.png";
import driver from "../assests/Profile/driver.png";
import email from "../assests/Profile/email.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUserDetails, updateProfile } from "../Redux/actions/userActions";
import { toast } from "react-toastify";
const ProfileF = () => {
  const { user } = useSelector((state) => state.UserLogin?.userInfo) || {};
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [drivingLicense, setDrivingLicense] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [phone, setPhone] = useState("");
  const [passport, setPassport] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState(p);
  useEffect(() => {
    if (!user) {
      navigate("/");
    } else {
      dispatch(getUserDetails());
    }
  }, [dispatch, navigate, user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with updated user data
    const updatedUserData = {
      firstName,
      lastName,
      drivingLicense,
      nationalId,
      phone,
      email,
      avatar,
    };

    dispatch(updateProfile(updatedUserData));
  };
  const handleDataChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };
  useEffect(() => {
    if (user) {
      setFirstName(user.firstName || "");
      setLastName(user.lastName || "");
      setDrivingLicense(user.drivingLicense || "");
      setNationalId(user.nationalId || "");
      setPhone(user.phone || "");
      setEmail(user.email || "");
      setAvatarPreview(user.avatar?.url || p);
    }
  }, [user]);
  return (
    <>
      <div className="form">
        {!user?.isVerified && (
          <p>
            Confirm your email we have send a email to your email address{" "}
            {user?.email}
          </p>
        )}
        <form>
          {/* names */}
          <div id="names" className="same">
            <div className="input">
              <p>الاسم الاول</p>
              <div className="under">
                <input
                  type="text"
                  placeholder="الاسم الاول"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />

                <img src={img1} alt="" />
              </div>
            </div>
            <div className="input">
              <p>الاسم العائلة</p>
              <div className="under">
                <input
                  type="text"
                  placeholder="الاسم العائلة"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <img src={img1} alt="" />
              </div>
            </div>
          </div>
          {/* phone number  */}
          <div className="wrapper">
            {!user.phoneVerified ? (
              <div
                className="btn"
                style={{ background: "#FFCD00", color: "#373A36" }}
              >
                تأكيد
              </div>
            ) : (
              <div className="btn">
                <img src={tick} alt="" />
                تم التأكيد
              </div>
            )}
            <div className="same">
              <p>رقم الهاتف</p>
              <div className="under">
                {/* <img src={img3} alt="" />{" "} */}
                <input
                  type="number"
                  placeholder="                               "
                  // {...formik.getFieldProps("password")}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {/* {formik.touched.password && formik.errors.password ? (
                    <div className="error">{formik.errors.password}</div>
                  ) : null} */}
              </div>
            </div>
          </div>
          {/* email */}
          <div className="wrapper">
            {!user.emailVerified ? (
              <div
                className="btn"
                style={{ background: "#FFCD00", color: "#373A36" }}
              >
                تأكيد
              </div>
            ) : (
              <div className="btn">
                <img src={tick} alt="" />
                تم التأكيد
              </div>
            )}{" "}
            <div className="same">
              <p>البريد الإلكتروني</p>
              <div className="under">
                <img src={email} alt="" />
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  value={email}
                  onChange={(e) => setPhone(e.target.email)}
                />
              </div>
            </div>
          </div>
          {/* license  */}
          <div className="wrapper">
            <div
              className="btn"
              style={{ background: "#FFCD00", color: "#373A36" }}
            >
              تأكيد
            </div>
            <div id="email" className="same">
              <p>رخصة القيادة</p>
              <div className="under">
                <img src={driver} alt="" />
                <input
                  type="number"
                  name=""
                  id=""
                  value={drivingLicense}
                  onChange={(e) => setDrivingLicense(e.target.value)}
                  placeholder="رخصة القيادة"
                  // {...formik.getFieldProps("email")}
                />
                {/* {formik.touched.email && formik.errors.email ? (
                    <div className="error">{formik.errors.email}</div>
                  ) : null}<img src={img1} alt="" /> */}
              </div>
            </div>
          </div>
          {/* national ID  */}
          <div className="wrapper">
            <div
              className="btn"
              style={{ background: "#FFCD00", color: "#373A36" }}
            >
              تأكيد
            </div>
            <div className="same">
              <p>الرقم القومي أو رقم جواز السفر</p>
              <div className="under">
                {/* <img src={driver} alt="" />{" "} */}
                <input
                  type="number"
                  placeholder="الرقم القومي أو رقم جواز السفر"
                  value={nationalId}
                  onChange={(e) => setNationalId(e.target.value)}
                  // {...formik.getFieldProps("password")}
                />
                {/* {formik.touched.password && formik.errors.password ? (
                    <div className="error">{formik.errors.password}</div>
                  ) : null} */}
              </div>
            </div>
          </div>

          <div className="profile-img">
            <div className="img">
              <img src={avatarPreview} alt="" />
            </div>
            <div className="btns">
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={handleDataChange}
                className="update"
              />
              <Link onClick={handleSubmit} className="confirm">
                تأكيد التغيير
                <img src={tick} alt="" />
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfileF;
