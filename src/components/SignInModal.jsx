import React from "react";
import SignIn from "./SignIn";

const Modal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div class="modal" onClick={props.onClose}>
      <div class="modal-content" onClick={(e) => e.stopPropagation()}>
        <SignIn />
      </div>
    </div>
  );
};

export default Modal;
