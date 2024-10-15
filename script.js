const questions =[
    {
        question: "HTML  full form",
        answer:[
            { text: "Hyper Text Markup Language", correct: true},
            { text: "Hyper Markup Language", correct: false},
            { text: "Markup Language", correct: false},
            { text: "Markup Language Hyper Text", correct: false},
        ]
    },
{
    question: "What does CSS mean?",
    answer:[
        { text: "Hyper Text Markup Language" , correct: false},
        { text: "Cascading Style Sheets", correct: true},
        { text: "Markup Cascading Sheets",correct: false},
        { text: "Markup Language Hyper Text",correct: false},
    ]
},
{
    question: "What is XML used for?",
    answer:[
        { text: "Hyper Text Markup Language", correct: false},
        { text: "Hyper Markup Language", correct: false},
        { text: "Extensible Markup Language", correct: true},
        { text: "Markup Language Hyper Text", correct: false},
    ]
},{
    question: "What does JS mean is text?",
    answer:[
        { text: "Hyper Text Markup Language", correct: false},
        { text: "Hyper Markup Language",correct: false},
        { text: "just sayin javaScript", correct: true},
        { text: "Markup Language Hyper Text", correct: false},
    ]
}
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}


function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.dataset.correct = answer.correct; 
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true; 
    });

    nextButton.style.display = "block";
}

function showNextQuestion() {
    currentQuestionIndex++; 
    if (currentQuestionIndex < questions.length) {
        showQuestion(); 
    } else {
        showScore();
    }
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`; 
    nextButton.innerHTML = "Restart"; 
    nextButton.style.display = "block";
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        showNextQuestion();
    } else {
        startQuiz(); 
    }
});

startQuiz(); 

