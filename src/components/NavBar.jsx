import React from "react";
import { Link } from "react-router-dom";
import LoginSignupBtn from "./LoginSignupBtn";

const NavBar = ({ addUser, users, login, setCategory }) => {
  const handleShopClick = () => {
    setCategory("all");
  };

  const checkLogin = (loggedIn) => {
    if (loggedIn === true) {
      return <div>First Name + Last Name</div>; // Insert user's name here
    } else {
      return <LoginSignupBtn />;
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
        <div>{checkLogin()}</div>
      </div>
    </div>
  );
};

export default NavBar;
