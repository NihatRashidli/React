import React from "react";
import { useFormik } from "formik";
import "./Login.css";
import axios from "axios";
import { loginschema } from "../../../schemas/LoginSchema";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const notify = (message, type) =>
    toast(message, {
      type: type,
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const submitForm = async (values, actions) => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      const user = response.data.find(
        (user) =>
          user.username === values.username && user.password === values.password
      );

      if (!user) {
        notify("Username or password incorrect", "error");
      } else {
        const updatedUser = { ...user, isLogin: true };
        await axios.put(`http://localhost:3000/users/${updatedUser.id}`, updatedUser);
        notify("Login successful", "success");
        setTimeout(() => {
          actions.resetForm();
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      notify("An error occurred. Please try again.", "error");
    }
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginschema,
    onSubmit: submitForm,
  });

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <div>{formik.errors.username}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <Link to="/register">Don't have an account? Register</Link>
      </div>
    </div>
  );
};

export default Login;
