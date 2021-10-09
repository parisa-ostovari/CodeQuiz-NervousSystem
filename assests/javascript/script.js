var timerEl = document.querySelector('#timer');
var openingPage = document.querySelector('#opening-page');
var startBtn = document.querySelector('#start-btn');
var nextBtn = document.querySelector('#next-btn');
var questionContainerEl = document.querySelector('#question-container');
var questionEl = document.querySelector('#question');
var answerBtnEl = document.querySelector('#answer-btn');
var submitHighScore = document.querySelector('#submit-high-score');
var viewHighScores = document.querySelector('#view-high-scores');
var timer = 0;
var secondsLeft;
var score = 0;
var currentQuestionIndex = 0;

// Quiz Questions
var questions = [
    {
      question: 'Which cranial nerve controls facial expression?',
      choices: [
        'Cranial Nerve 2',
        'Cranial Nerve 7',
        'Cranial Nerve 5',
        'Cranial Nerve 6',
      ],
      answer: 'Cranial Nerve 7',
    },
    {
      question: 'Which cranial nerve controls the movement of the tongue?',
      choices: [
        'Cranial Nerve 4',
        'Cranial Nerve 12',
        'Cranial Nerve 8',
        'Cranial Nerve 10',
      ],
      answer: 'Cranial Nerve 12',
    },
    {
      question: 'What does the Abducens nerve innervate?',
      choices: [
        'Abducts the eye',
        'Moves the eye medially and down',
        'Elevates the upper eyelid',
        'Swallowing'
      ],
      answer: 'Abducts the eye',
    },
    {
      question: 'The Ulnar Nerve moves through which spinal cord segments',
      choices: [
        'C5, C6', 
        'L2, L3, L4', 
        'C8, T1',
        'C6, C7, C8',
      ],
      answer: 'C8, T1',

      },
   
    {
      question: 'The Sciatic Nerve innervates through which muscle',
      choices: [
        'Hamstrings',
        'Quadriceps Femoris', 
        'External Rotators', 
        'Plantar Flexors', 
      ],
      answer: 'Hamstrings',
    }
  ];

//Start Button
function startQuiz() {
  secondsLeft = 15;
  startTimer();
  startBtn.classList.add('hide');
  openingPage.classList.add('hide');

  questionContainerEl.classList.remove('hide');
  setNextQuestion();
}

// Timer Countdown
function startTimer() {
  timer = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = 'Time left: ' + secondsLeft + ' sec';

    if (secondsLeft === 0) {
      clearInterval(timer);
      sendMessage();
    }
  }, 1000);
}

function sendMessage() {
  timerEl.textContent = 'Quiz Over';
}

function setNextQuestion() {
  showQuestion();
}

function showQuestion() {
  var question = questions[currentQuestionIndex];
  questionEl.innerHTML = '';
  questionEl.innerText = question.question;
  answerBtnEl.innerHTML = '';
  question.choices.forEach((answers) => {
    var button = document.createElement('button');
    button.innerText = answers;
    button.setAttribute('value', answers);
    button.classList.add('button');
    button.onclick = selectAnswer;
    answerBtnEl.appendChild(button);
  });
}

function selectAnswer() {
  if (this.value !== questions[currentQuestionIndex].answer){
    console.log('wrong');
  } else {
    console.log('right');
  }
  
  currentQuestionIndex++;

  if (currentQuestionIndex === questions.length){
      sendMessage()
  } else{
      showQuestion()
  }
}

//Quiz Answer Function
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

startBtn.addEventListener('click', startQuiz);
