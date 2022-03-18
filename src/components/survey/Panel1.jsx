import { Row, Col, Input } from "antd";
import style1 from "./Panel1.module.css";
import styles from "./DocCreation.module.css";

export default function Panel1(props) {
  return (
    <Row>
      <Col span={24}>
        <div className={styles.surveyTitle}>About You</div>
        <div className={styles.surveyText}>
          Include your standard information for identification purposes and
          HbA1c such that healthcare personnel can understand your diabetes
          management better. <p style={{ color: "red" }}>* Required</p>
        </div>
      </Col>
      <Col span={12} offset={6} className={styles["shadow-border"]}>
        <Row>
          <p className={style1.questionTitle}>Full Name<span style={{ color: "red" }}> *</span></p>
        </Row>
        <Row>
          <Input
            placeholder="eg. Johnny Appleseed"
            defaultValue={props.get("name")}
            onChange={(text, _) => {
              props.onChange("name", text);
            }}
          />
        </Row>
        <br />
        <Row>
          <p className={style1.questionTitle}>Date of Birth<span style={{ color: "red" }}> *</span></p>
        </Row>
        
        <Row gutter={8}>
          <Col span={7}>
            <Input
              placeholder="Month"
              defaultValue={props.get("dobM")}
              onChange={(text, _) => {
                props.onChange("dobM", text);
              }}
            />
          </Col>
          <Col span={6}>
            <Input
              placeholder="Day"
              defaultValue={props.get("dobD")}
              onChange={(text, _) => {
                props.onChange("dobD", text);
              }}
            />
          </Col>
          <Col span={6}>
            <Input
              placeholder="Year"
              defaultValue={props.get("dobY")}
              onChange={(text, _) => {
                props.onChange("dobY", text);
              }}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
