import React from "react";
import { Row, Col } from "react-flexbox-grid";
import { Link } from "react-scroll";
import "./footer.scss";

import Logo from '../../assets/footer/logo.svg';
import Arrow from '../../assets/footer/arrow.svg';

const partnerBox = () => (
  <div className="footer">
    <div className="wrapper">
      <Row>
        <Col xs={12} sm={6} md={6}>
          <div className="footer-box">
            <img src={Logo} alt="logo" />
            <p>© 2020 - Mint,All Right Reserved</p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={6}>
          <Link to="hero" spy={true} smooth={true} offset={0} duration={500}>
            <div className="footer-box back-to-top">
              <p>BACK TO TOP</p>
              <img src={Arrow} alt="arrow" />
            </div>
          </Link>
        </Col>
      </Row>
    </div>
  </div>
);
export default partnerBox;
