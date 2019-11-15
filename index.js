// Start quiz button on start page and on end page to start quiz

function startQuiz() {
    $('#startbtn').on('click', function(event){
      populateQuestion();
    }
    );
}

//