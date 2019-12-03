"use strict";

//Questions and answers section

const STORE = {
  questions: [//1
      {
          question: 'Which element is the most electronegative on the periodic table?',
          options:[
              "Magnesium",
              "Fluorine",
              "Argon",
              "Barium"
          ],
          answer: "Fluorine",
          factoid: "Fluorine is the most electronegative element because it has 5 electrons in its 2p shell. The optimal electron configuration of the 2p orbital contains 6 electrons, so since fluorine is so close to ideal electron configuration, the electrons are held very tightly to the nucleus."
      },
      //2
      {
          question: "Who created the first double-helix DNA model?",
          options: [
              "James Watson & Sherlock Holmes",
              "Will Smith & John Legend",
              "James Watson & Francis Crick",
              "Nelly & Bow Wow"
          ],
          answer: "James Watson & Francis Crick",
          factoid: "In the early 1950s, American biologist James Watson and British physicist Francis Crick came up with their famous model of the DNA double helix."
      },
      //3
      {
          question: "What year was the Human Genome Project completed?",
          options: [
              "1997",
              "1979",
              "2015",
              "2003"
          ],
          answer: "2003",
          factoid: "In April 2003, researchers successfully completed the Human Genome Project, under budget and more than two years ahead of schedule."
      },
      //4
      {
          question: "What compound makes water?",
          options: [
              "H2O",
              "NaOH",
              "HCHHCOO",
              "H3O"
          ],
          answer: "H2O",
          factoid: "Made up of two elements, hydrogen and oxygen and chemical formula is H2O. It means two hydrogen molecules are bonded with one oxygen molecule. Water has three states, when liquid it is called water, when gas it is called vapor and when solid it is called ice."
      },
      //5
      {
          question: "Approximately what percentage an adult human body is water?",
          options: [
              "65%",
              "72%",
              "60%",
              "All of the above are possible"
          ],
          answer: "All of the above are possible",
          factoid: "Approximately 60% to over 72% of the human adult body is water. Generally, an adult male needs about 3 liters (3.2 quarts) per day while an adult female needs about 2.2 liters (2.3 quarts) per day."
      },
      //6
      {
          question: "What is the deepest place on earth?",
          options: [
              "Woodingdean Well",
              "Mariana Trench",
              "Kola Borehole",
              "Lake Superior"
          ],
          answer: "Kola Borehole",
          factoid: "The Kola Superdeep Borehole was just 9 inches in diameter, but at 40,230 feet (12,262 meters) reigns as the deepest hole. It took almost 20 years to reach that 7.5-mile depth—only half the distance or less to the mantle."
      },
      //7
      {
          question: "What is the process used by plants to get nutrients from the sun?",
          options: [
              "Mitosis",
              "Photosynthesis",
              "autosynthesis",
              "Eting Food"
          ],
          answer: "Photosynthesis",
          factoid: "Organisms that use light for the energy needed to make their own food are called producers. In contrast, consumers are creatures that eat producers to get energy. While plants are the best-known producers, algae, cyanobacteria, and some protists also make sugar via photosynthesis."
      },
      //8
      {
          question: "What is the name of the largest ocean?",
          options: [
              "Pacific",
              "Arctic",
              "Indian",
              "Atlantic"
          ],
          answer: "Pacific",
          factoid: "The Pacific ocean is the largest and home to locations like the ring of fire is located in the Pacific Ocean basin. A number of volcanoes form a ring around the basin which is where the name comes from. This area is home to many earthquakes due to volcanic activity and the movement of tectonic plates. The Pacific Ocean contains more than 75,000 volcanoes."
      },
  ],
};

// Global variables

let q_num = 0;
let score = 0;


// Start quiz button on start page to start quiz

const startQuiz = function() {
  $('#startbtn').on('click', function(event){
    $('.starting-page').hide();
    $('.main').show();
    populateQuestion();
  });
}

// Answer submission button, whether answer correct or not, and factoid

const submitAnswer = function() {
  $('#submitbtn').on('click', function(event){
    let answerSelected = $("input[name='option']:checked").val();
    let answerCorrect = STORE.questions[q_num].answer;
    let answerFactoid = STORE.questions[q_num].factoid;
    if(answerSelected == answerCorrect){
      correctAnswer();
    }
    else{
      wrongAnswer();
    }
    $('#nextqbtn').show();

    if(q_num <= STORE.questions.length){
      q_num++;
      nextQuestion();
    } // else {populate the final page here}
  });
}

// Moving through questions

function nextQuestion() {
  //q_num++;
  if(correctAnswer || wrongAnswer == true) {
  $('#nextqbtn').click(function(){
    populateQuestion();
    $('.question-answer-section').show();
  });
  } else {
    submitAnswer();
  }
}

// Functions for correct and incorrect answer

function correctAnswer() {
  $('.question-answer-section').hide();
  $('.correct-answer-container').prepend("<h2>You got it!</h2>");
  $('.correct-answer').html(STORE.questions[q_num].answer);
  $('#factoid').html(STORE.questions[q_num].factoid);
  score++;
  console.log(score);
}

function wrongAnswer() {
  $('.question-answer-section').hide();
  $('.correct-answer-container').prepend("<h2>Incorrect!<br> The correct answer is:</h2>");
  $('.correct-answer').html(STORE.questions[q_num].answer);
  $('#factoid').html(STORE.questions[q_num].factoid);
}

//shows question number and current score

function questionScoreFormat() {
  $('.question-score-container').html(`
  <ul class="question-score">
    <li class="top">Question:
      <span class="questionNumber">${q_num + 1}</span>/${STORE.questions.length}
    </li>
    <li class="top">Score:
      <span class="score">${score}</span>/${STORE.questions.length}
    </li>
  </ul>`);
}

//Populates the questions

function populateQuestion() {
  $('#nextqbtn').hide();
  $('#questionbox').html(STORE.questions[q_num].question);

  $('.radio').prop('checked', false);
  $('#option-1').val(STORE.questions[q_num].options[0]);
  $('#option-1-label').html(STORE.questions[q_num].options[0]);
  $('#option-2').val(STORE.questions[q_num].options[1]);
  $('#option-2-label').html(STORE.questions[q_num].options[1]);
  $('#option-3').val(STORE.questions[q_num].options[2]);
  $('#option-3-label').html(STORE.questions[q_num].options[2]);
  $('#option-4').val(STORE.questions[q_num].options[3]);
  $('#option-4-label').html(STORE.questions[q_num].options[3]);
}

//end of quiz results and start over option

/*function resultFactImg() {
  let resultsForm = $(`
  <section>
    <h2>Congratulations!</h2> 
    <div class="end-page">
      <ul class="final-score">
        <li class="center">Final Score:
          <span class="score">0</span>/8
        </li>
      </ul>
      <p>See what you've learned and try again!</p>
      <input type="button" id="startbtn" value="Start Quiz">
    </div>   
  </section>`
  );
  STORE.currentQuestion = 0;
  Store.score = 0;
  $("main").html(resultsForm);
}
//restart quiz
function newQuiz() {
  $('body').on('click', '#againbtn', (event) => {
    populateQuestion();
  });
}*/

//handler for managing quiz functions

function appControls() {
  startQuiz();
  populateQuestion();
  submitAnswer();
  nextQuestion();
  questionScoreFormat();
}

$(appControls());