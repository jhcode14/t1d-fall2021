import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { Button, Row, Col, Input, DatePicker, Radio } from "antd";
import "../styles/survey_demo.css";

// ToDo: disable next/previous button when page 1 or 7
//       show different pane
//       customize different pane

const data = {};

function Questionaries(key) {
  const paneKey = key.number;
  console.log(paneKey);
  let display;
  if (paneKey === 1) {
    display = (
      <Row gutter={8}>
        <Col span={12}>
          <div>Full Name</div>
          <Input placeholder="eg. Johnny Appleseed" />
          <div>Date of Birth</div>
          <Row gutter={8}>
            <Col span={6}>
              <Input placeholder="Month" />
            </Col>
            <Col span={4}>
              <Input placeholder="Day" />
            </Col>
            <Col span={4}>
              <Input placeholder="Year" />
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <div>What is your current HbA1c?</div>
          <Row>
            <Col span={8}>
              <Input placeholder="HbA1c" />
            </Col>
            <Col span={16}>
              <Radio.Group defaultValue="a" buttonStyle="solid">
                <Radio.Button value="a">mmol/mol</Radio.Button>
                <Radio.Button value="b">Percentage(%)</Radio.Button>
              </Radio.Group>
            </Col>
          </Row>
          <div>Date Recorded</div>
          <DatePicker />
        </Col>
      </Row>
    );
  } else if (paneKey === 2) {
    display = <div>2</div>;
  } else if (paneKey === 3) {
    display = <div>3</div>;
  } else if (paneKey === 4) {
    display = <div>4</div>;
  } else if (paneKey === 5) {
    display = <div>5</div>;
  } else if (paneKey === 6) {
    display = <div>6</div>;
  } else if (paneKey === 7) {
    display = <div>7</div>;
  } else {
    display = <div>ERROR</div>;
    console.error(`invalid activePane input ${paneKey}`);
  }

  return display;
}

function progressBar(key) {
  const paneKey = key.number;
  console.log(paneKey);
  let display;
  if (paneKey === 1) {
  } else if (paneKey === 2) {
  } else if (paneKey === 3) {
  } else if (paneKey === 4) {
  } else if (paneKey === 5) {
  } else if (paneKey === 6) {
  } else if (paneKey === 7) {
  } else {
    console.error(`invalid activePane input ${paneKey}`);
  }

  return display;
}

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
        <Questionaries number={activePane} />
        <div>`currently at {activePane}`</div>
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
