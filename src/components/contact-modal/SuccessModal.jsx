import React from "react";
import "./modal.scss";

const successModal = (props) => (
  <div className="sucess__modal">
    <p>Success!</p>
    <p>
      Thank you for your email.<br></br>We will respond as soon as possible.
    </p>
    <div role="button" tabIndex={0} className="modal__btn flex-center" onClick={props.closeModal} onKeyDown={props.closeModal}>
      <p>Ok</p>
    </div>
  </div>
);

export default successModal;
