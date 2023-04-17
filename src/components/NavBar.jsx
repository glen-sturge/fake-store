import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./SignInModal";
import RegisterModal from "./RegisterModal";

const NavBar = ({ addUser, users, login }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  const [show, setShow] = useState(false);

  const [show2, setShow2] = useState(false);

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
      <div className="login-signup">
        <button
          className="login-btn"
          style={{
            backgroundColor: !isActive ? "#d1552e" : "",
            color: !isActive ? "white" : "",
          }}
          onClick={() => setShow(true)}
        >
          Log in
        </button>

        <button
          className="signup-btn"
          style={{
            backgroundColor: isActive ? "#d1552e" : "",
            color: isActive ? "white" : "",
          }}
          // onClick={handleClick}
          onClick={() => setShow2(true)}
        >
          Sign up
        </button>
      </div>
      <Modal
        onClose={() => setShow(false)}
        show={show}
        users={users}
        login={login}
      />
      <RegisterModal
        onClose={() => setShow2(false)}
        show2={show2}
        addUser={addUser}
        users={users}
      />
    </div>
  );
};

export default NavBar;
