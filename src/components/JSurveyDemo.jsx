import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { Button } from "antd";
import "../styles/survey_demo.css";

// ToDo: disable next/previous button when page 1 or 7
//       show different pane
//       customize different pane

function JSurveyDemo() {
  const [activePane, setActivePane] = useState(1);

  async function onClickNext() {
    if (activePane < 7) {
      setActivePane(activePane + 1);
    }
  }

  async function onClickPrevious() {
    if (activePane > 1) {
      setActivePane(activePane - 1);
    }
  }

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
        <div>
          <Button onClick={onClickPrevious}>Previous</Button>
          <Button type="primary" onClick={onClickNext}>
            Next
          </Button>
        </div>
      </Container>
    </div>
  );
}
export default JSurveyDemo;
