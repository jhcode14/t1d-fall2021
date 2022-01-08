import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/nav.css";

import logo from "../images/ddi_logo.png";

class SurveyNavigation extends React.Component {
  render() {
    return (
      <Container id="nav_spacing">
        <Row id="Ngrid">
          <Col id="Nlogo">
            <Link to="/">
              <img src={logo} className="navLogo" alt="T1D logo" />
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default SurveyNavigation;
