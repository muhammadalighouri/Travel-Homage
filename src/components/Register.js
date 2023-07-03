import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../Redux/actions/userActions";
import { allCountries } from 'country-telephone-data';
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
import axios from "axios";
import img5 from "../assests/Icons/Tail icon.svg";
import { Close } from "@mui/icons-material";
const Register = ({ setMode }) => {
  const [isSubmitting, setIsSubmitting] = useState(false); // Track the submit state
  const dispatch = useDispatch();
  const [countries, setCountries] = useState([]);
  const userRegister = useSelector((state) => state.UserRegister);
  const { error, userInfo, loading } = userRegister;
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      }
    };

    fetchCountries();
  }, []);
  const navigate = useNavigate("");
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      saudiId: "", // Add initial value for saudiId
      passportNumber: "", // Add initial value for passportNumber
      nationality: "", // Add initial value for nationality
      userType: "citizen",
      birthday: "",
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
      if (!values.birthday) {
        toast.error("add your date of birth");
        setIsSubmitting(false);
        return;
      }
      if (values.userType === "citizen" && !values.saudiId) {
        setIsSubmitting(false);
        return;
        toast.error("add your ID");
      }
      if (values.userType === "resident" && !values.saudiId) {
        toast.error("add your ID");
        setIsSubmitting(false);
        return;
      }
      if (
        values.userType === "visitor" &&
        !values.passportNumber &&
        !values.nationality
      ) {
        toast.error("add your information");
        setIsSubmitting(false);
        return;
      }
      try {
        dispatch(
          register(
            values.firstName,
            values.lastName,
            values.email,
            values.password,
            values.phone,
            values.userType,
            values.nationality,
            values.saudiId,
            values.birthday,
            values.passportNumber
          )
        );
      } catch (error) {
        toast.error(userInfo, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } finally {
        setIsSubmitting(false); // Stop submitting
      }
    },
  });
  const handleUserTypeChange = (event) => {
    const userType = event.target.value;
    formik.setFieldValue("userType", userType);
  };

  const renderAdditionalFields = () => {
    const userType = formik.values.userType;

    if (userType === "resident") {
      return (
        <>
          <div className="input">
            <p>Iqama ID Number</p>
            <div className="under">
              <input
                type="text"
                placeholder="Iqama ID Number"
                {...formik.getFieldProps("saudiId")}
              />
              {formik.touched.saudiId && formik.errors.saudiId && (
                <div className="error">{formik.errors.saudiId}</div>
              )}
            </div>
          </div>
        </>
      );
    }
    if (userType === "citizen" || userType === "resident") {
      return (
        <>
          <div className="input">
            <p>Saudi ID Number</p>
            <div className="under">
              <input
                type="text"
                placeholder="Saudi ID Number"
                {...formik.getFieldProps("saudiId")}
              />
              {formik.touched.saudiId && formik.errors.saudiId && (
                <div className="error">{formik.errors.saudiId}</div>
              )}
            </div>
          </div>
        </>
      );
    }

    if (userType === "visitor") {
      return (
        <>
          <div className="grid__two">
            <div className="input">
              <p>Passport Number</p>
              <div className="under">
                <input
                  type="number"
                  placeholder="Passport Number"
                  {...formik.getFieldProps("passportNumber")}
                />
                {formik.touched.passportNumber &&
                  formik.errors.passportNumber && (
                    <div className="error">{formik.errors.passportNumber}</div>
                  )}
              </div>
            </div>
            <div className="input">
              <p>Choose Your Nationality</p>
              <div className="under">
                <select
                  name="nationality"
                  {...formik.getFieldProps("nationality")}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Nationality
                  </option>
                  {countries.map((country) => (
                    <option key={country.cca2} value={country.name.common}>
                      {country.name.common}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </>
      );
    }

    return null;
  };
  useEffect(() => {
    if (userInfo) {
      if (userInfo.success) {
        toast.success("Registration Successful", {
          position: toast.POSITION.TOP_RIGHT,
        });
        navigate("/verify-email");
        setMode("");
      } else {
        toast.error(userInfo, {
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
                <select id='countryCode' >
                  <option value="" disabled selected hidden>+000</option>
                  {allCountries.map((country, index) =>
                    <option key={index} value={country.dialCode}>{`${country.name} (+${country.dialCode})`}</option>
                  )}
                </select>
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
            <div className="user-type">
              <p>User Type</p>
              <div className="under">
                <label>
                  <input
                    type="radio"
                    name="userType"
                    value="citizen"
                    onChange={handleUserTypeChange}
                    checked={formik.values.userType === "citizen"}
                  />
                  Citizen
                </label>
                <label>
                  <input
                    type="radio"
                    name="userType"
                    value="resident"
                    onChange={handleUserTypeChange}
                    checked={formik.values.userType === "resident"}
                  />
                  Resident
                </label>
                <label>
                  <input
                    type="radio"
                    name="userType"
                    value="visitor"
                    onChange={handleUserTypeChange}
                    checked={formik.values.userType === "visitor"}
                  />
                  Visitor
                </label>
              </div>
            </div>
            <div className="same">{renderAdditionalFields()}</div>
            <div className="same">
              <p>Birthday</p>
              <div className="under">
                <input type="date" {...formik.getFieldProps("birthday")} />
                {formik.touched.birthday && formik.errors.birthday && (
                  <div className="error">{formik.errors.birthday}</div>
                )}
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
