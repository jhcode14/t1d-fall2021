import React from "react";
import { Button, Row, Col } from "antd";
import styles from "./Disclaimer.module.css";

import { Link } from "react-router-dom";
import { GoInfo } from "react-icons/go";

export default function Disclaimer() {
  return (
    <div>
      <Row className={styles.titleContainer}>
        <Col span={24}>
          <div className={styles.containerTitle}>Type 1 Diabetes Care Directive</div>
          <div className={styles.containerTitle2}>Privacy Agreement</div>
        </Col>
      </Row>
      <Row className={styles.row2}>
        <div className={styles.outTitle}>Prior to the form creation, we ask that you acknowledge our privacy disclaimer. </div>
      </Row>
      <Row>
        <Col span={8} offset={8} className={styles["shadow-border"]}>
          <GoInfo className={styles.icon}/>
          <div className={styles.boxText1}>Privacy Disclaimer</div>
          <div className={styles.boxText2}>The project is developed by the Diabetes Design Initiative, a part of the Design Lab at University of California, San Diego. We collect no information during this form creation process. All data is stored privately and securely on your browser. We value your privacy.
</div>
          <div className={styles.pageControl}>
            <Link to="/">
              <Button className={styles.exitPageButton}>Exit Page</Button>
            </Link>
            <Link to="/create">
              <Button type="primary">Understand and Proceed</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
}