import React from "react";

const NavBar = () => {
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
        <div className="login">Log in</div>
        <div className="sign-up">Sign up</div>
      </div>
    </div>
  );
};

export default NavBar;
