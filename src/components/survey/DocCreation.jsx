import React from "react";
import { useState } from "react";
import { Button, Row, Col } from "antd";
import ProgressBar from "./ProgressBar.jsx";
import Download from "./CreatePdf.js";
import styles from "./DocCreation.module.css";

import Panel1 from "./Panel1.jsx";
import Panel2 from "./Panel2.jsx";
import Panel3 from "./Panel3.jsx";
import Panel4 from "./Panel4.jsx";
import Panel5 from "./Panel5.jsx";
import Panel6 from "./Panel6.jsx";

const data = {
  /*panel 1*/
  name: "",
  dobY: "",
  dobM: "",
  dobD: "",
  /*panel 2*/
  insulinPen: "",
  insulinPump: "",
  cgm: "",
  cgmSoftware: "",
  /*panel 3*/
  raInsulin: "",
  laInsulin: "",
  hba1c: "",
  ladose: "",
  avgInsToCarb: "",
  isf: "",
  /*panel 4*/
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
  /*panel 5*/
  addInfoDefault1: true,
  addInfoDefault2: true,
  addInfoDefault3: true,
  /*panel 6*/
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

  function getItemData(target) {
    return data[target];
  }

  const paneKey = key.number;
  let display;
  if (paneKey === 1) {
    display = <Panel1 onChange={onChange} get={getItemData} />;
  } else if (paneKey === 2) {
    display = (
      <Panel2
        onChange={onChange}
        onChangeBool={onChangeBool}
        get={getItemData}
      />
    );
  } else if (paneKey === 3) {
    display = (
      <Panel3
        onChange={onChange}
        onChangeBool={onChangeBool}
        get={getItemData}
      />
    );
  } else if (paneKey === 4) {
    display = (
      <Panel4
        onChange={onChange}
        onChangeBool={onChangeBool}
        get={getItemData}
      />
    );
  } else if (paneKey === 5) {
    display = (
      <Panel5
        onChange={onChange}
        onChangeBool={onChangeBool}
        get={getItemData}
      />
    );
  } else if (paneKey === 6) {
    display = (
      <Panel6
        onChange={onChange}
        onChangeBool={onChangeBool}
        get={getItemData}
      />
    );
  } else if (paneKey === 7) {
    display = (
      <div>
        <Download data={data} />
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
        <Col span={14} offset={5}>
          <Questionaries number={activePane} />
          <div className={styles.pageControl}>
            <Button onClick={onClickPrevious} className={styles.pageControlButton}>Previous</Button>
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
