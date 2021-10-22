import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NormalButton } from "./Button.style";

import illustration from '../images/Illustration.png';

import "../styles/firstfold.css";

class Firstfold extends React.Component {
    render() {
        return(
          <Container id="ff_pacing">
              <Row id="ff_grid">
                  <Col
                      id="ff_box"
                      className="boxes"
                  >
                        <h2 id="ff_boldtext">Manage T1D the way you want </h2>
                        <h3 id="ff_heading">Type 1 Diabetes Care Directive</h3>
                        <h4 id="ff_description">A one-page document that helps you get more patient-centered care. </h4>
                        <NormalButton className="MediumButtonText">Create Now</NormalButton>
                    </Col>
                    <Col
                    id="ff_box"
                    className="ff_boxes"
                    >
                        <img src={illustration} id="ff_illus"/>
                    </Col>
                </Row>
            </Container>
        );
    }
};

export default Firstfold;
