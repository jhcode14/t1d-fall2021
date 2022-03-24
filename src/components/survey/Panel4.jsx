import { Row, Col, Input, Checkbox } from "antd";
import style4 from "./Panel4.module.css";
import styles from "./DocCreation.module.css";

export default function Panel4(props) {
  return (
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
        <Col span={11} className={styles["shadow-border"]}>
          <p className={style4.boxTitle}>
            Your Doctor's Information <span style={{ color: "red" }}>*</span>
          </p>
          <Row>
            <div className={style4.boxText}>Name</div>
            <Input
              addonBefore="Dr. "
              placeholder="eg. Normal"
              defaultValue={props.get("drName")}
              onChange={(text, _) => {
                props.onChange("drName", text);
              }}
            />
          </Row>
          <br />
          <Row>
            <div className={style4.boxText}>Specialty</div>
            <Input
              placeholder="eg. endocrinologist"
              defaultValue={props.get("drSpec")}
              onChange={(text, _) => {
                props.onChange("drSpec", text);
              }}
            />
          </Row>
          <br />
          <Row>
            <div className={style4.boxText}>Affiliation</div>
            <Input
              placeholder="eg. Stanford Health"
              defaultValue={props.get("drAffi")}
              onChange={(text, _) => {
                props.onChange("drAffi", text);
              }}
            />
          </Row>
          <br />
          <Row>
            <Checkbox
              defaultChecked={props.get("drSign")}
              onChange={(state, _) => {
                props.onChangeBool("drSign", state);
              }}
            >
              Include signature space for this contact on the final document.
            </Checkbox>
          </Row>
        </Col>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Col span={11} className={styles["shadow-border"]}>
          <p className={style4.boxTitle}>
            Your Advocate's Information <span style={{ color: "red" }}>*</span>
          </p>
          <Row>
            <div className={style4.boxText}>Name</div>
            <Input
              placeholder="eg. Cassie Dune"
              defaultValue={props.get("avName")}
              onChange={(text, _) => {
                props.onChange("avName", text);
              }}
            />
          </Row>
          <br />
          <Row>
            <div className={style4.boxText}>Relationship to you</div>
            <Input
              placeholder="eg. spouse"
              defaultValue={props.get("avRela")}
              onChange={(text, _) => {
                props.onChange("avRela", text);
              }}
            />
          </Row>
          <br />
          <Row>
            <div className={style4.boxText}>Credentials (if any)</div>
            <Input
              placeholder="eg. Diabetes Educator"
              defaultValue={props.get("avCred")}
              onChange={(text, _) => {
                props.onChange("avCred", text);
              }}
            />
          </Row>
          <br />
          <Row>
            <Checkbox
              defaultChecked={props.get("avSign")}
              onChange={(state, _) => {
                props.onChangeBool("avSign", state);
              }}
            >
              Include signature space for this contact on the final document.
            </Checkbox>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
