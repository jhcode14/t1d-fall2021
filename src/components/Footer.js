/*
    Footer for the app

    TODO:
    - background color
    - logo
    - simple links to
        - Login
        - About Us
        - Resource Hub
        - Contact Us
*/
import React from "react";
import { Link } from "react-router-dom";

//import { Box, Container, Logo, centerPadding} from "./Footer.style";

import { Container, Row, Col } from "react-bootstrap";

import "../styles/footer.css";

import logo from "../images/ddi_logo.png";

class Footer extends React.Component {
  render() {
    return (
      <Container id="footer_spacing">
        <Row id="Fgrid">
          <Col className="Flogo">
            <img src={logo} width="350 px" height="auto" alt="T1D logo"/>
          </Col>
          <Col className="Flinks">
            <Link to="/about">About Us</Link>
            <p herf="#">Contact Us</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;
