import { Row, Col, Input } from "antd";
import style6 from "./Panel6.module.css";
import styles from "./DocCreation.module.css";

const { TextArea } = Input;

export default function Panel6(props) {
  return (
    <div>
      <Row>
        <Col>
          <h4 className={styles.surveyTitle}>Additional Information</h4>
          <p className={styles.surveyText}>
            Any information in this section will be listed on a second page, so
            your document will be a total of two pages.
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
            defaultValue={props.get("addCommentsMed")}
            onChange={(text, _) => {
              props.onChange("addCommentsMed", text);
            }}
          ></TextArea>
          <div className={styles.additionalInfoTitle}>Diet</div>
          <TextArea
            rows={4}
            placeholder="Example “I have celiac, which means I cannot consume wheat ... ”"
            defaultValue={props.get("addCommentsDiet")}
            onChange={(text, _) => {
              props.onChange("addCommentsDiet", text);
            }}
          ></TextArea>
        </Col>
      </Row>
    </div>
  );
}
