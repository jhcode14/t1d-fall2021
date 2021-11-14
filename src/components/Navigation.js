/*
    Navbar of the app
    TODO:
    - logo.png need to be replaced
*/

import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Button, BlackButton } from "./Button.style";
import "../styles/nav.css";

class Navigation extends React.Component {
    render() {
        return (
            <Container id="nav_spacing">
                <Row id="Ngrid">
                    <Col id="Nlogo">
                        <img
                        src="/logo.png"
                        width="265"
                        height="92"
                        alt="T1D logo"
                        />
                    </Col>
                    <Col>
                        <Button className='NButtonText'> Create Mine</Button>
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