import React, { useState, useEffect } from "react";
import icon from "../assests/Icons/1.png";
import img1 from "../assests/Icons/Tail icon q.png";
import img2 from "../assests/Icons/Lead icon.png";
import img3 from "../assests/Icons/Lead icon.svg";
import p from "../assests/Profile/Profile 2.png";
import update from "../assests/Profile/Vector.png";
import tick from "../assests/Profile/tick.png";
import key from "../assests/Profile/key.png";
import "../scss/pasword.scss";
import eye from "../assests/Profile/eye.png";
import axios from "../api/axios"
import { toast } from "react-toastify"
import { useSelector } from "react-redux";
const PasswordF = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { userInfo } = useSelector(state => state.UserLogin)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error("New password and confirm password must match")
    } else {
      try {
        await updatePassword(currentPassword, newPassword);
        toast.success("Password updated successfully")
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
        setError("");
      } catch (err) {
        // handle any errors here, for instance set error message
        toast.error(err.response.data.message);
      }
    }
  };
  async function updatePassword(currentPassword, newPassword) {
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };
    const response = await axios.put('/api/v1/user/password/update', {
      oldPassword: currentPassword,
      newPassword: newPassword,
      user: userInfo?.user?._id
    }, config);
    return response.data;
  }
  return (
    <>
      <div id="passwordF">
        <div className="form">
          <form>
            <div className="wrapper">
              <div >
              </div>
              <div id="password" className="same">
                <p>كلمة المرور الحالية</p>
                <div className="under">
                  <img src={eye} alt="" />{" "}
                  <input
                    type="password"
                    name="currentPassword"
                    placeholder="كلمة المرور"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
                  <img src={key} alt="" />
                </div>
              </div>
            </div>
            <div className="wrapper">
              <div className="btn" style={{ background: "#FFCD00" }}>
                <img src={tick} alt="" />
              </div>
              <div id="password" name="newPassword" className="same">
                <p>كلمة المرور الجديدة</p>
                <div className="under">
                  <img src={eye} alt="" />{" "}
                  <input
                    type="password"
                    name="newPassword"
                    placeholder="كلمة المرور الجديدة"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
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
                    name="confirmPassword"
                    placeholder="تأكيد كلمة المرور الجديدة"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />

                  <img src={key} alt="" />
                </div>
                <span>
                  يجب أن يتراوح طول كلمة المرور الخاصة بك بين 6-20 حرفًا
                </span>
              </div>
            </div>
            <div className="wrap-btn">
              <button type="submit" className="submit" onClick={handleSubmit}>
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
