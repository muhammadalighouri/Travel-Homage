import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../Redux/actions/userActions";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../scss/register.scss";
import { useNavigate } from "react-router-dom";
import logo from "../assests/Logo.png";
import icon from "../assests/Group 17.png";
import img1 from "../assests/Icons/Tail icon q.png";
import img2 from "../assests/Icons/Lead icon.png";
import img3 from "../assests/Icons/Lead icon.svg";
import img4 from "../assests/Icons/Vector (6).png";
import img5 from "../assests/Icons/Tail icon.svg";
import "../scss/logIn.scss";
const LoginIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false); // Track the submit state
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.UserLogin);
  const { error, userInfo, loading } = userRegister;
  const navigate = useNavigate('')
  const formik = useFormik({
    initialValues: {

      email: "",
      password: "",

    },
    validationSchema: Yup.object({

      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be 8 characters or more")
        .required("Required"),

    }),
    onSubmit: async (values) => {
      try {
        await dispatch(
          login(

            values.email,
            values.password,

          )
        );
      } catch (error) {
        toast.error(error || error.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
      finally {
        setIsSubmitting(false); // Stop submitting
      }
    },
  });
  useEffect(() => {
    if (userInfo) {
      if (userInfo.success) {
        toast.success("Registration Successful", {
          position: toast.POSITION.TOP_RIGHT,
        });
        navigate('/');
      } else {
        toast.error(userInfo.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
  }, [userInfo, navigate]);
  return (
    <>
      <section id="login">
        <div className="container">
          <div className="top">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="icon">
              <img src={icon} alt="" />
            </div>
          </div>
          <div className="form">
            <div className="heading">
              <h1>Sign In</h1>
              <p>Welcome to Travel car rental solution.</p>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div id="email" className="same">
                <p>Email Adress</p>
                <div className="under">
                  <img src={img2} alt="" />
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Example@domain.com"
                    {...formik.getFieldProps("email")} />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="error">{formik.errors.email}</div>
                  ) : null}<img src={img1} alt="" />
                  <img src={img1} alt="" />
                </div>
              </div>
              <div id="phone" className="same">
                <p>Password</p>
                <div className="under">
                  {" "}
                  <input type="password" name="" id=""      {...formik.getFieldProps("password")}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="error">{formik.errors.password}</div>
                  ) : null}
                </div>
              </div>


              <button
                type="submit"
                className="btn "
                disabled={isSubmitting || loading} // Disable the button if submitting or loading
              >
                {isSubmitting || loading ? "Submitting..." : "Login"}
              </button>
              <p className="para">
                Already have an account
                <a href="#">Sign in</a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginIn;
