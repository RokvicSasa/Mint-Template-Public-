import React from "react";

import "./teamBox.scss";

const teamBox = (props) => (
  <div className="team__box flex-center">
    <img src={props.avatar} alt="person" />
    <div className="team__box-info">
      <p className="font15 weight800">{props.name}</p>
      <p className="font12 weight500">{props.job}</p>
    </div>
  </div>
);

export default teamBox;
