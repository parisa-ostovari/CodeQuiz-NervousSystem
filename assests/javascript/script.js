// var timerEl = document.querySelector("#timer");
// var openingPage = document.querySelector('#opening-page')
// var startBtn = document.querySelector('#start-btn')
// var nextBtn = document.querySelector('#next-btn')
// var questionContainerEl = document.querySelector('#question-container')
// var questionEl = document.querySelector('#question')
// var answerBtnEl = document.querySelector('#answer-btn')
// var submitHighScore = document.querySelector('#submit-high-score')
// var viewHighScores = document.querySelector('#view-high-scores')
// var timer = 0;
// var secondsLeft;
// var score = 0;

// let shuffledQuestions;
// var currentQuestionIndex;

// //Start Button
// function startQuiz() {
//     secondsLeft = 15;
//     startTimer ();
//     startBtn.classList.add('hide')
//     openingPage.classList.add('hide')
//     shuffledQuestions = questions.sort(() => Math.random() - .5)
//     currentQuestionIndex = 0
//     questionContainerEl.classList.remove('hide')
//     setNextQuestion()
    
// }

// startBtn.addEventListener("click", startQuiz);


// // Timer Countdown
// function startTimer() {
//   timer = setInterval(function() {
//     secondsLeft--;
//     timerEl.textContent = "Time left: " + secondsLeft + " sec";

//     if(secondsLeft === 0) {
//       clearInterval(timer);
//       sendMessage();
//     }
//   }, 1000);
// }

// function sendMessage() {
//     timerEl.textContent = "Quiz Over";
// }

// function setNextQuestion() {
//    //resetState()
//     showQuestion()
// }

// function showQuestion() {
//     var question = shuffledQuestions[currentQuestionIndex]
//    questionEl.innerHTML =""
//     console.log(question)
//     questionEl.innerText = question.question
//     answerBtnEl.innerHTML =""
//     question.choices.forEach(answers => {
//         var button = document.createElement('button');
//         button.innerText = answers
//         button.setAttribute('value', answers)
//         button.classList.add('button')
//         // if (answers.correct) {
//         //     button.dataset.correct = answers.correct
//         // }
//         button.onclick = selectAnswer
//         answerBtnEl.appendChild(button)
//     })
// }

// // Next Buttons
// function resetState() {
//     nextBtn.classList.add('hide')
//     while (answerBtnEl.firstChild) {
//         answerBtnEl.removeChild
//         (answerBtnEl.firstChild)
//     }
// }

// function selectAnswer(){
    
//     var selectedBtn = this.value
//   console.log(selectedBtn)

//     // var correct = selectedBtn.dataset.correct
//     console.log(shuffledQuestions[currentQuestionIndex])
//     if (selectedBtn !== shuffledQuestions[currentQuestionIndex].answers){
//         console.log('wrong')
//     }
//     else{console.log("right")}

//     // setStatusClass(document.body, correct)
//     // Array.from(answerBtnEl.children).forEach(button => {
//     //     setStatusClass(button,button.dataset.correct)
//     // })
//     // if (shuffledQuestions.length > currentQuestionIndex +1) {
//     //     nextBtn.classList.remove('hide')
//     // } else {
//     //     startBtn.innerText = "Quiz Completed"
//     //     startBtn.classList.remove('hide')
//     // }
//     currentQuestionIndex++
// }

// //Quiz Answer Function
// function setStatusClass (element, correct) {
//     clearStatusClass (element)
//     if (correct) {
//         element.classList.add('correct')
//     } else {
//         element.classList.add('wrong')
//     }
// }

// function clearStatusClass(element) {
//     element.classList.remove('correct')
//     element.classList.remove('wrong')
// }
 


// // Quiz Questions
// var questions = [
//     {
//         question: 'Which cranial nerve controls facial expression?',
//         choices: ['Cranial Nerve 2', 'Cranial Nerve 7', 'Cranial Nerve 5', 'Cranial Nerve 6'],
//         answers: 'Cranial Nerve 7'
//     },
//     // {
//     //     question: 'Which cranial nerve controls the movement of the tongue?',
//     //     answers: [
//     //         { text: 'Cranial Nerve 4', correct: false },
//     //         { text: 'Cranial Nerve 8', correct: false },
//     //         { text: 'Cranial Nerve 10', correct: false },
//     //         { text: 'Cranial Nerve 12', correct: true }
//     //     ]
//     // },
//     // {
//     //     question: 'What does the Abducens nerve innervate?',
//     //     answers: [
//     //         { text: 'Abducts the eye', correct: true },
//     //         { text: 'Moves the eye medially and down', correct: false },
//     //         { text: 'Elevates the upper eyelid', correct: false },
//     //         { text: 'Swallowing', correct: false }
//     //     ]
//     // },
//     // {
//     //     question: 'The Ulnar Nerve moves through which spinal cord segments',
//     //     answers: [
//     //         { text: 'C5, C6', correct: false },
//     //         { text: 'L2, L3, L4', correct: false },
//     //         { text: 'C8, T1', correct: true },
//     //         { text: 'C6, C7, C8', correct: false }
//     //     ]
//     // },
//     // {
//     //     question: 'The Sciatic Nerve innervates through which muscle',
//     //     answers: [
//     //         { text: 'Hamstrings', correct: true },
//     //         { text: 'Quadriceps Femoris', correct: false },
//     //         { text: 'External Rotators', correct: false },
//     //         { text: 'Plantar Flexors', correct: false }
//     //     ]
//     // }
// ]