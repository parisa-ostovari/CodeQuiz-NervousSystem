const startButton = document.querySelector('.controls')
const questionContainerEl = document.querySelector('#question-container')
 
startButton.addEventListener('click', startQuiz)

function startQuiz(){
    startButton.classList.add('hide')
    questionContainerEl.classList.remove('hide')
}

function selectAnswer(){

}