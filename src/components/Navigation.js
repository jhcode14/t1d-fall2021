/*
    Navbar of the app

    TODO:
    - logo.png need to be replaced
*/

import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { NormalButton, BlackButton } from "./Button.style";
import "../styles/nav.css";

import logo from '../images/ddi_logo.png';

class Navigation extends React.Component {
    render() {
        return (
            <Container id="nav_spacing">
                <Row id="Ngrid">
                    <Col id="Nlogo">
                        <img
                        src={logo}
                        width="400"
                        height="100"
                        alt="T1D logo"
                        />
                    </Col>
                    <Col>
                        <NormalButton className='NButtonText'> Create Mine</NormalButton>
                    </Col>
                    <Col>
                        <BlackButton className='NButtonText'> Feedback Form</BlackButton>
                    </Col>
                </Row>
            </Container>
        );
    }
};
export default Navigation;