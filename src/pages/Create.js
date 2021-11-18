import React from "react";
import * as Survey from "survey-react";

import jsPDF from 'jspdf';

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
function CreatePDF(InputList) {
  // Default format
  // Assuming 216mm x 279mm for Letter
  var doc = new jsPDF({
    orientation: 'p',
    unit: 'mm',
    format: 'letter',
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

  const headerLine1 = 'Alexise Berousbrerg D.O.B 4/6/1974';
  const headerLine2 = 'Last updated: 8/23/2021';
  doc.text(headerLine1, headerLineX, headerL1Y, {align: 'right'})
  doc.text(headerLine2, headerLineX, headerL2Y, {align: 'right'})

  // -----FOOTER----- (2)
  const footerNameY = 279 - 20;
  const footerUpdateY = 279 - 15;

  // to be changed
  const footerName = "Alexise Berousbreg";
  const footerUpdate = "Last updated: " + "8/23/2021";
  
  doc.text(footerName, XAlign, footerNameY);
  doc.text(footerUpdate, XAlign, footerUpdateY);

  // -----3-----
  doc.setFont("times", "bold");
  doc.setFontSize(titleSize);
  doc.text('Type I Diabetes Care Directive', 108, 32.56, {align: 'center'});

  // -----4 (non-static)----- Endorsed text below title
  doc.setFont("times", "normal");
  doc.setFontSize(normalSize);
  doc.text('Endorsed by Dr. Emily Ahn', 108, 40.12, {align: 'center'})

  // -----5----- Paragraph 1 starter
  doc.text('To whom it may concern:', 23.11, 53.5);

  // -----6----- Paragraph 1
  const paragraph1 = "I have *Type 1 Diabetes Mellitus (INSULIN DEPENDENT)*. I require a constant delivery of insulin to live and manage my diesease. This document outlines key health information and my important wishes.";
  
  let p1X = XAlign
  let p1Y = 58.05
  var splitP1 = doc.splitTextToSize(paragraph1, 169);
  splitP1.map((texts) => {
    const p1LineArray = texts.split('*');
      p1LineArray.map((text, i) => {
        doc.setFont("times","bold");
        if (i % 2 === 0){
          doc.setFont("times", "normal");
        }
        doc.text(text, p1X, p1Y);
        p1X = p1X + doc.getStringUnitWidth(text) * (normalSize - 7.75);
      });
      p1X = XAlign;
      p1Y = p1Y + 4.55;
  });

  // -----7----- Paragraph 2
  // To be changed (non-static)
  const p2input1 = "HbA1c = 5.8%, 8/23/2021";
  const p2input2 = "80-150mg/dl";
  const p2input3 = "the CGM and pump";
  const p2input4 = "my endocrinologist Dr. Emily Ahn";

  // final outline
  const paragraph2 = "My Type 1 Diabetes is well-managed (" + p2input1 + 
                    "). Keeping my blood sugar level between " + p2input2 + 
                    " is essential to avoid future complications. " + 
                    "*When I am sound of mind,* I am the best person to" +
                    " manage my diabetes. I want to retain control of my management using " + 
                    p2input3 + ". *In other cases,* I wish " + p2input4 + " be consulted.";

  let p2X = XAlign;
  let p2Y = 79;
  var splitP2 = doc.splitTextToSize(paragraph2, 169);
  splitP2.map((texts) => {
    const p2LineArray = texts.split('*');
      p2LineArray.map((text, i) => {
        doc.setFont("times","bold");
        if (i % 2 === 0){
          doc.setFont("times", "normal");
        }
        doc.text(text, p2X, p2Y);
        p2X = p2X + doc.getStringUnitWidth(text) * (normalSize - 7.75);
      });
      p2X = XAlign;
      p2Y = p2Y + 4.55;
  });

  // -----8----- splitting line 1
  doc.line(XAlign, 100, 216-XAlign, 100);

  // -----9.1----- Diabeties Management (left)
  doc.setFont("times","bold");
  doc.text("Diabetes Management", XAlign, 109.45);

  doc.setFont("times","normal");
  let dbY = 114.1;

  // dmArray to be replaced with input array
  const dmArray = ["Blood Glucose monitoring: Dexcom G6 CGM that measures my blood sugar every 5 minutes.",
    "Insulin administration/pump: Omnipod",
    "Software: Nightscout that gives access to real time blood sugar."]
  dmArray.map((text) => {
    text = '  \u2022  ' + text;
    var dmSplit = doc.splitTextToSize(text, 80) ;
      dmSplit.map((line, i) =>{
        if (i !== 0){
          line = '  ' + line;
        }
        doc.text(line, XAlign, dbY);
        dbY = dbY + 4.55;
      });

  });

  // -----9.2----- Insulin Dosing (right)
  let idY = 114.1;
  const idX = 111.63

  doc.setFont("times","bold");
  doc.text("Insulin Dosing", idX, 109.45);

  doc.setFont("times","normal");
  

  // idArray to be replaced with input array
  const idArray = ["Insulin type: Lispro",
    "Basal Insulin rate: 0.8 - 1.0 U/h", 
    "Insulin to carbohydrate ratio: 1 units to 15 g",
    "Insulin sensitivity factor:  1 unit of insulin decrease bg by 35 mg/dL"];
  idArray.map((text) => {
    text = '  \u2022  ' + text;
    var idSplit = doc.splitTextToSize(text, 85);
      idSplit.map((line, i) =>{
        if (i !== 0){
          line = '  ' + line;
        }
        doc.text(line, idX, idY);
        idY = idY + 4.55;
      });

  });

  // -----10----- splitting line 2
  doc.line(XAlign, 143.65, 216-XAlign, 143.65);
  // -----11----- Contacts
  doc.setFont("times", "bold");
  doc.text("Contacts", XAlign, 152.75)

  // const to be changed by data input
  const cInput1 = "my Endocrinologist Dr. Ahn or Diabetes Advocate Mr.Do";

  const cChecklist = ["Remove my Dexcom/Ominipod device", "Change settings of my devices", "Put steroid on glucose in IV."]
  
  const cText = "Please contact " + cInput1 + " if the following decisions are to be made: "

  var cSplit = doc.splitTextToSize(cText, 169);
  doc.text(cSplit, XAlign, 159.3);

  var cY = 167.5;
  var boxSize = 6;

  // Checkbox + text
  doc.setFont("times","normal");

  cChecklist.map((text) => {
    doc.line(XAlign, cY, XAlign+boxSize, cY);
    doc.line(XAlign, cY, XAlign, cY+boxSize);
    doc.line(XAlign+boxSize, cY, XAlign+boxSize, cY+boxSize);
    doc.line(XAlign, cY+boxSize, XAlign+boxSize, cY+boxSize);
    const cX = XAlign + boxSize + 3;
    const cYText = cY + 4.2;
    doc.text(text, cX, cYText); 

    cY = cY + 2 + boxSize;

    // if exceed first page, go on next page
    if (cY >= YMaxHeight - 25){
      doc.addPage();
      cY = 25; // restart height position

      // ADD HEADER/FOOTER to PAGE 2
      doc.text(headerLine1, headerLineX, headerL1Y, {align: 'right'})
      doc.text(headerLine2, headerLineX, headerL2Y, {align: 'right'})
      doc.text(footerName, XAlign, footerNameY);
      doc.text(footerUpdate, XAlign, footerUpdateY);
    };
  });

  // -----12-----
  var boxY = cY;
  const boxXSize = 80;
  const boxYSize = 45;
  if (boxY+70 >= YMaxHeight - 25){
    doc.addPage();
    boxY = 25;

    // ADD HEADER/FOOTER to PAGE 2
    doc.text(headerLine1, headerLineX, headerL1Y, {align: 'right'})
    doc.text(headerLine2, headerLineX, headerL2Y, {align: 'right'})
    doc.text(footerName, XAlign, footerNameY);
    doc.text(footerUpdate, XAlign, footerUpdateY);
  }
  // -----12.1----- box1 (left)
  doc.line(XAlign, boxY, XAlign + boxXSize, boxY);
  doc.line(XAlign, boxY + boxYSize, XAlign + boxXSize, boxY + boxYSize);
  doc.line(XAlign, boxY, XAlign, boxY+ boxYSize);
  doc.line(XAlign + boxXSize, boxY, XAlign + boxXSize, boxY+ boxYSize);
  // -----12.2----- box2 (right)
  const box2XAlign = XAlign + 85;

  doc.line(box2XAlign, boxY, box2XAlign + boxXSize, boxY);
  doc.line(box2XAlign, boxY + boxYSize, box2XAlign + boxXSize, boxY + boxYSize);
  doc.line(box2XAlign, boxY, box2XAlign, boxY+ boxYSize);
  doc.line(box2XAlign + boxXSize, boxY, box2XAlign + boxXSize, boxY+ boxYSize);
  
  // -----13----- page 2: additional info


  // Download pdf
  doc.save('T1D_CareDirective.pdf')
}

function Create() {
  return (
    <React.Fragment>
      <div>
        <button onClick={CreatePDF} type="primary">Download PDF</button>
      </div>
    </React.Fragment>
  );
}

export default Create;
