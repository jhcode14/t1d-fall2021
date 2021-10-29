import React from "react";
import * as Survey from "survey-react";

var surveyJSON = {
  title: "Type 1 Diabeties Care Directive Form Creation",
  pages: [
    {
      name: "page1",
      questions: [
        {
          type: "radiogroup",
          choices: ["Yes", "No"],
          isRequired: true,
          name: "frameworkUsing",
          title: "Do you use any front-end framework like Bootstrap?",
        },
        {
          type: "checkbox",
          choices: ["Bootstrap", "Foundation"],
          hasOther: true,
          isRequired: true,
          name: "framework",
          title: "What front-end framework do you use?",
          visibleIf: "{frameworkUsing} = 'Yes'",
        },
      ],
    },
    {
      name: "page2",
      questions: [
        {
          type: "radiogroup",
          choices: ["Yes", "No"],
          isRequired: true,
          name: "mvvmUsing",
          title: "Do you use any MVVM framework?",
        },
        {
          type: "checkbox",
          choices: ["AngularJS", "KnockoutJS", "React"],
          hasOther: true,
          isRequired: true,
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
      <Survey.Survey json={surveyJSON} onComplete={sendDataToServer} />,
      document.getElementById("surveyContainer")
    </React.Fragment>
  );
}

export default Create;
