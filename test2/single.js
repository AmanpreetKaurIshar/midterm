
Survey
    .StylesManager
    .applyTheme("default");

var json = 
    { "title": "Employer Reference Check",
        "pages": [
         {
          "name": "page1",
          "elements": [
           {
            "type": "text",
            "name": "question1",
            "title": "applicant name:"
           },
           {
            "type": "text",
            "name": "question2",
            "title": "Can you verify the job candidate’s most recent employment, their: position, salary, and responsibilities? Why did they leave that job?"
           }
          ]
         },
         {
          "name": "page2",
          "elements": [
           {
            "type": "text",
            "name": "question3",
            "title": "What makes the candidate a good fit for this job?"
           },
           {
            "type": "text",
            "name": "question4",
            "title": "What are the strengths and weaknesses of the applicant?"
           }
          ]
         },
         {
          "name": "page3",
          "elements": [
           {
            "type": "text",
            "name": "question5",
            "title": "reference  email:"
           },
           {
            "type": "text",
            "name": "question6",
            "title": "Is there anyone else you’d recommend I speak to?"
           }
          ]
         },
         {
          "name": "page4",
          "elements": [
           {
            "type": "text",
            "name": "question7",
            "title": "On a scale of 1 to 10, compared to other people you’ve hired, how would you rate the applicant?"
           },
           {
            "type": "checkbox",
            "name": "question8",
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
           }
          ]
         },
         {
          "name": "page5",
          "elements": [
           {
            "type": "matrix",
            "name": "question9",
            "title": "In each of the following areas, please check the box that you feel most accurately describes the applicant",
            "description": "Choices - NK (not known), 1 (low), 2 (good), 3 (very good), 4(excellent)\"",
            "columns": [
             "1",
             "2",
             "3",
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
            "name": "question10",
            "title": "In each of the following areas, please check the box that you feel most accurately describes the applicant.",
            "description": "Choices - NK (not known), 1 (low), 2 (good), 3 (very good), 4(excellent)\"",
            "columns": [
             " 1",
             " 2",
             "3",
             "4",
             "NK"
            ],
            "rows": [
             "Emotionally mature",
             "Self Confident",
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
        document.location = "singlethanks.html";
    });

$("#surveyElement").Survey({ model: survey });