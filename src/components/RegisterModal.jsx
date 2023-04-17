import React from "react";
import Register from "./Register";

const RegisterModal = (props) => {
  if (!props.show2) {
    return null;
  }

  return (
    <div class="modal" onClick={props.onClose}>
      <div class="modal-content" onClick={(e) => e.stopPropagation()}>
        <Register />
      </div>
    </div>
  );
};

export default RegisterModal;
