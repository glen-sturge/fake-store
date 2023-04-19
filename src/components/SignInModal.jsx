import React from "react";
import SignIn from "./SignIn";

// Component for the sign In Modal

const Modal = ({ onClose, show, addUser, users, login, onHere }) => {

  if (!show) {
    return null;
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <SignIn users={users} login={login} onClose={onClose} onHere={onHere} />
      </div>
    </div>
  );
};

export default Modal;
