import React from "react";
import jsPDF from "jspdf";
import { Button } from "antd";

//borrow from progress bar
import styles from "./ProgressBar.module.css";

/*
    Unit conversion sample:
    final form: 476.77px x 617px
    jspdf: 216mm x 279mm
    (Ratio is exactly the same)

    Header:
    align top: 9.35px/617px * 279mm = 4.23mm
    align right: 216mm - (476.77px - 286.69px - 178.4px)/476.77px * 216mm = 210.71mm
    text size: 10.13px/476.77px * 216mm = 4.58938mm
*/
async function CreatePDF(data) {
  // Default format
  // Assuming 216mm x 279mm for Letter
  var doc = new jsPDF({
    orientation: "p",
    unit: "mm",
    format: "letter",
  });

  // Font sizes
  const normalSize = 12;
  const titleSize = 25;

  // X starting distance
  const XAlign = 23.11;
  // Page height
  const YMaxHeight = 279;

  doc.setFont("times", "normal");
  doc.setFontSize(normalSize);

  // -----HEADER----- (1)
  const headerLineX = 210.71;
  const headerL1Y = 7.23;
  const headerL2Y = 12.51;

  const d = new Date();
  const headerLine1 = `${data.name} D.O.B ${data.dobY}/${data.dobM}/${data.dobD}`;
  const headerLine2 = `Last updated: ${d.getFullYear()}/${d.getMonth()}/${d.getDate()}`;
  doc.text(headerLine1, headerLineX, headerL1Y, { align: "right" });
  doc.text(headerLine2, headerLineX, headerL2Y, { align: "right" });

  // -----FOOTER----- (2)
  const footerNameY = 279 - 20;
  const footerUpdateY = 279 - 15;

  // to be changed
  const footerName = `${data.name}`;
  const footerUpdate = headerLine2;

  doc.text(footerName, XAlign, footerNameY);
  doc.text(footerUpdate, XAlign, footerUpdateY);

  // -----3-----
  doc.setFont("times", "bold");
  doc.setFontSize(titleSize);
  doc.text("Type I Diabetes Care Directive", 108, 32.56, { align: "center" });

  // -----4 (non-static)----- Endorsed text below title
  doc.setFont("times", "normal");
  doc.setFontSize(normalSize);
  const endorsed = data.drName ? `Endorsed by Dr.${data.drName}` : "";
  doc.text(endorsed, 108, 40.12, { align: "center" });

  // -----5----- Paragraph 1 starter
  doc.text("To whom it may concern:", 23.11, 53.5);

  // -----6----- Paragraph 1
  const paragraph1 =
    "I have *Type 1 Diabetes Mellitus (INSULIN DEPENDENT)*. I require a constant delivery of insulin to live and manage my diesease. This document outlines key health information and my important wishes.";

  let p1X = XAlign;
  let p1Y = 58.05;
  var splitP1 = doc.splitTextToSize(paragraph1, 169);
  splitP1.map((texts) => {
    const p1LineArray = texts.split("*");
    p1LineArray.map((text, i) => {
      doc.setFont("times", "bold");
      if (i % 2 === 0) {
        doc.setFont("times", "normal");
      }
      doc.text(text, p1X, p1Y);
      p1X = p1X + doc.getStringUnitWidth(text) * (normalSize - 7.75);
    });
    p1X = XAlign;
    p1Y = p1Y + 4.55;
  });

  // -----7----- Paragraph 2
  const p2input1 = `HbA1c = ${data.hba1c}%`;
  const p2input2 = `${data.isf} mg/dl`;
  const p2input3 = "the CGM and pump";

  // final outline
  const paragraph2 =
    "My Type 1 Diabetes is well-managed (" +
    p2input1 +
    "). Keeping my blood sugar level between " +
    p2input2 +
    " is essential to avoid future complications. " +
    "*When I am sound of mind,* I am the best person to" +
    " manage my diabetes. I want to retain control of my management using " +
    p2input3 +
    `. *In other cases,* I wish my ${data.drSpec} Dr. ${data.drName} be consulted.`;

  let p2X = XAlign;
  let p2Y = 79;
  var splitP2 = doc.splitTextToSize(paragraph2, 169);
  splitP2.map((texts) => {
    const p2LineArray = texts.split("*");
    p2LineArray.map((text, i) => {
      doc.setFont("times", "bold");
      if (i % 2 === 0) {
        doc.setFont("times", "normal");
      }
      doc.text(text, p2X, p2Y);
      p2X = p2X + doc.getStringUnitWidth(text) * (normalSize - 7.75);
    });
    p2X = XAlign;
    p2Y = p2Y + 4.55;
  });

  // -----8----- splitting line 1
  doc.line(XAlign, 100, 216 - XAlign, 100);

  // -----9.1----- Diabeties Management (left)
  doc.setFont("times", "bold");
  doc.text("Diabetes Management", XAlign, 109.45);

  doc.setFont("times", "normal");
  let dbY = 114.1;

  const dmArray = [
    `Blood Glucose monitoring: ${data.cgm} that measures my blood sugar.`,
    `Insulin administration/pump: ${data.insulinPump}`,
    `Software: ${data.cgmSoftware}.`,
  ];
  dmArray.map((text) => {
    text = "  \u2022  " + text;
    var dmSplit = doc.splitTextToSize(text, 80);
    dmSplit.map((line, i) => {
      if (i !== 0) {
        line = "  " + line;
      }
      doc.text(line, XAlign, dbY);
      dbY = dbY + 4.55;
    });
  });

  // -----9.2----- Insulin Dosing (right)
  let idY = 114.1;
  const idX = 111.63;

  doc.setFont("times", "bold");
  doc.text("Insulin Dosing", idX, 109.45);

  doc.setFont("times", "normal");

  const idArray = [
    `Insulin type: ${data.laInsulin} (Long), ${data.raInsulin} (Fast)`,
    `Insulin Pen Brand: ${data.insulinPen}`,
    `Typical daily long acting insulin dose: ${data.ladose}`,
    `Insulin to carbohydrate ratio: 1 units to ${data.avgInsToCarb} g`,
    `Insulin sensitivity factor:  1 unit of insulin decrease bg by ${data.isf} mg/dL`,
  ];
  idArray.map((text) => {
    text = "  \u2022  " + text;
    var idSplit = doc.splitTextToSize(text, 85);
    idSplit.map((line, i) => {
      if (i !== 0) {
        line = "  " + line;
      }
      doc.text(line, idX, idY);
      idY = idY + 4.55;
    });
  });

  // -----10----- splitting line 2
  doc.line(XAlign, 143.65, 216 - XAlign, 143.65);
  // -----11----- Contacts
  doc.setFont("times", "bold");
  doc.text("Contacts", XAlign, 152.75);

  // const to be changed by data input
  const cInput1 = `my Endocrinologist Dr. ${data.drName} or Diabetes Advocate ${data.avName}`;

  var cChecklist = [];
  if (data.addInfoDefault1) {
    cChecklist.push("Remove my Dexcom/Ominipod device")
  }
  if (data.addInfoDefault2) {
    cChecklist.push("Change settings of my devices")
  }
  if (data.addInfoDefault3) {
    cChecklist.push("Put steroid or glucose in IV")
  }


  const cText =
    `Please contact my ${data.drSpec} Dr. ${data.drName}` +
    cInput1 +
    " if the following decisions are to be made: ";

  var cSplit = doc.splitTextToSize(cText, 169);
  doc.text(cSplit, XAlign, 159.3);

  var cY = 167.5;
  var boxSize = 6;

  // Checkbox + text
  doc.setFont("times", "normal");

  cChecklist.map((text) => {
    doc.line(XAlign, cY, XAlign + boxSize, cY);
    doc.line(XAlign, cY, XAlign, cY + boxSize);
    doc.line(XAlign + boxSize, cY, XAlign + boxSize, cY + boxSize);
    doc.line(XAlign, cY + boxSize, XAlign + boxSize, cY + boxSize);
    const cX = XAlign + boxSize + 3;
    const cYText = cY + 4.2;
    doc.text(text, cX, cYText);

    cY = cY + 2 + boxSize;

    // if exceed first page, go on next page
    if (cY >= YMaxHeight - 25) {
      doc.addPage();
      cY = 25; // restart height position

      // ADD HEADER/FOOTER to PAGE 2
      doc.text(headerLine1, headerLineX, headerL1Y, { align: "right" });
      doc.text(headerLine2, headerLineX, headerL2Y, { align: "right" });
      doc.text(footerName, XAlign, footerNameY);
      doc.text(footerUpdate, XAlign, footerUpdateY);
    }
  });

  // -----12-----
  var boxY = cY + 10;
  const boxXSize = 80;
  const boxYSize = 40;
  var box2XAlign = XAlign
  if (boxY + boxYSize >= YMaxHeight - 25) {
    doc.addPage();
    boxY = 25;

    // ADD HEADER/FOOTER to PAGE 2
    doc.text(headerLine1, headerLineX, headerL1Y, { align: "right" });
    doc.text(headerLine2, headerLineX, headerL2Y, { align: "right" });
    doc.text(footerName, XAlign, footerNameY);
    doc.text(footerUpdate, XAlign, footerUpdateY);
  }
  // -----12.1----- box1 (left)
  if(data.drSign){
    // box
    doc.line(XAlign, boxY, XAlign + boxXSize, boxY);
    doc.line(XAlign, boxY + boxYSize, XAlign + boxXSize, boxY + boxYSize);
    doc.line(XAlign, boxY, XAlign, boxY + boxYSize);
    doc.line(XAlign + boxXSize, boxY, XAlign + boxXSize, boxY + boxYSize);
    box2XAlign += 85;

    // words
    doc.text(`Dr. ${data.drName}`,XAlign+5, boxY+25)
    doc.setFont("times", "bold");
    doc.text(`${data.drSpec}, ${data.drAffi}`, XAlign+5, boxY+31)
    doc.setFont("times", "normal");
    doc.text(`${data.drCont}`,XAlign+5, boxY+37)
  }
  
  // -----12.2----- box2 (right)
  if(data.avSign){
    // box
    doc.line(box2XAlign, boxY, box2XAlign + boxXSize, boxY);
    doc.line(box2XAlign, boxY + boxYSize, box2XAlign + boxXSize, boxY + boxYSize);
    doc.line(box2XAlign, boxY, box2XAlign, boxY + boxYSize);
    doc.line(box2XAlign + boxXSize, boxY, box2XAlign + boxXSize, boxY + boxYSize);  
    
    // words
    doc.text(`${data.avName}`,box2XAlign+5, boxY+25)
    doc.setFont("times", "bold");
    doc.text(`${data.avCred}, ${data.avRela}`, box2XAlign+5, boxY+31)
    doc.setFont("times", "normal");
    doc.text(`${data.avCount}`,box2XAlign+5, boxY+37)
  }
  
  // -----13----- page +1: additional info
  doc.addPage();
  cY = 25; // restart height position

  // ADD HEADER/FOOTER to PAGE 2
  doc.text(headerLine1, headerLineX, headerL1Y, { align: "right" });
  doc.text(headerLine2, headerLineX, headerL2Y, { align: "right" });
  doc.text(footerName, XAlign, footerNameY);
  doc.text(footerUpdate, XAlign, footerUpdateY);
  
  // Beware of line extending out of page. Did not implement word wrap

  doc.text(data.addCommentsMed, XAlign, cY+5);
  doc.text(data.addCommentsDiet, XAlign, YMaxHeight/2+10);

  doc.setFont("times", "bold");
  doc.text("Medications", XAlign, cY)
  doc.text("Diet", XAlign, YMaxHeight/2+5)

  // Download pdf
  doc.save("T1D_CareDirective.pdf");
}

function CreatePdf(data) {
  return (
    <React.Fragment>
      <div className={styles.download}>
        <Button
          onClick={function () {
            CreatePDF(data.data);
          }}
          type="primary"
        >
          Download PDF
        </Button>
      </div>
    </React.Fragment>
  );
}

export default CreatePdf;
