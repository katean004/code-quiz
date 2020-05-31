// variables
var score = 0;
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerEl = document.getElementById("question-container");
const questionEl = document.getElementById("question");
const answerBtnEl = document.getElementById("answer-btns");

// variables for shuffling questions
let shuffledQuestions, currentQuestionIndex;
// let lastQuestionIndex = questions.length -1;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion();
});

// start button
function startGame(){
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerEl.classList.remove("hide");
    setNextQuestion();
}

// next question button
function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

// showing questions and saving answer data
function showQuestion(question){
    questionEl.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text;
        button.classList.add("btn");
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerBtnEl.appendChild(button);
    })
}

// reset so old questions go away
function resetState(){
    clearStatusClass(document.body);
    nextButton.classList.add("hide");
    while(answerBtnEl.firstChild){
        answerBtnEl.removeChild(answerBtnEl.firstChild);
    }
}

// generate questions and answers
function selectAnswer(e){
    const selectedBtn = e.target;
    const correct = selectedBtn.dataset.correct;
    setStatusClass(document.body, correct)
    Array.from(answerBtnEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if(shuffledQuestions.length > (currentQuestionIndex + 1)){
        nextButton.classList.remove("hide");
    }
    else{
        startButton.innerText = "Restart";
        startButton.classList.remove("hide");
    }
}

// setting correct and wrong status
function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add("correct");
    }
    else{
        element.classList.add("wrong");
    }
}

// remove old elements
function clearStatusClass(element){
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

// timer
function startTimer(duration, display){
    var timer = duration, minutes, seconds;

    setInterval(function(){
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes: minutes;
        seconds = seconds < 10 ? "0" + seconds: seconds;

        display.textContent = minutes + ":" + seconds;

        if(--timer < 0){
            timer = duration;
        }
    },1000);
}

document.getElementById("start-btn").addEventListener("click", function(){
    var fiveMinutes = 60 * 5,
    display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
  });


