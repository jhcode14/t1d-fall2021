import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import "../styles/overview.css"

class Overview extends React.Component {
    render() {
        return (
            <Container id="overview_spacing">
                <Row id="grid">
                  <Col className="column">
                  <div id="ov_container">
                      <Row className="boxes">
                          <h2 className="title">Free of cost</h2>
                      </Row>
                      <Row className="boxes">
                          <h2 className="title">Fast creation</h2>
                      </Row>
                      <Row className="boxes">
                          <h2 className="title">Powered by research</h2>
                      </Row>
                    </div>
                    </Col>

                    <Col className="column">
                        <div id="explanation_container">
                            <h2 id="explanation_container_heading"><br />What can you do with the T1D care directive?</h2>
                            <ul id="list">
                                <li className="list_item">Start a conversation with your provider about healthcare options.</li>
                                <li className="list_item">Educate others about your diabetes facts and care instructions easily. </li>
                                <li className="list_item">Show your expert knowledge and life of experience.</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
};

export default Overview;
