import React from "react";
import "../../scss/profile.scss";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
// import Slide  from "../../components/Sidebar";
import Sidebar from "../../components/Sidebar";
import first from "../../assests/Photo.png";


import icon from "../../assests/Icons/1.png";
import img1 from "../../assests/Icons/Tail icon q.png";
import img2 from "../../assests/Icons/Lead icon.png";
import img3 from "../../assests/Icons/Lead icon.svg";
import img4 from "../../assests/Icons/Vector (6).png";
import img5 from "../../assests/Icons/Tail icon.svg";
const Customer = () => {
  return (
    <>
    <Navigation />
    <Banner text={"الدعم الفني"}  img={first}/>
    <section id="user-profile">
      <div className="user-container">
        <div className="form">

          <form 
          // onSubmit={formik.handleSubmit}
          >
            <div id="names" className="same">
              <div className="input">
                <p>الاسم الاخير</p>
                <div className="under">
                  <input
                    type="text"
                    placeholder="الاسم الاخير"
                    // {...formik.getFieldProps("firstName")}
                  />
                  {/* <img src={img1} alt="" /> */}
                  {/* {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="error">{formik.errors.firstName}</div>
                  ) : null} */}
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
            <div id="password" className="same">
              <p>Confirm Password</p>
              <div className="under">
                <img src={img3} alt="" />{" "}
                <input
                  type="password"
                  name=""
                  //  {...formik.getFieldProps("confirmPassword")}
                />
                {/* {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                  <div className="error">{formik.errors.confirmPassword}</div>
                ) : null} */}
              </div>
            </div>
            <button
              type="submit"
              className="btn "
              // disabled={isSubmitting || loading} // Disable the button if submitting or loading
            >
              {/* {isSubmitting || loading ? "Submitting..." : "Register"} */}
            </button>
            <p className="para">
              Already have an account
              <a href="#">Sign in</a>
            </p>
          </form>
        </div>
        <Sidebar />
      </div>
    </section>
    <Footer />
  </>
  )
}

export default Customer
