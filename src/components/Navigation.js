/*
    Navbar of the app

    TODO:
    - logo.png need to be replaced
*/

import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { ClearButton,NormalButton, BlackButton } from "./Button.style";
import "../styles/nav.css";

import logo from "../images/ddi_logo.png";

class Navigation extends React.Component {
  render() {
    return (
      <Container id="nav_spacing">
        <Row id="Ngrid">
          <Col id="Nlogo">
            <Link to="/">
              <img src={logo} className="navLogo" alt="T1D logo" />
            </Link>
          </Col>
          <Col>
              <ClearButton className="NButtonText"> Privacy Statement</ClearButton>
          </Col>
          <Col>
            <ClearButton className="NButtonText"> UCSD Design Lab</ClearButton>
          </Col>
          <Col>
            <ClearButton className="NButtonText"> Our Research</ClearButton>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Navigation;
