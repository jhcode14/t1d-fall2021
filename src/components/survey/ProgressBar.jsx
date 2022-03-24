import styles from "./ProgressBar.module.css";
import { Row, Col } from "antd";

export default function ProgressBar(key) {
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
        <div className={styles.finished}>Form Completed. Download Below.</div>
      </div>
    );
  } else {
    console.error(`invalid activePane input ${paneKey}`);
  }

  return display;
}
