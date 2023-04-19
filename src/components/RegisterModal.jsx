import React from "react";
import Register from "./Register";


// Component for the Sign up modal

const RegisterModal = ({ onClose, show2, addUser, users, onAlready }) => {

  if (!show2) {
    return null;
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <Register
          addUser={addUser}
          users={users}
          onClose={onClose}
          onAlready={onAlready}
        />
      </div>
    </div>
  );
};

export default RegisterModal;
