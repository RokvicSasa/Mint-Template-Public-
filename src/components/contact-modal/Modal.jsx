import React from "react";
import Fade from "react-reveal/Fade";
import "./modal.scss";

import Backdrop from "./ModalBackdrop";
import SuccessModal from "./SuccessModal";
import ErrorModal from "./ErrorModal";


const modal = (props) => {
  let innerModalRender = null;
  if (props.status === "success") {
    innerModalRender = (
      <Fade bottom duration={500}>
        <SuccessModal closeModal={props.closeModal} />
      </Fade>
    );
  }else if (props.status === "error") {
    innerModalRender = (
      <Fade bottom duration={500}>
        <ErrorModal closeModal={props.closeModal} />
      </Fade>
    );
  }


  return (
    <div className="modal">
      <Backdrop closeModal={props.closeModal} />
      {innerModalRender}
    </div>
  );
};

export default modal;
