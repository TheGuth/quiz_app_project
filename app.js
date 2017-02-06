
// Requirements: 

// 1. Users start on a screen where they can click a button to 
// start the quiz.

// 2. Once the game is started, users should be prompted 
// through a series of at least 5 multiple choice questions 
// which they can answer.

// 3. Questions are to be asked one after another, and 
// the users should only be able to view one question at a time.

// 4. Users should not be able to skip questions.

// 5. When viewing an individual question, users should also 
// be able to see which question they're on 
// (for instance, "7 out of 10") and their current 
// score ("5 correct, 2 incorrect").

// 6. When users submit an answer to a question, 
// they should first get feedback on if their answer was 
// correct or not.

// 7. If it's incorrect, they should be shown the correct answer. 
// Then they should be moved along to the next question.

// 8. After users have completed the final question, they 
// should be shown their overall score and be able to start a new game.


// Pseudo Code:

// possibly have z-index window pop up with you got it right, or you 
// got it wrong.

var state = {

  questions: [             // array of question objects
  ],

  correctAnswers: function() {

  },

  initializeQuestion: function() {

  },

  displayQuestionScreen: function() {

  },

  displayFinishedScreen: function() {

  }

}

function initializeEventListeners() {
  $('div').on('click', '.start-quiz-button', function() {
    console.log('world');
  });
}


var question1 = {
  question: "Who is the current NBA Champion",

  choices: ['Spurs', 'Cavaliers', 'Warriors', 'Thunder'],

  answer: 'Cavaliers'
}



$(function() {
  console.log('hello');
  initializeEventListeners();


});