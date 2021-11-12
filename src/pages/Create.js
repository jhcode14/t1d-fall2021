import React from "react";
import * as Survey from "survey-react";
//import CreatePDF from "./CreateDoc.js";


import jsPDF from 'jspdf';
function CreatePDF(InputList) {
  // Default format
  // 216mm x 279mm for Letter
  var doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'letter',
  });
  doc.setFont("times", "normal");
  doc.setFontSize(10);
  doc.text('Alexise Berousbrerg D.O.B 4/6/1974', 210.71, 4.23, {align: 'right'})
  doc.text('Last updated: 8/23/2021', 210.71, 9.51, {align: 'right'})
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
