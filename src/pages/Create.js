import React from "react";
import * as Survey from "survey-react";

Survey
    .StylesManager
    .applyTheme("modern");

var surveyJSON = {
  title: "Type 1 Diabeties Care Directive Form Creation",
  "showProgressBar": "top",
  pages: [
    {
      name: "page1",
      questions: [
        {
          type: "text",
          isRequired: false,
          name: "Name",
          placeHolder: "e.g. Jonney Appleseed",
          title: "Full Name",
        },
        {
          type: "text",
          inputType: "date",
          hasOther: true,
          isRequired: false,
          name: "birthdate",
          title: "Date of Birth",
          autoComplete: "bdate",
        },
      ],
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
    </React.Fragment>
  );
}

export default Create;
