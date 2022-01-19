import React from "react";
import { useState } from "react";
import { Button, Row, Col, Input, Checkbox } from "antd";
import { AiOutlineSearch } from "react-icons/ai";
import ProgressBar from "./ProgressBar.jsx";
import Download from "../CreatePdf.js";
import styles from "./DemoCreation.module.css";

// ToDo: disable next/previous button when page 1 or 7
//       show different pane
//       customize different pane

const { TextArea } = Input;

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
  drName: "",
  drSpec: "",
  drAffi: "",
  drCont: "",
  drSign: true,
  avName: "",
  avRela: "",
  avCred: "",
  avCount: "",
  avSign: true,
  addInfoDefault1: true,
  addInfoDefault2: true,
  addInfoDefault3: true,
  addInfo4: "",
  addInfo5: "",
  addInfo6: "",
  addCommentsMed: "",
  addCommentsDiet: "",
};

function Questionaries(key) {
  function onChange(target, text) {
    data[target] = text.target.value;
  }

  function onChangeBool(target, state) {
    data[target] = state.target.checked;
  }

  const paneKey = key.number;
  let display;
  if (paneKey === 1) {
    display = (
      <Row>
        <Col span={24}>
          <div className={styles.surveyTitle}>About You</div>
          <span className={styles.surveyText}>
            Include your standard information for identification purposes and
            HbA1c such that healthcare personnel can understand your diabetes
            management better. <p style={{ color: "red" }}>* Required</p>
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
            <p style={{ color: "red" }}>* Required</p>
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
            <p style={{ color: "red" }}>* Required</p>
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
          <Col></Col>
        </Row>
      </div>
    );
  } else if (paneKey === 4) {
    display = (
      <div>
        <Row>
          <div className={styles.surveyTitle}>Contact Info</div>
          <span className={styles.surveyText}>
            In a situation where you are not conscious and/or require additional
            information about your healthcare, your endocrinologist and diabetes
            advocate information can be listed as a contact.
            <p style={{ color: "red" }}>* Required</p>
          </span>
        </Row>
        <Row>
          <Col span={12}>
            <p>
              Your Doctor's Information <span style={{ color: "red" }}>*</span>
            </p>
            <div>Name</div>
            <Input
              placeholder="eg. Dr. Normal"
              defaultValue={data.drName}
              onChange={(text, _) => {
                onChange("drName", text);
              }}
            />
            <div>Specialty</div>
            <Input
              placeholder="eg. endocrinologist"
              defaultValue={data.drSpec}
              onChange={(text, _) => {
                onChange("drSpec", text);
              }}
            />
            <div>Affiliation</div>
            <Input
              placeholder="eg. Stanford Health"
              defaultValue={data.drAffi}
              onChange={(text, _) => {
                onChange("drAffi", text);
              }}
            />
            <Checkbox
              defaultChecked={true}
              onChange={(state, _) => {
                onChangeBool("drSign", state);
              }}
            >
              Include signature space for this contact on the final document.
            </Checkbox>
          </Col>
          <Col span={12}>
            <p>
              Your Advocate's Information{" "}
              <span style={{ color: "red" }}>*</span>
            </p>
            <div>Name</div>
            <Input
              placeholder="eg. Cassie Dune"
              defaultValue={data.avName}
              onChange={(text, _) => {
                onChange("avName", text);
              }}
            />
            <div>Relationship to you</div>
            <Input
              placeholder="eg. spouse"
              defaultValue={data.avRela}
              onChange={(text, _) => {
                onChange("avRela", text);
              }}
            />
            <div>Credentials (if any)</div>
            <Input
              placeholder="eg. Diabetes Educator"
              defaultValue={data.avCred}
              onChange={(text, _) => {
                onChange("avCred", text);
              }}
            />
            <Checkbox
              defaultChecked={true}
              onChange={(state, _) => {
                onChangeBool("avSign", state);
              }}
            >
              Include signature space for this contact on the final document.
            </Checkbox>
          </Col>
        </Row>
      </div>
    );
  } else if (paneKey === 5) {
    display = (
      <div>
        <Row>
          <div className={styles.surveyTitle}>Healthcare Wishes</div>
          <span className={styles.surveyText}>
            This lists your specific preferences and wishes you have in regards
            to diabetes care when you do not have a clear mind. These decisions
            should be consulted with your doctors (listed earlier).
          </span>
        </Row>
        <Row>
          <Col span={24}>
            {" "}
            <div className={styles.additionalInfoTitle}>
              What decisions should be consulted?
            </div>
            <Checkbox
              defaultChecked={true}
              onChange={(state, _) => {
                onChangeBool("addInfoDefault1", state);
              }}
            >
              Remove my (previously answered in Management Tools) device(s)
              listed earlier
            </Checkbox>
            <Checkbox>
              Change the settings of my device(s) listed earlier
            </Checkbox>
            <Checkbox>Put steroid or glucose in IV</Checkbox>
          </Col>
        </Row>
      </div>
    );
  } else if (paneKey === 6) {
    display = (
      <div>
        <Row>
          <Col>
            <h4 className={styles.surveyTitle}>Additional Information</h4>
            <p className={styles.surveyText}>
              Any information in this section will be listed on a second page,
              so your document will be a total of two pages.
            </p>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div className={styles.additionalInfoTitle}>Medications</div>
            <TextArea
              rows={4}
              placeholder="Examples:
1. “Medication 1, Medication 2...”
2. “Diabetes Management: Medication 1, Medication 2.., Hypothyroid: Medication 1”
3. “Everyday at 7am I have to take...”"
              defaultValue={data.addCommentsMed}
              onChange={(text, _) => {
                onChange("addCommentsMed", text);
              }}
            ></TextArea>
            <div className={styles.additionalInfoTitle}>Diet</div>
            <TextArea
              rows={4}
              placeholder="Example “I have celiac, which means I cannot consume wheat ... ”"
              defaultValue={data.addCommentsDiet}
              onChange={(text, _) => {
                onChange("addCommentsDiet", text);
              }}
            ></TextArea>
          </Col>
        </Row>
      </div>
    );
  } else if (paneKey === 7) {
    display = (
      <div>
        <Download />
      </div>
    );
  } else {
    display = <div>ERROR</div>;
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
