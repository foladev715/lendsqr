import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" header">
      <Link to={"/"}>
        <img src="/images/logo1.svg" alt="logo" className="logo-header" />
      </Link>
      <div className="input-group search-box">
        <input
          type="search"
          id="form1"
          className="form-control"
          placeholder="Search for anything"
        />
        <button type="button" className="btn btn-primary btn-search">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="header-right">
        <span className="docs">Docs</span>
        <i className="fa-regular fa-bell bell"></i>
        <img src="/images/folarin.png" alt="user_avatar" className="avatar" />
        <span className="user-name">Akinfolarin</span>
        <FontAwesomeIcon icon="caret-down" />
      </div>
    </div>
  );
};

export default Header;
