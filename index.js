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
              "Eating Food"
          ],
          answer: "Photosynthesis",
          factoid: "Organisms that use light for the energy needed to make their own food are called producers. In contrast, consumers are creatures that eat producers to get energy. While plants are the best-known producers, algae, cyanobacteria, and some protists also make sugar via photosynthesis."
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

// Start quiz button on start page to start quiz (complete)

const startQuiz = function() {
  $('#startbtn').on('click', function(event){
    $('.starting-page').hide();
    $('.main').show();
    populateQuestion();
  });
}

//shows question number and current score (complete)

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

//Populates the questions (complete)  If time and able, add JS for question images!!

function populateQuestion() {
    questionScoreFormat();
    const qOptHtml = $(`
    <form>
        <fieldset>
          <div id="alert-box">
            <div class="message">Great science wizard!<br><br>
              To unravel this scientific mystery an answer MUST be chosen!
              <button class="yes button">OK</button>
            </div>
          </div>
          <div class="box questionbox" id="questionbox">
            <legend class="question">${STORE.questions[q_num].question}</legend>
          </div>
          <div class="box optionsbox" id="optionsbox">
            <label for="option">
              <input type="radio" class="options" name="option" value="${STORE.questions[q_num].options[0]}">
              ${STORE.questions[q_num].options[0]}<br>
            </label>
            <label for="option">
              <input type="radio" class="options" name="option" value="${STORE.questions[q_num].options[1]}">
              ${STORE.questions[q_num].options[1]}<br>
            </label>
            <label for="option">
              <input type="radio" class="options" name="option" value="${STORE.questions[q_num].options[2]}">
              ${STORE.questions[q_num].options[2]}<br>
            </label>
            <label for="option">
              <input type="radio" class="options" name="option" value="${STORE.questions[q_num].options[3]}">
              ${STORE.questions[q_num].options[3]}<br>
            </label>
            <img class="questionImg"> 
            <input type="submit" id="submitbtn" class="button" value="Submit">
          </div>
        </fieldset>
    </form>`);
    $('.question-answer-section').html(qOptHtml);
    $('.answer-factoid-section').hide();
    $('#alert-box').hide();
}

// Alert button function

function functionAlert(msg, myYes) {
  const confirmBox = $('#alert-box');
  confirmBox.find('.message').text(msg);
  confirmBox.find('.yes').unbind().on('click', function(event) {
    event.preventDefault();
    confirmBox.hide();
  });
  confirmBox.find('.yes').click(myYes);
  confirmBox.show();
}

// Answer submission button, whether answer correct or not, and factoid (complete)

const submitAnswer = function() {
    $('.question-answer-section').on('submit', function(event){
        event.preventDefault();
      let answerSelected = $("input[name='option']:checked").val();
      let answerCorrect = STORE.questions[q_num].answer;
      if(!answerSelected){
          functionAlert();
          return;
      }
      $('.question-answer-section').hide();
      $('.answer-factoid-section').show();
      if(answerSelected == answerCorrect){
        score++;
          correctAnswer();
      }
      else{
          wrongAnswer();
      }
    });
}

//correct and incorrect answers, factoids formatted (complete)

function correctAnswer() {
    const corAnsFactHtml = $(`
    <h2>You got it!</h2>
    <img class="correctImg" src="images/Bill-nye.jpg" alt="Bill Nye The Science Guy">
    <div class="correct-answer-container">
        <span class="correct-answer">${STORE.questions[q_num].answer}</span>
    </div>
    <div class="factoid-container">
        <span id="factoid">${STORE.questions[q_num].factoid}</span>
    </div>
    <input autofocus type="button" id="nextqbtn" class="button" value="Next Question">`);
    $('.answer-factoid-section').html(corAnsFactHtml);
}
  
function wrongAnswer() {
    const wroAnsFactHtml = $(`
    <h2>Incorrect!</h2>
    <img class="wrongImg" src="images/Neil-tyson.jpg" alt="Double facepalming Neil Degrasse Tyson">
    <h2 class="part-two">The correct answer is:</h2>
    <div class="correct-answer-container">
        <span class="correct-answer">${STORE.questions[q_num].answer}</span>
    </div>
    <div class="factoid-container">
        <span id="factoid" class="factoid">${STORE.questions[q_num].factoid}</span>
    </div>
    <input autofocus type="button" id="nextqbtn" class="button" value="Next Question">`);
$('.answer-factoid-section').html(wroAnsFactHtml);
}
  
// Moving through questions (complete)

function questionUpdate() {
  if(q_num+1 < STORE.questions.length){
    q_num++;
  } else {
    $('main').hide();
    resultFactImg();
  }
}

// Next question button (complete)
  
function nextQuestion() {
    $('.answer-factoid-section').on('click', 
    '#nextqbtn', function(){
        $('.answer-factoid-section').hide();
        questionUpdate();
        $('.question-answer-section').show();
        populateQuestion();
    });
}
  

//end of quiz results and start over option (complete)

function resultFactImg() {
  $('.final-page-section').show();
  let resultsForm = $(`
    <h2 class="result-end">Congratulations!</h2>
    <img class="wrongImg" src="images/results-image.jpg" alt="stick figure excitedly holding science implements">
    <p class="p-one">You survived the quiz of science!<br><br> Now you are a science trivia GURU!</p> 
    <div class="end-page">
      <ul class="final-score">
        <li class="center">Final Score: <br>
          <span class="score">${score}</span>/${STORE.questions.length}
        </li>
      </ul>
      <p class="p-two">See what you've learned and try again!</p>
      <input type="button" id="restartbtn" class="button" value="Restart Quiz">
    </div>`);
  $('.final-page-section').html(resultsForm);
}

//restart quiz (complete)

function newQuiz() {
  $('.final-page-section').on('click', 
  '#restartbtn', function(event) {
    $('main').hide();
    $('.starting-page').show();
    $('.final-page-section').hide();
    score = 0;
    q_num = 0;
  });
}

//handler for managing quiz functions (complete)

function appControls() {
  startQuiz();
  populateQuestion();
  functionAlert();
  submitAnswer();
  nextQuestion();
  questionScoreFormat();
  resultFactImg();
  newQuiz();
}

$(appControls());