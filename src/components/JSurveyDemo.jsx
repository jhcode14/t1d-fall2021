import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import "../styles/survey_demo.css";

function JSurveyDemo() {
  const [activePane, setActivePane] = useState("0");
  return (
    <div>
      <Container id="progressContainer">
        <h4 className="progressTitle">Type 1 Diabetes Care Directive</h4>
      </Container>
      <Container id="surveyContainer">
        <h4 className="surveyTitle">Additional Information</h4>
        <p className="surveyText">
          Any information in this section will be listed on a second page, so
          your document will be a total of two pages.
        </p>
      </Container>
    </div>
  );
}
export default JSurveyDemo;
