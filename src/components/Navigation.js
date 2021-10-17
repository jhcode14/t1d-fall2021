/*
    Navbar of the app

    TODO:
    - logo.png need to be replaced
*/

import React from "react";
import { Navbar, Container } from 'react-bootstrap';
import { Button } from "./Button.style";
import "../styles/nav.css";

function Navigation(props) {
    return (
        <Navbar bg="white">
            <Container id="nav_spacing">
                <Navbar.Brand herf="#home">
                    <img
                    src="/logo.png"
                    width="265"
                    height="92"
                    alt="T1D logo"
                    />
                    <Button> Create Mine</Button>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}
export default Navigation;