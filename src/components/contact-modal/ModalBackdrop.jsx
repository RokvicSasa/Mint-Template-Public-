import React from "react";
import "./modal.scss";

const backdrop = (props) => (
  <div role="button" aria-label="Close" tabIndex={0} className="backdrop" onClick={props.closeModal} onKeyDown={props.closeModal}></div>
);



export default backdrop;
