import React from "react";
import { Button, Row, Col } from "antd";
import styles from "./Disclaimer.module.css";

import { Link } from "react-router-dom";

export default function Disclaimer() {
  return (
    <div>
      <Row className={styles.titleContainer}>
        <Col span={24}>
          <div className={styles.containerTitle}>Type 1 Diabetes Care Directive</div>
          <div className={styles.containerTitle2}>Privacy Agreement</div>
        </Col>
      </Row>
      <Row>
        <div className={styles.outTitle}>Prior to the form creation, we ask that you acknowledge our privacy disclaimer. </div>
      </Row>
      <Row>
        <Col span={12} offset={6} className={styles["shadow-border"]}>
          <div></div>
          <div className={styles.boxText1}>Privacy Disclaimer</div>
          <div className={styles.boxText2}>No information will be collected by DDI during this form creation process. All data is stored privately and securely on your browser locally. We value your confidentiality.</div>
          <Row>
            <Link to="/">
              <Button className={styles.exitPageButton}>Exit Page</Button>
            </Link>
            <Link to="/create">
              <Button type="primary">Understand and Proceed</Button>
            </Link>
          </Row>
        </Col>
      </Row>
    </div>
  );
}