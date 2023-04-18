import React from "react";
import { Link } from "react-router-dom";
import LoginSignupBtn from "./LoginSignupBtn";
import { useState } from "react";

const NavBar = ({ addUser, users, login, setCategory, loggedIn, logOut }) => {
  const handleShopClick = () => {
    setCategory("all");
  };

  const user = JSON.parse(localStorage.getItem("userData"));

  const checkLogin = (loggedIn) => {
    if (loggedIn === true) {
      return (
        <div className="logged-in-wrapper">
          <div className="username">
            <i>
              {user.firstName} &nbsp;
              {user.lastName}
            </i>
          </div>
          <div>
            <button className="logout-btn" onClick={logOut}>
              Log Out
            </button>
          </div>
        </div>
      );
    } else {
      return <LoginSignupBtn addUser={addUser} users={users} login={login} />;
    }
  };

  return (
    <div className="nav-bar-wrapper">
      <div className="nav-bar">
        <div className="search-bar">
          <div className="search-icon">
            <img src={require("../images/search-icon-white.png")}></img>
          </div>
          <div className="search-container">
            <input
              type="text"
              maxLength={"28"}
              className="search-input"
              placeholder="Search"
            ></input>
          </div>
        </div>
        <div className="web-links">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/shop" className="link" onClick={handleShopClick}>
            Shop
          </Link>
          <Link to="/featured" className="link">
            Featured
          </Link>
          <Link to="/support" className="link">
            Support
          </Link>
          <Link to="/contact" className="link">
            Contact
          </Link>
        </div>
        <div>{checkLogin(loggedIn)}</div>
      </div>
    </div>
  );
};

export default NavBar;
