import React from "react";
import { Container } from "react-bootstrap";
import "../styles/survey_demo.css";


class JSurveyDemo extends React.Component {
    render() {
        return(
            <Container id="surveyContainer">
                <h4 className="surveyTitle">Additional Information</h4>
                <p className="surveyText">Any information in this section will be listed on a second page, so your document will be a total of two pages.</p>
            </Container>
        );
    }
}

export default JSurveyDemo;