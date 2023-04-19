import React from "react";
import { useState } from "react";
import Modal from "./SignInModal";
import RegisterModal from "./RegisterModal";

// Component for the Login/ Sign up button on the Naigation Bar.

const LoginSignupBtn = ({ addUser, users, login }) => {
  const [isActive, setIsActive] = useState(false);

  const [show, setShow] = useState(false);

  const [show2, setShow2] = useState(false);
  return (
    <div className="login-signup">
      {/* Login button */}
      <button className="login-btn" onClick={() => setShow(true)}>
        Log in
      </button>
      {/* Sign up button */}
      <button className="signup-btn" onClick={() => setShow2(true)}>
        Sign up
      </button>
      {/* Login Modal */}
      <Modal
        onHere={() => setShow2(true)}
        onClose={() => setShow(false)}
        show={show}
        addUser={addUser}
        users={users}
        login={login}
      />
      {/* Sign up Modal */}
      <RegisterModal
        onAlready={() => setShow(true)}
        onClose={() => setShow2(false)}
        show2={show2}
        addUser={addUser}
        users={users}
      />
    </div>
  );
};

export default LoginSignupBtn;
