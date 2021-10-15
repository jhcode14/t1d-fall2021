import React from "react";
import { Navbar, Container } from 'react-bootstrap';
import { Button } from "./Button.style";
import navstyle from "../styles/nav.css";

function Navigation(props) {
    return (
        <Navbar bg="white">
            <Container>
                <Navbar.Brand herf="#home">
                    <img
                    src="/logo.png"
                    width="265"
                    height="92"
                    className={navstyle.aligntop}
                    alt="T1D logo"
                    />
                    <Button> Create Mine</Button>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}
export default Navigation;