import React from "react";
import { Button, Row, Col, Input, Checkbox } from "antd";
import styles from "./Disclaimer.module.css";
/*
Todo:
Disclaimer css + component finish
*/

export default function Disclaimer() {
  return (
    <div>
      <Row>
        <Col span={24}>
          <div className={styles.Title}>Type 1 Diabetes Care Directive</div>
          <div className={styles.Title}>Privacy Agreement</div>
        </Col>
      </Row>
      <Row></Row>
    </div>
  );
}
