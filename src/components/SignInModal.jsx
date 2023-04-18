import React from "react";
import SignIn from "./SignIn";

const Modal = ({ onClose, show, addUser, users, login }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <SignIn users={users} login={login} />
      </div>
    </div>
  );
};

export default Modal;
