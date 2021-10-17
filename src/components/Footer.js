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
import React from 'react';
//import { Box, Container, Logo, centerPadding} from "./Footer.style";

import { Container, Row, Col } from 'react-bootstrap';

import "../styles/footer.css"

class Footer extends React.Component {
    render() {
        return (
            <Container id="footer_spacing">
                <Row id='grid'>
                    <Col className="logo">
                        <img
                        src="/logo.png"
                        width="230 px"
                        height="100 px"
                        alt="T1D logo"
                        />
                    </Col>
                    <Col className="links">
                        <p herf="#">Login</p>
                        <p herf="#">Resource Hub</p>
                    </Col>
                    <Col className="links">
                        <p herf="#">About Us</p>
                        <p herf="#">Contact Us</p>
                    </Col>
                </Row>
            </Container>
        );
    }
};

export default Footer;