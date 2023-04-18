import React from "react";
import Register from "./Register";

const RegisterModal = ({ onClose, show2, addUser, users }) => {
  if (!show2) {
    return null;
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <Register addUser={addUser} users={users} />
      </div>
    </div>
  );
};

export default RegisterModal;
