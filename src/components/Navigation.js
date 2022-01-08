/*
    Navbar of the app

    TODO:
    - logo.png need to be replaced
*/

import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { NormalButton, BlackButton } from "./Button.style";
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
            <Link to="/create">
              <NormalButton className="NButtonText"> Create Mine</NormalButton>
            </Link>
          </Col>
          <Col>
            <BlackButton className="BlackNButtonText">
              {" "}
              Feedback Form
            </BlackButton>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Navigation;
