import { Row, Col, Checkbox } from "antd";
import style4 from "./Panel5.module.css";
import styles from "./DocCreation.module.css";

export default function Panel5(props) {
  return (
    <div>
      <Row>
        <div className={styles.surveyTitle}>Healthcare Wishes</div>
        <span className={styles.surveyText}>
          This lists your specific preferences and wishes you have in regards to
          diabetes care when you do not have a clear mind. These decisions
          should be consulted with your doctors (listed earlier).
        </span>
      </Row>
      <Row>
        <Col span={24}>
          {" "}
          <div className={styles.additionalInfoTitle}>
            What decisions should be consulted?
          </div>
          <Row>
            <Checkbox
              defaultChecked={props.get("addInfoDefault1")}
              onChange={(state, _) => {
                props.onChangeBool("addInfoDefault1", state);
              }}
            >
              Remove my (previously answered in Management Tools) device(s) listed
              earlier
            </Checkbox>
          </Row>
          <Row>
            <Checkbox
              defaultChecked={props.get("addInfoDefault2")}
              onChange={(state, _) => {
                props.onChangeBool("addInfoDefault2", state);
              }}
            >
              Change the settings of my device(s) listed earlier
            </Checkbox>
          </Row>
          <Row>
            <Checkbox
              defaultChecked={props.get("addInfoDefault3")}
              onChange={(state, _) => {
                props.onChangeBool("addInfoDefault3", state);
              }}
            >
              Put steroid or glucose in IV
            </Checkbox>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
