import React from "react";
import { useState } from "react";

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
      </div>
      <div className="web-links">
        <div className="link">Shop</div>
        <div className="link">Sale</div>
        <div className="link">Support</div>
        <div className="link">Contact Us</div>
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
