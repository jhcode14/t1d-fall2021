import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import "../styles/overview.css"

class Overview extends React.Component {
    render() {
        return (
            <Container className="overview_spacing">
                <Row className="grid">
                    <Col 
                        id="minutes"
                        className="boxes"
                    >
                        <h2 className="number">15</h2>
                        <h3 className="stat">minutes</h3>
                        <p className="description">with user friendly interfaces.</p>
                    </Col>
                    <Col 
                        id="cost"
                        className="boxes"
                    >
                        <h2 className="number">Free</h2>
                        <h3 className="stat">of cost</h3>
                        <p className="description">Open source code base.</p>
                    </Col>
                    <Col 
                        id="research"
                        className="boxes"
                    >
                        <h2 className="number">Research</h2>
                        <h3 className="stat">by the Diabetes Design Initiative</h3>
                        <p className="description">Tested with PWD and healthcare providers.</p>
                    </Col>
                </Row>
            </Container>
        );
    }
};

export default Overview;