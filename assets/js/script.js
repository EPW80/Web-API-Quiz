// question displyed to the user in the form of a function that contains a multidimensional array with inner array elements
var questions = [
  {
    question:
      "Which of the following methods can be used to display data in some form using Javascript?",
    answers: [
      { text: "document.write()", correct: false },
      { text: "console.log()", correct: false },
      { text: "window.alert()", correct: false },
      { text: "All of the above", correct: true },
    ],
  },
  {
    question: "What is the use of the <no script> tag in Javascript?",
    answers: [
      {
        text: "The contents are displayed by non-JS-based browsers",
        correct: true,
      },
      { text: "Clears all the cookie and cache", correct: false },
      { text: "Both A and B", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question:
      "Which of the following methods is used to access HTML elements using Javascript?",
    answers: [
      { text: "getElementbyID()", correct: false },
      { text: "getElementByClassName()", correct: false },
      { text: "Both A and B", correct: true },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "How can a datatype be declared to be a constant type?",
    answers: [
      { text: "const", correct: true },
      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "constant", correct: false },
    ],
  },
  {
    question:
      "When the switch statement matches the expression witht the given labels, how is the comparison done?",
    answers: [
      {
        text: "Both the datatype and the result of the expression are compared",
        correct: true,
      },
      {
        text: "Only the dataype of the expression is compared",
        correct: false,
      },
      { text: "Only the value of the expression is compared", correct: false },
      { text: "None of the above", correct: false },
    ],
  },

  {
    question: "The 3 basic object attributes in Javascript are: ",
    answers: [
      { text: "Class, prototype, object's parameters", correct: false },
      { text: "Class, prototype, object's extensible flag", correct: true },
      { text: "Class, parameters, false flag", correct: false },
      {
        text: "Classes, Native object, and interfaces of Objects extensible flag",
        correct: false,
      },
    ],
  },
];
