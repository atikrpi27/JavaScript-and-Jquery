const startButtoon = document.querySelector('#start-btn');
const nextButtoon = document.querySelector('.next-btn');
const questionContainer = document.querySelector('.question-container')
const questionElement = document.querySelector('.question');
const answersElementButton = document.querySelector('.answer-button');

let suffleQuestions, currentQuestionIndex;


startButtoon.addEventListener('click', start);

function start() {
    startButtoon.classList.add('hide');
    suffleQuestions = question.sort(()=> Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainer.classList.remove('hide');
    nextQuestion();
}

function nextQuestion(){
    resetState();
    showQuestion(suffleQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerHTML = question.question;
    question.answers.forEach(answers => {
        const button = document.createElement('button');
        button.innerHTML = answers.text;
        button.classList.add('btn');
        if (answers.correct){
            button.dataset.correct = answers.correct;
        }

        button.addEventListener('click', selectAnswer)
        answersElementButton.appendChild(button)
    });
}

function resetState(){
    nextButtoon.classList.add('hide');
    while(answersElementButton.firstChild){
        answersElementButton.removeChild(answersElementButton.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answersElementButton.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
}

function setStatusClass(element, correct){
    clearStatusClass(element);
    if(correct){
        element.classList.add('correct');
    }

    else{
        element.classList.add('wrong');
    }
}

function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const question = [
    {
        question: 'What is 2 + 2?',
        answers: [
            {text: '4', correct: true},
            {text: '24', correct: false},
            {text: '20', correct: false},
            {text: '12', correct: false},
        ]
    }
]