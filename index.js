"use strict";

//Questions and answers section

const STORE = {
  questionIndex: 0,
  score: 0,
  questions: [//1
      {
          question: 'Which element is the most electronegative on the periodic table?',
          options:[
              "Magnesium",
              "Fluorine",
              "Argon",
              "Barium"
          ],
          answer: "Flourine",
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

// Start quiz button on start page and on end page to start quiz

const startQuiz = function() {
  //debugger
  $('#startbtn').on('click', function(event){
    $('.starting-page').hide();
    populateQuestion();
  });
}

//shows question number and current score

function questionScoreFormat() {
  $(`
  <ul class="question-score">
    <li class="top">Question:
      <span class="questionNumber">${STORE.questionIndex.length}</span>/8
    </li>
    <li class="top">Score:
      <span class="score">${STORE.score.length}</span>/8
    </li>
  </ul>`).appendTo('.question-score-container');
}

//Populates the questions

function populateQuestion() {
  if(STORE.questionIndex < STORE.questions.length) {
    //$('.questionbox', '.optionsbox').show();
    return questionFormat();
  } else {
    //$('.final').append(resultFactImg());  Use appendTo here as well for format of final page!!
  };
}

function questionFormat() {
  let format = $( `
    <form>
      <fieldset>
        <legend class="question">${STORE.questions[STORE.questionIndex].question}</legend>
      </fieldset>
    </form>`);

  let fieldSelector = $(format).find('fieldset');
//debugger
  STORE.questions[STORE.questionIndex].options.forEach(function(answerValue, answerIndex){
    $(`
    <label for="${answerIndex}">
      <input class="checkbox" type="checkbox" id="${answerIndex}"
      value="${answerValue}" name="answer" required>
      <span>${answerValue}</span>
    </label>`).appendTo(fieldSelector);
  });
  $(`<input type="button" id="submitbtn" value="Submit">`).appendTo(fieldSelector);
  return format;
    
}

//handler for managing quiz functions

function appControls() {
  startQuiz();
  populateQuestion();
  questionFormat();
}

$(appControls());


//Populates the answer options for the questions

/*function populateOptions() {
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