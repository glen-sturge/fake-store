import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };
  return (
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
        <Link to="/shop" className="link">
          Shop
        </Link>
        <div className="link">Sale</div>
        <Link to="/support" className="link">
          Support
        </Link>
        <Link to="/contact" className="link">
          Contact
        </Link>
      </div>
      <div className="login-signup">
        <button
          className="login-btn"
          style={{
            backgroundColor: !isActive ? "#d1552e" : "",
            color: !isActive ? "white" : "",
          }}
          onClick={handleClick}
        >
          Log in
        </button>
        <button
          className="signup-btn"
          style={{
            backgroundColor: isActive ? "#d1552e" : "",
            color: isActive ? "white" : "",
          }}
          onClick={handleClick}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default NavBar;
