var openingPage = document.querySelector('#opening-page')
var startBtn = document.querySelector('#start-btn')
var nextBtn = document.querySelector('#next-btn')
var questionContainerEl = document.querySelector('#question-container')
var questionEl = document.querySelector('#question')
var answerButtonsEl = document.querySelector('#answer-btn')

let shuffledQuestions, currentQuestionIndex

startBtn.addEventListener('click', startQuiz)
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startQuiz() {
    startBtn.classList.add('hide')
    openingPage.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerEl.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetstate()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('button')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsEl.appendChild(button)
    })
}

// Start/Next Buttons

function resetstate() {
    nextButton.classList.add('hide')
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild
        (answerButtonsEl.firstChild)
    }
}

function selectAnswer(e){
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsEl.children).forEach(button => {
        setStatusClass(button,button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex +1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = "Quiz Completed"
        startButton.classList.remove('hide')
    }
}

//Quiz Answer Function

function setStatusClass (element, correct) {
    clearStatusClass (element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
 



// Quiz Questions
var questions = [
    {
        question: 'Which cranial nerve controls facial expression?',
        answers: [
            { text: 'Cranial Nerve 2', correct: false },
            { text: 'Cranial Nerve 7', correct: true },
            { text: 'Cranial Nerve 5', correct: false },
            { text: 'Cranial Nerve 6', correct: false },
        ]
    },
    {
        question: 'Which cranial nerve controls the movement of the tongue?',
        answers: [
            { text: 'Cranial Nerve 4', correct: false },
            { text: 'Cranial Nerve 8', correct: false },
            { text: 'Cranial Nerve 10', correct: false },
            { text: 'Cranial Nerve 12', correct: true }
        ]
    },
    {
        question: 'What does the Abducens nerve innervate?',
        answers: [
            { text: 'Abducts the eye', correct: true },
            { text: 'Moves the eye medially and down', correct: false },
            { text: 'Elevates the upper eyelid', correct: false },
            { text: 'Swallowing', correct: false }
        ]
    },
    {
        question: 'The Ulnar Nerve moves through which spinal cord segments',
        answers: [
            { text: 'C5, C6', correct: false },
            { text: 'L2, L3, L4', correct: false },
            { text: 'C8, T1', correct: true },
            { text: 'C6, C7, C8', correct: false }
        ]
    },
    {
        question: 'The Sciatic Nerve innervates through which muscle',
        answers: [
            { text: 'Hamstrings', correct: true },
            { text: 'Quadriceps Femoris', correct: false },
            { text: 'External Rotators', correct: false },
            { text: 'Plantar Flexors', correct: false }
        ]
    }
]