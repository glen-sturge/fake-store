import React from "react";
import { useState } from "react";
import Modal from "./SignInModal";
import RegisterModal from "./RegisterModal";

const LoginSignupBtn = ({ addUser, users, login }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  const [show, setShow] = useState(false);

  const [show2, setShow2] = useState(false);
  return (
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
      <Modal
        onClose={() => setShow(false)}
        show={show}
        addUser={addUser}
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

export default LoginSignupBtn;
