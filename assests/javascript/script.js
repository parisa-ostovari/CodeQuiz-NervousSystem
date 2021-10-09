var timerEl = document.querySelector('#timer');
var openingPage = document.querySelector('#opening-page');
var startBtn = document.querySelector('#start-btn');
var nextBtn = document.querySelector('#next-btn');
var questionContainerEl = document.querySelector('#question-container');
var questionEl = document.querySelector('#question');
var choicesEl = document.querySelector('#choices');
var submitHighScoreContainer = document.querySelector('#submit-high-score');
var viewHighScoresContainer = document.querySelector('#view-high-scores');
var highScoresBtn = document.querySelector("#highscores");
var submitBtn = document.querySelector('#submit');
var userInitials = document.querySelector('#inputInitials');
var initialsEl = document.querySelector('#initials');
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

  
  function startQuiz() {
    secondsLeft = 90;
    startTimer();
    startBtn.classList.add('hide');
  openingPage.classList.add('hide');
  score = 0;
  questionContainerEl.classList.remove('hide');
  getNextQuestion();
}

// Timer Countdown
function startTimer() {
  timer = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = 'Time left: ' + secondsLeft + ' sec';
    if (secondsLeft <= 0) {
      sendMessage();
    }
  }, 1000);
}

function sendMessage() {
  timerEl.textContent = 'Quiz Over';
  questionContainerEl.classList.add('hide');
  submitHighScoreContainer.classList.remove('hide')
  var finalScore = document.querySelector('#finalScore')
  finalScore.textContent = secondsLeft;
  clearInterval(timer);
}

function clear () {
  localStorage.clear();
  window.location.reload();
}

function resetApp () {
  window.location.reload();
  
}

function getNextQuestion() {
  showQuestion();
}

function showQuestion() {
  var question = questions[currentQuestionIndex];
  questionEl.innerHTML = '';
  questionEl.innerText = question.question;
  choicesEl.innerHTML = '';
  question.choices.forEach((answers) => {
    var button = document.createElement('button');
    button.innerText = answers;
    button.setAttribute('value', answers);
    button.classList.add('button');
    button.onclick = selectAnswer;
    choicesEl.appendChild(button);
  });
}

function selectAnswer() {
  if (this.value === questions[currentQuestionIndex].answer){
    console.log('right');
    alert("Answer is Correct");
  } else {
    console.log('wrong');
    alert("Answer is Incorrect");
    secondsLeft-= 10;
    timerEl.textContent = secondsLeft;
  }
  
  currentQuestionIndex++;
  
  if (currentQuestionIndex === questions.length){
      sendMessage()
  } else{
    showQuestion()
  }
}



// High Score
function viewHighScores () {

  //hide submit high score container
  submitHighScoreContainer.classList.add('hide');
  //show the view highscores container
  viewHighScoresContainer.classList.remove('hide');
  
  //get info saved in local storage
  var storedScores = JSON.parse(localStorage.getItem("initialValues")) || [];
  
  //sort from high to low
  storedScores.sort(function(a,b){
    return b.value - a.value
  })
  //loop through the array 
  storedScores.forEach(function(score){
    //create li element for each item
    var li = document.createElement('li');
    li.textContent = score.initials + ' - ' +score.value
    var ol = document.querySelector('#highScoreList')
    ol.appendChild(li)
  })
  
}

//Submit High Score
function submitHighScore () {

  if (userInitials.value !== '') {
    var highScoresArray = JSON.parse(localStorage.getItem('initialValues')) || [];
    
    let userInfo = {
      initials: userInitials.value.trim(),
      value: secondsLeft
    }
    highScoresArray.push(userInfo);
    localStorage.setItem("initialValues", JSON.stringify(highScoresArray));
    
    viewHighScores();
  }
  
}

function viewHighScoresList () {
  
  //hide submit high score container
  submitHighScoreContainer.classList.add('hide');
  openingPage.classList.add("hide");
  questionContainerEl.classList.add("hide");
  //show the view highscores container
  viewHighScoresContainer.classList.remove('hide');
  
  //get info saved in local storage
  var storedScores = JSON.parse(localStorage.getItem("initialValues")) || [];
  
  //sort from high to low
  storedScores.sort(function(a,b){
    return b.value - a.value
  })
  //loop through the array 
  storedScores.forEach(function(score){
    //create li element for each item
    var li = document.createElement('li');
    li.textContent = score.initials + ' - ' +score.value
    var ol = document.querySelector('#highScoreList')
    ol.appendChild(li)
  })
}




// Button clicks
startBtn.onclick = startQuiz;
submitBtn.onclick = submitHighScore;
highScoresBtn.onclick = viewHighScoresList;
document.querySelector('#restart').onclick = resetApp;
document.querySelector('#clearHighScores').onclick = clear;