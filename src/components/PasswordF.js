import React from "react";
import icon from "../assests/Icons/1.png";
import img1 from "../assests/Icons/Tail icon q.png";
import img2 from "../assests/Icons/Lead icon.png";
import img3 from "../assests/Icons/Lead icon.svg";
import p from "../assests/Profile/Profile 2.png";
import update from "../assests/Profile/Vector.png";
import tick from "../assests/Profile/tick.png";
import key from '../assests/Profile/key.png'
import '../scss/pasword.scss'
import eye from '../assests/Profile/eye.png'
const PasswordF = () => {
  return (
    <>
  <div id="passwordF">
  <div className="form">
        <form>
          <div className="wrapper">
            <div className="btn">
              <img src={tick} alt="" />
            </div>
            <div id="password" className="same">
              <p>كلمة المرور الحالية</p>
              <div className="under">
                <img src={eye} alt="" />{" "}
                <input type="password" placeholder="كلمة المرور" />
                <img src={key} alt="" />
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="btn"  style={{background:'#FFCD00'}}>
              <img src={tick} alt="" />
            </div>
            <div id="password" className="same">
              <p>كلمة المرور الجديدة</p>
              <div className="under">
              <img src={eye} alt="" />{" "}

                <input
                  type="password"
                  name=""
                  placeholder="كلمة المرور الجديدة"
                />
                <img src={key} alt="" />

              </div>
              <span>
                يجب أن يتراوح طول كلمة المرور الخاصة بك بين 6-20 حرفًا
              </span>
            </div>
          </div>
          <div className="wrapper">
            <div className="btn">
              <img src={tick} alt="" />
            </div>
            <div id="password" className="same">
              <p>تأكيد كلمة المرور الجديدة</p>
              <div className="under">
              <img src={eye} alt="" />{" "}

                <input
                  type="password"
                  name=""
                  placeholder="تأكيد كلمة المرور الجديدة"
                />
                <img src={key} alt="" />

              </div>
              <span>
                يجب أن يتراوح طول كلمة المرور الخاصة بك بين 6-20 حرفًا
              </span>
            </div>
          </div>
         <div className="wrap-btn">
         <button type="submit" className="submit" >
            تأكيد تغيير كلمة المرور
          </button>
         </div>
          {/* <p className="para">
            Already have an account
            <a href="#">Sign in</a>
          </p> */}
        </form>
      </div>
  </div>
    </>
  );
};
export default PasswordF;
