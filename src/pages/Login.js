import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login container">
      <div className="login-left">
        <Link to={"/"}>
          <img src="/images/logo1.svg" alt="logo" className="logo" />
        </Link>
        <img
          src="/images/login-image1.svg"
          alt="login"
          className="login-image"
        />
      </div>
      <div className="login-right">
        <h2>Welcome!</h2>
        <span className="login-details">Enter details to log in</span>
        <form className="login-form">
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
            <i class="bi bi-eye-slash" id="togglePassword"></i>
          </div>
          <div className="mb-3 ">
            <span className="forgot-password">FORGOT PASSWORD?</span>
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-primary btn-login" type="submit">
              LOG IN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
