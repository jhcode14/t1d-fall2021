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
        <Col span={12}>
          <p>
            Your Doctor's Information <span style={{ color: "red" }}>*</span>
          </p>
          <div>Name</div>
          <Input
            placeholder="eg. Dr. Normal"
            defaultValue={props.get("drName")}
            onChange={(text, _) => {
              props.onChange("drName", text);
            }}
          />
          <div>Specialty</div>
          <Input
            placeholder="eg. endocrinologist"
            defaultValue={props.get("drSpec")}
            onChange={(text, _) => {
              props.onChange("drSpec", text);
            }}
          />
          <div>Affiliation</div>
          <Input
            placeholder="eg. Stanford Health"
            defaultValue={props.get("drAffi")}
            onChange={(text, _) => {
              props.onChange("drAffi", text);
            }}
          />
          <Checkbox
            defaultChecked={props.get("drSign")}
            onChange={(state, _) => {
              props.onChangeBool("drSign", state);
            }}
          >
            Include signature space for this contact on the final document.
          </Checkbox>
        </Col>
        <Col span={12}>
          <p>
            Your Advocate's Information <span style={{ color: "red" }}>*</span>
          </p>
          <div>Name</div>
          <Input
            placeholder="eg. Cassie Dune"
            defaultValue={props.get("avName")}
            onChange={(text, _) => {
              props.onChange("avName", text);
            }}
          />
          <div>Relationship to you</div>
          <Input
            placeholder="eg. spouse"
            defaultValue={props.get("avRela")}
            onChange={(text, _) => {
              props.onChange("avRela", text);
            }}
          />
          <div>Credentials (if any)</div>
          <Input
            placeholder="eg. Diabetes Educator"
            defaultValue={props.get("avCred")}
            onChange={(text, _) => {
              props.onChange("avCred", text);
            }}
          />
          <Checkbox
            defaultChecked={props.get("avSign")}
            onChange={(state, _) => {
              props.onChangeBool("avSign", state);
            }}
          >
            Include signature space for this contact on the final document.
          </Checkbox>
        </Col>
      </Row>
    </div>
  );
}
