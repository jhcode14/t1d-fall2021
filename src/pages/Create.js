import React from "react";
import * as Survey from "survey-react";
//import CreatePDF from "./CreateDoc.js";


import jsPDF from 'jspdf';
function CreatePDF(InputList) {
  // Font sizes
  const normalSize = 12;
  const titleSize = 25;

  // X starting distance
  const XAlign = 23.11

  // Default format
  // 216mm x 279mm for Letter
  var doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'letter',
  });
  doc.setFont("times", "normal");
  doc.setFontSize(normalSize);

  // -----1 & 2 (non-static)----- header
  doc.text('Alexise Berousbrerg D.O.B 4/6/1974', 210.71, 7.23, {align: 'right'})
  doc.text('Last updated: 8/23/2021', 210.71, 12.51, {align: 'right'})

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

  var cY = 161.5;
  var boxSize = 5;
  // Checkbox + text
  cChecklist.map((text) => {
    doc.line(XAlign, cY, XAlign+boxSize, cY+boxSize);

    
  });

  // -----12.1----- box1 (left)

  // -----12.2----- box2 (right)

  // -----13----- user info footer


  
  
  // -----14----- page 2: additional info


  // Download pdf
  doc.save('T1D_CareDirective.pdf')
}

//Survey
    //.StylesManager
    //.applyTheme("modern");

var surveyJSON = {
  title: "Type 1 Diabeties Care Directive Form Creation",
  showProgressBar: "top",
  pages: [
    {
      name: "page1",
      elements: [
       {
        type: "paneldynamic",
        name: "General Information",
        templateElements: [
         {
          type: "text",
          name: "name",
          title: "Full Name",
          autoComplete: "name",
          placeHolder: "eg. Johnny Appleseed"
         },
         {
          type: "text",
          name: "birthdate",
          title: "Date of Birth",
          inputType: "date",
          autoComplete: "bdate"
         }
        ]
       },
       {
        type: "paneldynamic",
        name: "question4",
        startWithNewLine: false,
        templateElements: [
         {
          type: "text",
          name: "question3"
         },
         {
          type: "text",
          name: "question2"
         }
        ]
       }
      ]
     },
    {
      name: "page2",
      questions: [
        {
          type: "radiogroup",
          choices: ["Yes", "No"],
          isRequired: false,
          name: "mvvmUsing",
          title: "Do you use any MVVM framework?",
        },
        {
          type: "checkbox",
          choices: ["AngularJS", "KnockoutJS", "React"],
          hasOther: true,
          isRequired: false,
          name: "mvvm",
          title: "What MVVM framework do you use?",
          visibleIf: "{mvvmUsing} = 'Yes'",
        },
      ],
    },
    {
      name: "page3",
      questions: [
        {
          type: "comment",
          name: "about",
          title:
            "Please tell us about your main requirements for Survey library",
        },
      ],
    },
  ],
};

function sendDataToServer(sender) {
  var resultAsString = JSON.stringify(sender.data);
  alert(resultAsString);
}

<div id="surveyContainer"></div>;

function Create() {
  return (
    <React.Fragment>
      <head>
        <script src="https://unpkg.com/survey-react"></script>
        <link
          href="https://unpkg.com/survey-react/survey.min.css"
          type="text/css"
          rel="stylesheet"
        />
      </head>
      <Survey.Survey json={surveyJSON} onComplete={sendDataToServer} />

      <div>
        <button onClick={CreatePDF} type="primary">Download PDF</button>
      </div>
    </React.Fragment>
  );
}

export default Create;
