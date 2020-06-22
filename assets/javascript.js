var quizDiv = document.getElementById('quiz');
var resultsDiv = document.getElementById('results')
var submitButton = document.getElementById('submit')
var timerEl = document.getElementById('countdown')

var myQuestions = [{
    question: "Who won the NFL MVP in 2019?",
    answers: {
        a: "Dak Prescott",
        b: "Lamar Jackson",
        c: "Nick Chubb",
        d: "Patrick Mahomes"
    },
    correctAnswer: "b"
},
{
    question: "Who won the Heisman Trophy in 2019",
    answers: {
        a: "Kyler Murray",
        b: "Justin Herbert",
        c: "Joe Burrow",
        d: "Tua Tagovailoa"
    },
    correctAnswer: "c"
},
{
    question: "Who won the most recent Super Bowl?",
    answers: {
        a: "San Francisco 49ers",
        b: "Kansas City Chiefs",
        c: "Denver Broncos",
        d: "Philadelphia Eagles",
    },
    correctAnswer: "b"
},
{
    question: "Who won the college football national championship?",
    answers: {
        a: "Alabama",
        b: "Clemson",
        c: "Wisconsin",
        d: "LSU",
    },
    correctAnswer: "d"
},
]

//for each question
function buildQuiz(){
    // variable to store the HTML output
    const output = [];
  
    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        // variable to store the list of possible answers
        const answers = [];
  
        // and for each available answer...
        for(letter in currentQuestion.answers){
  
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
  
    quizDiv.innerHTML = output.join('');
  }

function showResults() {
    const answerContainers = quizDiv.querySelectorAll('.answers');
    let numCorrect = 0;
    myQuestions.forEach ((currentQuestion, questionNumber) =>{
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        
        if(userAnswer ===currentQuestion.correctAnswer){
            numCorrect++;
            answerContainers[questionNumber].style.color = 'green'
        }
        else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

function countdown() {
    var timeLeft = 25;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
      timeLeft = timeLeft-1
      timerEl.textContent= timeLeft+ " seconds remaining."
      if (timeLeft <= 0) {
        clearInterval(timeInterval)
        displayMessage()
      }
    },1000);
  }



let numCorrect = 0;
submitButton.addEventListener('click', showResults);

countdown();
buildQuiz();
showResults();