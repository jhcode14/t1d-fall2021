import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import final_form from '../images/final_form.png';

import "../styles/why.css";

class Why extends React.Component {
    render() {
        return(
            <Container>
                <Row id="box">
                    <Col className="column">
                        <h2 id="heading">Why care directive?</h2>
                        <div id="explanation_container">
                            <ul id="list">
                                <li className="list_item">Start a conversation with your provider about healthcare options.</li>
                                <li className="list_item">Educate others about your diabetes facts and care instructions easily. </li>
                                <li className="list_item">Show your expert knowledge and life of experience.</li>
                            </ul>
                        </div>
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