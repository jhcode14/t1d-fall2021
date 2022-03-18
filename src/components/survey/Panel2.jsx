import { Row, Col, Input, Checkbox } from "antd";
import { AiOutlineSearch } from "react-icons/ai";
import style2 from "./Panel2.module.css";
import styles from "./DocCreation.module.css";

export default function Panel2(props) {
  return (
    <div>
      <Row>
        <div className={styles.surveyTitle}>Your Diabetes Management Tools</div>
        <span className={styles.surveyText}>
          Include your comprehensive list of diabetes devices/apps (pump, CGM,
          apps) you rely on to help healthcare personnel understand which tools
          are critical in helping you manage your diabetes.
          <p style={{ color: "red" }}>* Required</p>
        </span>
      </Row>
      <Row>
        <Col span={11}>
          <div className={style2.questionTitle}>To administer insulin, I use:</div>
          <div className={styles["round-border"]}>
            <div className={style2.questionText}>Insulin Pen Brand</div>
            <Input prefix={<AiOutlineSearch />}></Input>
          </div>
          <div className={styles["round-border"]}>
            <div className={style2.questionText}>Insulin Pump Brand</div>
            <Input prefix={<AiOutlineSearch />}></Input>
          </div>
        </Col>
        <Col span={2}>
          <div className={styles["p2-divider"]}></div>
        </Col>
        <Col span={11}>
          <div className={style2.questionTitle}>To monitor my glucose levels, I use:</div>
          <div className={styles["round-border"]}>
            <div className={style2.questionText}>Continuous Glucose Monitor (Brand)</div>
            <Input prefix={<AiOutlineSearch />}></Input>
          </div>
          <div className={styles["round-border"]}>
            <div className={style2.questionText}>Software</div>
            <Input prefix={<AiOutlineSearch />}></Input>
          </div>
        </Col>
      </Row>
    </div>
  );
}
