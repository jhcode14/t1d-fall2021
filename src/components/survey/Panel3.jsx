import { Row, Col, Input, Checkbox } from "antd";
import style3 from "./Panel3.module.css";
import styles from "./DocCreation.module.css";

export default function Panel3(props) {
  return (
    <div>
      <Row>
        <div className={styles.surveyTitle}>Insulin Dosing</div>
        <span className={styles.surveyText}>
          Include your insulin dosing information for healthcare providers in
          case of an emergency or when you do not have a clear mind. Additional
          information can be added at the end of this creation process.
          <p style={{ color: "red" }}>* Required</p>
        </span>
      </Row>
      <Row>
        <Col span={11}>
          <div className={style3.questionTitle}>Rapid-Acting Insulin I use : </div>
          <Input
            placeholder="e.g. Lispro, Aspart"
            defaultValue={props.get("raInsulin")}
            onChange={(text, _) => {
              props.onChange("raInsulin", text)
            }} />
        </Col>
        <Col span={2}></Col>
        <Col span={11}>
          <div className={style3.questionTitle}>Long-Acting Insulin I use : </div>
          <Input 
            placeholder="e.g. Lispro, Aspart"
            defaultValue={props.get("laInsulin")}
            onChange={(text, _) => {
              props.onChange("laInsulin", text)
            }}
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={14}>
          <Row>
            <div className={style3.questionTitle}>What is your most recent HbA1c ?</div>
            <Input
              placeholder="HbA1c"
              defaultValue={props.get("hba1c")}
              onChange={(text, _) => {
                props.onChange("hba1c", text);
              }}
              addonAfter="%"
            />
          </Row>
          <br />
          <Row>
            <div className={style3.questionTitle}>My typical daily long acting insulin dose :</div>
            <Input
              placeholder="Value"
              defaultValue={props.get("ladose")}
              onChange={(text, _) => {
                props.onChange("ladose", text);
              }}
              addonAfter="U per day"
            />
          </Row>
          <br />
          <Row>
            <div className={style3.questionTitle}>My average Insulin to carbohydrate ratio :</div>
            <Input
              placeholder="Value"
              defaultValue={props.get("avgInsToCarb")}
              onChange={(text, _) => {
                props.onChange("avgInsToCarb", text);
              }}
              addonBefore="1 unit to "
              addonAfter="g"
            />
          </Row>
          <br />
          <Row>
            <div className={style3.questionTitle}>My insulin sensitivity factor (ISF) :</div>
            <Input
              placeholder="Value"
              defaultValue={props.get("isf")}
              onChange={(text, _) => {
                props.onChange("isf", text);
              }}
              addonBefore="1 unit of insulin decrease blood glucose by"
              addonAfter="mg/dL"
            />
          </Row>
          </Col>
        <Col></Col>
      </Row>
    </div>
  );
}
