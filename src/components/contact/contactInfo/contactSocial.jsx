import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./contactSocial.scss";


import FacebookIcon from "../../../assets/contact/facebook.svg";
import TwitterIcons from "../../../assets/contact/twitter.svg";
import DribbleIcon from "../../../assets/contact/dribble.svg";


const contactSocial = () => (
  <Row>
    <Col xs={12}>
      <Row center="xs">
        <Col xs={12} lg={1} className="contact__social">
          <img src={FacebookIcon} alt="facebook" />
        </Col>
        <Col xs={12} lg={1} className="contact__social">
          <img src={TwitterIcons} alt="Twitter" />
        </Col>
        <Col xs={12} lg={1} className="contact__social">
          <img src={DribbleIcon} alt="Dribble" />
        </Col>
      </Row>
    </Col>
  </Row>
);

export default contactSocial;
