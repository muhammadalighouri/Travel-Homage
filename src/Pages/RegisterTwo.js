import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../Redux/actions/userActions";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../scss/register.scss";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [isSubmitting, setIsSubmitting] = useState(false); // Track the submit state
    const dispatch = useDispatch();
    const userRegister = useSelector((state) => state.UserRegister);
    const { error, userInfo, loading } = userRegister;
    const navigate = useNavigate('')
    const formik = useFormik({
        initialValues: {
            firstName: "",
            middleName: "",
            lastName: "",
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("Required"),
            middleName: Yup.string().required("Required"),
            lastName: Yup.string().required("Required"),
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
                        values.middleName,
                        values.lastName,
                        values.email,
                        values.password
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
                    position: toast.POSITION.BOTTOM_RIGHT,
                });
                navigate('/');
            } else {
                toast.error(userInfo.message, {
                    position: toast.POSITION.BOTTOM_RIGHT,
                });
            }
        }
    }, [userInfo, navigate]);
    return (
        <div className="register-container">
            <form onSubmit={formik.handleSubmit} className="register-form">
                <h2>Register</h2>

                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" {...formik.getFieldProps("firstName")} />
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <div className="error">{formik.errors.firstName}</div>
                    ) : null}
                </div>

                <div className="form-group">
                    <label>Middle Name</label>
                    <input type="text" {...formik.getFieldProps("middleName")} />
                    {formik.touched.middleName && formik.errors.middleName ? (
                        <div className="error">{formik.errors.middleName}</div>
                    ) : null}
                </div>

                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" {...formik.getFieldProps("lastName")} />
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <div className="error">{formik.errors.lastName}</div>
                    ) : null}
                </div>

                <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" {...formik.getFieldProps("email")} />
                    {formik.touched.email && formik.errors.email ? (
                        <div className="error">{formik.errors.email}</div>
                    ) : null}
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        {...formik.getFieldProps("password")}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <div className="error">{formik.errors.password}</div>
                    ) : null}
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        {...formik.getFieldProps("confirmPassword")}
                    />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                        <div className="error">{formik.errors.confirmPassword}</div>
                    ) : null}
                </div>

                <button
                    type="submit"
                    className="register-btn"
                    disabled={isSubmitting || loading} // Disable the button if submitting or loading
                >
                    {isSubmitting || loading ? "Submitting..." : "Register"}
                </button>
            </form>
        </div>
    );
};

export default Register;
