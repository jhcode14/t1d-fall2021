import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import final_form from '../images/final_form.png';

import "../styles/why.css";

class Why extends React.Component {
    render() {
        return(
            <Container>
            <Row id="why_blocktext">
                <h2 id="why_boldtext">Help healthcare providers learn how to care for you with a T1D Care Directive.</h2>
            </Row>
                <Row id="box">
                    <Col className="text_box">
                        <h2 id="description">
                          Your directive is one-page document to support you in healthcare settings, especially when the providers do not specialize in Type 1 Diabetes and have no access to your medical records.<br /><br />
                          It includes information on:
                        </h2>
                          <ul>
                              <li className="description_list">Management Tools</li>
                              <li className="description_list">Insulin Dosing </li>
                              <li className="description_list">Contact for your primary provider, other advocates, or loved ones</li>
                              <li className="description_list">List of Your Health Care Preferences/Wishes</li>
                              <li className="description_list">Medications, past surgeries and other customizable fields </li>
                          </ul>
                        </Col>
                    <Col className="column">
                        <img src={final_form} id="form_image"/>
                    </Col>
                </Row>
            </Container>
        );
    }
};

export default Why;
