import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./about.scss";
// Components
import TeamBox from './teamBox';
import TeamInfo from "./teamInfo";
import Title from "../ui-components/title/title";
// Assets
import Person01 from "../../assets/about/person01.png";
import Person02 from "../../assets/about/person02.png";

const about = () => (
  <div id="about">
    <div className="wrapper">
      <Title title="ABOUT US." />
      <p className="font12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt<br></br>ut labore et dolore magna aliqua.
      </p>
      <Row>
        <Col md={12} lg={4}>
          <TeamBox avatar={Person01} name="Luke Skywalker" job="Web designer" />
        </Col>
        <Col md={12} lg={4}>
          <TeamBox avatar={Person02} name="Han Solo" job="Graphic Designer" />
        </Col>
        <Col md={12} lg={4}>
          <TeamInfo />
        </Col>
      </Row>
    </div>
  </div>
);

export default about;
