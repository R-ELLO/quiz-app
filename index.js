"use strict";

// Start quiz button on start page and on end page to start quiz

function startQuiz() {
    $('#startbtn').on('click', function(event){
      populateQuestion();
    }
    );
}

//shows question number and current score

fuction questionScoreTracker() {
  const tracking = $(
    `<ul>
      <li id="q-answered">Question Number: 
        ${STORE.currentQuestion + 1}/${STORE.questions.length}
      </li>
      <li id="q-score">Score: 
        ${STORE.score}/${STORE.questions.length}
      </li>  
    </ul>`
  );
  $(".question-score").html(tracking);
}

//Populates the questions

function populateQuestion() {
  let question = STORE.questions[STORE.currentQuestion];
  questionScoreTracker();
  const questionFormat = $(`
    <div>
      <Form class="questions-form">
        <fieldset>
          <div class="box question">
            <legend>${question.question}</legend>
          </div>

          <div class="box options">
            <div class="quiz-options"></div>
          </div>

          <div class="box buttons">
            <input type="submit" id="answer" value="Submit">
            <input type="button" id="next-question" value="Next">
          </div>
        </fieldset>
      </Form>
    </div>`
  );
  $("main").html(questionFormat);
  populateOptions();
  $("#next-question").hide();
}

//Populates the answer options for the questions

function populateOptions() {
  let question =  STORE.questions[STORE.currentQuestion];
  for(let i=0; 1<question.options.length; i++){
    $('.quiz-options').append(
      `<input type="checkbox" name="options" id="option${i+1}">
      <label for="option${i+1}"> ${question.options[i]}</label>
      <span id="q-r${i+1}"></span>`
    );
  }
}

//correct answer, factoid, and image section

function optionControls() {
  $('body').on("submit", '.questions-form', function(event) {
    event.preventDefault();
    let activeQuest = STORE.questions[store.currentQuestion];
    let chosenOption = $("input[name=option]:checked").val();
    if (!chosenOption) {
      alert("Choose and option");
      return;
    }

    let id_num = activeQuest.options.findIndex(i => i ===
      chosenOption);
      let id = "#q-r" + ++id_num;
      $('span').removeClass("right-answer wrong-answer");
      if(chosenOption === activeQuest.answer) {
        STORE.score++;
        $(`${id}`).append(`Great Job!`);
        $(`${id}`).addClass("right-answer");
      }
      else{
        $(`${id}`).append(`Nice Try <br> The correct answer is "${
          cu
        activeQuest.answer}"`);
        $(`${id}`).addClass("wrong-answer");
      }

      STORE.activeQuest++;
      $("#q-score").text(`Your Score: ${STORE.score}/
      ${STORE.questions.length}`);
      $('#answer').hide();
      $("input[type=button]").attr('disabled', true);
      $('#next-question').show();
  });
}

//end of quiz results and start over option

//checking for quiz end
function questionControls() {
  $('body').on('click', '#next-question', (event) => {
    STORE.currentQuestion === STORE.questions.length?resultFactImg()
    : populateQuestion();
  });
}

function resultFactImg() {
  let resultsForm = $(`
    <div class="results">
      <form id="restart-quiz">
        <fieldset>
          <div class="box">
            <legend>Final Score: ${STORE.score}/
            ${STORE.questions.length}</legend>
          </div>

          <div class="box">
            <input type="button" id="againbtn" value="Try Again">
          </div>
        </fieldset>
      </form>
    </div>`
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
}

function quizAppControls() {
  startQuiz();
  questionControls();
  optionControls();
  newQuiz();
}

$(quizAppControls);