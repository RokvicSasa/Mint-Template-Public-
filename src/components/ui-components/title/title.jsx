import React from "react";
import { Row, Col } from "react-flexbox-grid";

import "./title.scss";

const title = (props) => (
  <Row>
    <Col className="big__title">
      <h2 className="weight800 font60 padding40">{props.title}</h2>
    </Col>
  </Row>
);

export default title;
