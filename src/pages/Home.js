import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home container">
      <div className="home-left">
        <img src="/images/logo1.svg" alt="logo" className="logo" />
        <img
          src="/images/login-image1.svg"
          alt="login"
          className="home-image"
        />
      </div>
      <div className="home-right">
        <h2>Welcome To LendSqr!</h2>
        <span className="home-details">Where would you like to go?</span>
        <ul>
          <li>
            <Link to={"/login"} style={{ color: "#213f7d" }}>
              Login
            </Link>
          </li>
          <li>
            <Link to={"/dashboard"} style={{ color: "#213f7d" }}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to={"/users"} style={{ color: "#213f7d" }}>
              Users
            </Link>
          </li>
          <li>
            <Link to={"/userdetails/1"} style={{ color: "#213f7d" }}>
              User Details
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
