import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import final_form from '../images/final_form.png';

import "../styles/why.css";

class Why extends React.Component {
    render() {
        return(
            <Container>
                <Row>
                    <Col>
                        <h2>Why care directive?</h2>
                        <div>
                            <ul>
                                <li>Start a conversation with your provider about healthcare options.</li>
                                <li>Educate others about your diabetes facts and care instructions easily. </li>
                                <li>Show your expert knowledge and life of experience.</li>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <img src={final_form} />
                    </Col>
                </Row>
            </Container>
        );
    }
};

export default Why;