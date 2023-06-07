import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../Redux/actions/userActions";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../scss/register.scss";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assests/Logo.png";
import icon from "../assests/Group 17.png";
import img1 from "../assests/Icons/Tail icon q.png";
import img2 from "../assests/Icons/Lead icon.png";
import img3 from "../assests/Icons/Lead icon.svg";
import img4 from "../assests/Icons/Vector (6).png";
import img5 from "../assests/Icons/Tail icon.svg";
import { Close } from "@mui/icons-material";
const Register = ({ setMode }) => {
  const [isSubmitting, setIsSubmitting] = useState(false); // Track the submit state
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.UserRegister);
  const { error, userInfo, loading } = userRegister;
  const navigate = useNavigate("");
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      phone: Yup.number().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be 8 characters or more")
        .required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        await dispatch(
          register(
            values.firstName,
            values.lastName,
            values.email,
            values.password,
            values.phone
          )
        );
      } catch (error) {
        toast.error(error || error.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } finally {
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
        navigate("/profile");
        setMode("");
      } else {
        toast.error(userInfo.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
  }, [userInfo, navigate]);
  return (
    <>
      <section id="register">
        <div className="form__">
          <div
            className="cross"
            onClick={() => {
              setMode("");
              document.body.style.overflow = "unset";
            }}
          >
            <Close />
          </div>
          <div className="heading">
            <h1>Create An Account.</h1>
            <p>Welcome to Travel car rental solution.</p>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div id="names" className="same">
              <div className="input">
                <p>First name</p>
                <div className="under">
                  <input
                    type="text"
                    placeholder="First name"
                    {...formik.getFieldProps("firstName")}
                  />{" "}
                  <img src={img1} alt="" />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="error">{formik.errors.firstName}</div>
                  ) : null}
                </div>
              </div>
              {/* <div className="input">
                <p>Middle name</p>
                <div className="under">
                  <input type="text" placeholder="Middle name" {...formik.getFieldProps("middleName")} />
                  {formik.touched.middleName && formik.errors.middleName ? (
                    <div className="error">{formik.errors.middleName}</div>
                  ) : null}
                </div>
              </div> */}
              <div className="input">
                <p>Last name</p>
                <div className="under">
                  <input
                    type="text"
                    placeholder="Last name"
                    {...formik.getFieldProps("lastName")}
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <div className="error">{formik.errors.lastName}</div>
                  ) : null}
                  <img src={img1} alt="" />
                </div>
              </div>
            </div>
            <div id="phone" className="same">
              <p>Phone Number</p>
              <div className="under">
                {" "}
                <input
                  type="number"
                  name=""
                  {...formik.getFieldProps("phone")}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="error">{formik.errors.phone}</div>
                ) : null}
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
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error">{formik.errors.email}</div>
                ) : null}
                <img src={img1} alt="" />
              </div>
            </div>
            <div id="password" className="same">
              <p>Password</p>
              <div className="under">
                <img src={img3} alt="" />{" "}
                <input type="password" {...formik.getFieldProps("password")} />
                {formik.touched.password && formik.errors.password ? (
                  <div className="error">{formik.errors.password}</div>
                ) : null}
              </div>
            </div>
            <div id="password" className="same">
              <p>Confirm Password</p>
              <div className="under">
                <img src={img3} alt="" />{" "}
                <input
                  type="password"
                  name=""
                  {...formik.getFieldProps("confirmPassword")}
                />
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <div className="error">{formik.errors.confirmPassword}</div>
                ) : null}
              </div>
            </div>
            <button
              type="submit"
              className="btn "
              disabled={isSubmitting || loading} // Disable the button if submitting or loading
            >
              {isSubmitting || loading ? "Submitting..." : "Register"}
            </button>
            <p className="para">
              Already have an account
              <Link to="" onClick={() => setMode("login")}>
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
