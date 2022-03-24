import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NormalButton } from "./Button.style";
import { Link } from "react-router-dom";

import illustration from '../images/first_fold_pic.png';

import "../styles/firstfold.css";

class Firstfold extends React.Component {
    render() {
        return(
          <Container id="ff_spacing">
              <Row id="ff_grid">
                  <Col
                      id="ff_box"
                      className="ff_boxes"
                  >
                        <h2 id="ff_boldtext">Manage T1D the way you want </h2>
                        <h3 id="ff_heading">Type 1 Diabetes Care Directive</h3>
                        <h4 id="ff_description">A one-page document that help care providers recognize, validate, and follow your care wishes. </h4>
                        <Link to="/disclaimer">
                          <NormalButton className="MediumButtonText" >Create my directive</NormalButton>
                        </Link>
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
