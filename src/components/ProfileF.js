import React, { useEffect } from "react";
import "../scss/profilef.scss";

import icon from "../assests/Icons/1.png";
import img1 from "../assests//Fleet/PERSON.png";
import img2 from "../assests/Icons/Lead icon.png";
import img3 from "../assests/Icons/Lead icon.svg";
import p from "../assests/Profile/Profile 2.png";
import update from "../assests/Profile/Vector.png";
import tick from "../assests/Profile/tick.png";
import driver from "../assests/Profile/driver.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const ProfileF = () => {
  const { user } = useSelector((state) => state.UserLogin.userInfo) || {};
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

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
          <div id="names" className="same">
            <div className="input">
              <p>الاسم الاول</p>
              <div className="under">
                <input type="text" placeholder="الاسم الاخير" />{" "}
                <img src={img1} alt="" />
                {/* {formik.touched.middleName && formik.errors.middleName ? (
                      <div className="error">{formik.errors.middleName}</div>
                    ) : null} */}
              </div>
            </div>
            <div className="input">
              <p>الاسم العائلة</p>
              <div className="under">
                <input type="text" placeholder="الاسم العائلة" />{" "}
                <img src={img1} alt="" />
                {/* {formik.touched.lastName && formik.errors.lastName ? (
                      <div className="error">{formik.errors.lastName}</div>
                    ) : null}<img src={img1} alt="" /> */}
              </div>
            </div>
            <div className="input">
              <p>الاسم الاخير</p>
              <div className="under">
                <input type="text" placeholder="الاسم الاخير" />{" "}
                <img src={img1} alt="" />
              </div>
            </div>
          </div>

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
                  placeholder="رخصة القيادة"
                // {...formik.getFieldProps("email")}
                />
                {/* {formik.touched.email && formik.errors.email ? (
                    <div className="error">{formik.errors.email}</div>
                  ) : null}<img src={img1} alt="" /> */}
              </div>
            </div>
          </div>

          <div className="wrapper">
            <div className="btn">
              <img src={tick} alt="" />
              تم التأكيد

            </div>
            <div className="same">
              <p>الرقم القومي أو رقم جواز السفر</p>
              <div className="under">
                {/* <img src={driver} alt="" />{" "} */}
                <input
                  type="number"
                  placeholder="الرقم القومي أو رقم جواز السفر"
                // {...formik.getFieldProps("password")}
                />
                {/* {formik.touched.password && formik.errors.password ? (
                    <div className="error">{formik.errors.password}</div>
                  ) : null} */}
              </div>
            </div>
          </div>

          <div className="wrapper">
            <div className="btn">
              <img src={tick} alt="" />
              تم التأكيد
            </div>
            <div className="same">
              <p>رقم الهاتف</p>
              <div className="under">
                <img src={img3} alt="" />{" "}
                <input
                  type="number"
                  placeholder="             5555555                  "
                // {...formik.getFieldProps("password")}
                />
                {/* {formik.touched.password && formik.errors.password ? (
                    <div className="error">{formik.errors.password}</div>
                  ) : null} */}
              </div>
            </div>
          </div>

          <div className="wrapper">
            <div className="btn">
              <img src={tick} alt="" />
              البريد الإلكتروني            </div>
            <div className="same">
              <p>البريد الإلكتروني</p>
              <div className="under">
                <img src={img3} alt="" />{" "}
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
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
              <img src={p} alt="" />
            </div>
            <div className="btns">
              <a href="#" className="update">
                تحميل صورة جديدة
                <img src={update} alt="" />
              </a>
              <a href="#" className="confirm">
                تأكيد التغيير
                <img src={tick} alt="" />
              </a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfileF;
