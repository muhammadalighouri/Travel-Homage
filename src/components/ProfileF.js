import React from "react";
import "../scss/profilef.scss";

import icon from "../assests/Icons/1.png";
import img1 from "../assests/Icons/Tail icon q.png";
import img2 from "../assests/Icons/Lead icon.png";
import img3 from "../assests/Icons/Lead icon.svg";
import p from "../assests/Profile/Profile 2.png";
import update from "../assests/Profile/Vector.png";
import tick from "../assests/Profile/tick.png";
const ProfileF = () => {
  return (
    <>
      <div className="form">
        <form>
          <div id="names" className="same">
            <div className="input">
              <p>الاسم الاخير</p>
              <div className="under">
                <input type="text" placeholder="الاسم الاخير" />
              </div>
            </div>
            <div className="input">
              <p>الاسم الاول</p>
              <div className="under">
                <input
                  type="text"
                  placeholder="الاسم الاول"
                  //  {...formik.getFieldProps("middleName")}
                />
                {/* {formik.touched.middleName && formik.errors.middleName ? (
                      <div className="error">{formik.errors.middleName}</div>
                    ) : null} */}
              </div>
            </div>
            <div className="input">
              <p>الاسم العائلة</p>
              <div className="under">
                <input
                  type="text"
                  placeholder="الاسم العائلة"
                  // {...formik.getFieldProps("lastName")}
                />
                {/* {formik.touched.lastName && formik.errors.lastName ? (
                      <div className="error">{formik.errors.lastName}</div>
                    ) : null}<img src={img1} alt="" /> */}
              </div>
            </div>
          </div>
          <div id="phone" className="same">
            <p>الرقم القومي أو رقم جواز السفر</p>
            <div className="under">
              <input
                type="number"
                name=""
                placeholder="الرقم القومي أو رقم جواز السفر"
                //  {...formik.getFieldProps("phone")}
              />
              {/* {formik.touched.phone && formik.errors.phone ? (
                    <div className="error">{formik.errors.phone}</div>
                  ) : null} */}
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
              <p>Email Adress</p>
              <div className="under">
                <img src={img2} alt="" />
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Example@domain.com"
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
            <div id="password" className="same">
              <p>Password</p>
              <div className="under">
                <img src={img3} alt="" />{" "}
                <input
                  type="password"
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
            <div id="password" className="same">
              <p>Password</p>
              <div className="under">
                <img src={img3} alt="" />{" "}
                <input
                  type="password"
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
            <div id="password" className="same">
              <p>Password</p>
              <div className="under">
                <img src={img3} alt="" />{" "}
                <input
                  type="password"
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
