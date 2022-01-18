import React from "react";
import { useState } from "react";
import { Button, Row, Col, Input, DatePicker, Radio } from "antd";
import { AiOutlineSearch } from "react-icons/ai";
import Download from "./CreatePdf.js";
import styles from "../styles/DemoCreation.module.css";

// ToDo: disable next/previous button when page 1 or 7
//       show different pane
//       customize different pane

const data = {
  name: "",
  dobY: "",
  dobM: "",
  dobD: "",
  insulinPen: "",
  insulinPump: "",
  cgm: "",
  cgmSoftware: "",
  hba1c: "",
  ladose: "",
  avgInsToCarb: "",
  isf: "",
};

function Questionaries(key) {
  function onChange(target, text) {
    data[target] = text.target.value;
  }

  const paneKey = key.number;
  let display;
  if (paneKey === 1) {
    display = (
      <Row>
        <Col span={24}>
          <div className={styles.surveyTitle}>About You</div>
          <span className={styles.surveyText}>
            <br />
            Include your standard information for identification purposes and
            HbA1c such that healthcare personnel can understand your diabetes
            management better.
            <p style={{ color: "red", fontStyle: "italic",fontSize:"12px"}}>* Required</p>
          </span>
        </Col>
        <Col span={12} offset={6} className={styles["shadow-border"]}>
          <div>Full Name</div>
          <Input
            placeholder="eg. Johnny Appleseed"
            defaultValue={data.name}
            onChange={(text, _) => {
              onChange("name", text);
            }}
          />
          <div>Date of Birth</div>

          <Row gutter={8}>
            <Col span={6}>
              <Input
                placeholder="Month"
                defaultValue={data.dobM}
                onChange={(text, _) => {
                  onChange("dobM", text);
                }}
              />
            </Col>
            <Col span={4}>
              <Input
                placeholder="Day"
                defaultValue={data.dobD}
                onChange={(text, _) => {
                  onChange("dobD", text);
                }}
              />
            </Col>
            <Col span={4}>
              <Input
                placeholder="Year"
                defaultValue={data.dobY}
                onChange={(text, _) => {
                  onChange("dobY", text);
                }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  } else if (paneKey === 2) {
    display = (
      <div>
        <Row>
          <div className={styles.surveyTitle}>
            Your Diabetes Management Tools
          </div>
          <span className={styles.surveyText}>
            Include your comprehensive list of diabetes devices/apps (pump, CGM,
            apps) you rely on to help healthcare personnel understand which
            tools are critical in helping you manage your diabetes.
            <p style={{ color: "red", fontStyle: "italic",fontSize:"12px"}}>* Required</p>
          </span>
        </Row>
        <Row>
          <Col span={11}>
            <div>To administer insulin, I use:</div>
            <div className={styles["round-border"]}>
              <div>Insulin Pen Brand</div>
              <Input prefix={<AiOutlineSearch />}></Input>
            </div>
            <div className={styles["round-border"]}>
              <div>Insulin Pump Brand</div>
              <Input prefix={<AiOutlineSearch />}></Input>
            </div>
          </Col>
          <Col span={2}>
            <div className={styles["p2-divider"]}></div>
          </Col>
          <Col span={11}>
            <div>To monitor my glucose levels, I use:</div>
            <div className={styles["round-border"]}>
              <div>Continuous Glucose Monitor (Brand)</div>
              <Input prefix={<AiOutlineSearch />}></Input>
            </div>
            <div className={styles["round-border"]}>
              <div>Software</div>
              <Input prefix={<AiOutlineSearch />}></Input>
            </div>
          </Col>
        </Row>
      </div>
    );
  } else if (paneKey === 3) {
    display = (
      <div>
        <Row>
          <div className={styles.surveyTitle}>Insulin Dosing</div>
          <span className={styles.surveyText}>
            Include your insulin dosing information for healthcare providers in
            case of an emergency or when you do not have a clear mind.
            Additional information can be added at the end of this creation
            process.
            <p style={{ color: "red", fontStyle: "italic",fontSize:"12px"}}>* Required</p>
          </span>
        </Row>
        <Row>
          <Col span={11}>
            <div>Rapid-Acting Insulin I use : </div>
          </Col>
          <Col span={2}></Col>
          <Col span={11}>
            <div>Long-Acting Insulin I use : </div>
          </Col>
        </Row>
        <Row>
          <Col span={11}>
            <div>What is your most recent HbA1c ?</div>
            <Input
              placeholder="HbA1c"
              defaultValue={data.hba1c}
              onChange={(text, _) => {
                onChange("hba1c", text);
              }}
              addonAfter="%"
            />
            <div>My typical daily long acting insulin dose :</div>
            <Input
              placeholder="Value"
              defaultValue={data.ladose}
              onChange={(text, _) => {
                onChange("ladose", text);
              }}
              addonAfter="U per day"
            />
            <div>My average Insulin to carbohydrate ratio :</div>
            <Input
              placeholder="Value"
              defaultValue={data.avgInsToCarb}
              onChange={(text, _) => {
                onChange("avgInsToCarb", text);
              }}
              addonBefore="1 unit to "
              addonAfter="g"
            />
            <div>My insulin sensitivity factor (ISF) :</div>
            <Input
              placeholder="Value"
              defaultValue={data.isf}
              onChange={(text, _) => {
                onChange("isf", text);
              }}
              addonBefore="1 unit of insulin decrease blood glucose by"
              addonAfter="mg/dL"
            />
          </Col>
        </Row>
      </div>
    );
  } else if (paneKey === 4) {
    display = <div>4</div>;
  } else if (paneKey === 5) {
    display = <div>5</div>;
  } else if (paneKey === 6) {
    display = <div>6</div>;
  } else if (paneKey === 7) {
    display = (
      <div>
        <h4 className={styles.surveyTitle}>Additional Information</h4>
        <p className={styles.surveyText}>
          Any information in this section will be listed on a second page, so
          your document will be a total of two pages.
        </p>
        <Download />
      </div>
    );
  } else {
    display = <div>ERROR</div>;
    console.error(`invalid activePane input ${paneKey}`);
  }

  return display;
}

function ProgressBar(key) {
  const paneKey = key.number;
  let display;
  if (paneKey === 1) {
    display = (
      <div>
        <div className={styles.progress}>
          <div className={styles["progress-bar1"]}></div>
        </div>
        <Row justify="center">
          <Col className={styles["progress-tab-active"]}>About you</Col>
          <Col className={styles["progress-tab-inactive"]}>
            Management Tools
          </Col>
          <Col className={styles["progress-tab-inactive"]}>Insulin Dosing</Col>
          <Col className={styles["progress-tab-inactive"]}>Contact Info</Col>
          <Col className={styles["progress-tab-inactive"]}>Decisions</Col>
          <Col className={styles["progress-tab-inactive"]}>Additional Info</Col>
        </Row>
      </div>
    );
  } else if (paneKey === 2) {
    display = (
      <div>
        <div className={styles.progress}>
          <div className={styles["progress-bar2"]}></div>
        </div>
        <Row justify="center">
          <Col className={styles["progress-tab-inactive"]}>About you</Col>
          <Col className={styles["progress-tab-active"]}>Management Tools</Col>
          <Col className={styles["progress-tab-inactive"]}>Insulin Dosing</Col>
          <Col className={styles["progress-tab-inactive"]}>Contact Info</Col>
          <Col className={styles["progress-tab-inactive"]}>Decisions</Col>
          <Col className={styles["progress-tab-inactive"]}>Additional Info</Col>
        </Row>
      </div>
    );
  } else if (paneKey === 3) {
    display = (
      <div>
        <div className={styles.progress}>
          <div className={styles["progress-bar3"]}></div>
        </div>
        <Row justify="center">
          <Col className={styles["progress-tab-inactive"]}>About you</Col>
          <Col className={styles["progress-tab-inactive"]}>
            Management Tools
          </Col>
          <Col className={styles["progress-tab-active"]}>Insulin Dosing</Col>
          <Col className={styles["progress-tab-inactive"]}>Contact Info</Col>
          <Col className={styles["progress-tab-inactive"]}>Decisions</Col>
          <Col className={styles["progress-tab-inactive"]}>Additional Info</Col>
        </Row>
      </div>
    );
  } else if (paneKey === 4) {
    display = (
      <div>
        <div className={styles.progress}>
          <div className={styles["progress-bar4"]}></div>
        </div>
        <Row justify="center">
          <Col className={styles["progress-tab-inactive"]}>About you</Col>
          <Col className={styles["progress-tab-inactive"]}>
            Management Tools
          </Col>
          <Col className={styles["progress-tab-inactive"]}>Insulin Dosing</Col>
          <Col className={styles["progress-tab-active"]}>Contact Info</Col>
          <Col className={styles["progress-tab-inactive"]}>Decisions</Col>
          <Col className={styles["progress-tab-inactive"]}>Additional Info</Col>
        </Row>
      </div>
    );
  } else if (paneKey === 5) {
    display = (
      <div>
        <div className={styles.progress}>
          <div className={styles["progress-bar5"]}></div>
        </div>
        <Row justify="center">
          <Col className={styles["progress-tab-inactive"]}>About you</Col>
          <Col className={styles["progress-tab-inactive"]}>
            Management Tools
          </Col>
          <Col className={styles["progress-tab-inactive"]}>Insulin Dosing</Col>
          <Col className={styles["progress-tab-inactive"]}>Contact Info</Col>
          <Col className={styles["progress-tab-active"]}>Decisions</Col>
          <Col className={styles["progress-tab-inactive"]}>Additional Info</Col>
        </Row>
      </div>
    );
  } else if (paneKey === 6) {
    display = (
      <div>
        <div className={styles.progress}>
          <div className={styles["progress-bar6"]}></div>
        </div>
        <Row justify="center">
          <Col className={styles["progress-tab-inactive"]}>About you</Col>
          <Col className={styles["progress-tab-inactive"]}>
            Management Tools
          </Col>
          <Col className={styles["progress-tab-inactive"]}>Insulin Dosing</Col>
          <Col className={styles["progress-tab-inactive"]}>Contact Info</Col>
          <Col className={styles["progress-tab-inactive"]}>Decisions</Col>
          <Col className={styles["progress-tab-active"]}>Additional Info</Col>
        </Row>
      </div>
    );
  } else if (paneKey === 7) {
    display = (
      <div>
        <div className={styles.progressText}>Form Completion</div>
      </div>
    );
  } else {
    console.error(`invalid activePane input ${paneKey}`);
  }

  return display;
}

function DocCreation() {
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
      <Row className={styles.progressContainer}>
        <Col span={24}>
          <div className={styles.progressTitle}>
            Type 1 Diabetes Care Directive
          </div>
          <ProgressBar number={activePane} />
        </Col>
      </Row>
      <Row>
        <Col span={12} offset={6}>
          <Questionaries number={activePane} />
          <div>`currently at {activePane}`</div>
          <div>
            <Button onClick={onClickPrevious}>Previous</Button>
            <Button type="primary" onClick={onClickNext}>
              Next
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default DocCreation;
