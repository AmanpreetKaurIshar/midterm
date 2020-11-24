
Survey
    .StylesManager
    .applyTheme("default");

var json = {
        "title": "Employer Reference Check",
        "pages": [
         {
          "name": "page1",
          "elements": [
           {
            "type": "text",
            "name": "question1",
            "title": "Applicant Name:"
           },
           {
            "type": "text",
            "name": "question2",
            "title": "Can you verify the job candidate’s most recent employment, their: position, salary, and responsibilities? Why did they leave that job?"
           },
           {
            "type": "text",
            "name": "question4",
            "title": "What makes the candidate a good fit for this job?"
           },
           {
            "type": "text",
            "name": "question5",
            "title": "What are the strengths and weaknesses of the applicant?"
           },
           {
            "type": "text",
            "name": "question10",
            "title": "reference  email:"
           },
           {
            "type": "text",
            "name": "question6",
            "title": "Is there anyone else you’d recommend I speak to?"
           },
           {
            "type": "text",
            "name": "question7",
            "title": "On a scale of 1 to 10, compared to other people you’ve hired, how would you rate the applicant?"
           },
           {
            "type": "checkbox",
            "name": "question3",
            "title": "How do you know the applicant ?",
            "choices": [
             {
              "value": "item1",
              "text": "friend"
             },
             {
              "value": "item2",
              "text": "colleague"
             },
             {
              "value": "item3",
              "text": "relative"
             }
            ],
            "hasOther": true
           },
           {
            "type": "matrix",
            "name": "question8",
            "title": "In each of the following areas, please check the box that you feel most accurately describes the applicant",
            "description": "Choices - NK (not known), 1 (low), 2 (good), 3 (very good), 4(excellent)",
            "columns": [
             "1",
             "2",
             " 3",
             "4",
             "NK"
            ],
            "rows": [
             "self descipline",
             "punctual",
             "hardworking",
             "Shows common sense/judgment",
             "teachable"
            ]
           },
           {
            "type": "matrix",
            "name": "question9",
            "title": "In each of the following areas, please check the box that you feel most accurately describes the applicant.",
            "description": "Choices - NK (not known), 1 (low), 2 (good), 3 (very good), 4(excellent)",
            "columns": [
             "1",
             "2",
             "3",
             "4",
             "NK"
            ],
            "rows": [
             "emotionally mature",
             "self confident",
             "able to handle pressure",
             "Has an accurate view of himself/herself"
            ]
           }
          ]
         }
        ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .location = "indexthanks.html";
    });

$("#surveyElement").Survey({ model: survey });