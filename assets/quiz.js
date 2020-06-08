// Global variables
var score = 0;
var time = 180;
var index = 0;
let selectedAnswer;
let timeInterval;

$(document).ready(function(){

    $(".next-btn").hide(); // hide next button
    $(".highscore-btn").hide(); // hide highscore button
    $(".question-container").hide(); // hide question container
    $(".timer").hide(); // hide timer
    $(".green-alert").hide(); // hide green alert
    $(".red-alert").hide(); // hide red alert

    // Start quiz function
    $(".start-btn").on("click",function(){
    
    $(".timer").show(); // show timer
    $(".start-btn").hide(); // hide start button
    $(".question-container").show(); //show question and answer choices 
    $(".next-btn").show(); // hide next button
        
    startTimer();
    showQuestions(); // show questions function
    });

    // Timer function
    function startTimer(){

        timeInterval = setInterval(function(){
        
            if(time>=0){
                $("#time-tracker").text("Time: " + time + " sec");
                    time--;
            }
            else{
                alert("Quiz Over");
                clearInterval(timeInterval);
            }
        }, 1000);
    }

    //Show questions function
    function showQuestions(){
        if(index > questions.length-1){
            console.log("Quiz Over");
            clearInterval(timeInterval);
            lastScore();
            $(".highscore-btn").show(); // show highscore button
        }
        else{
            $(".question").text(questions[index].question);
            $(".ans1").text(questions[index].answers[0].text);
            $(".ans2").text(questions[index].answers[1].text);
            $(".ans3").text(questions[index].answers[2].text);
            $(".ans4").text(questions[index].answers[3].text);
        }
    }

    // when answer buttons are clicked, call runningQuestions function
    $("#answer-btns").on("click", runningQuestions);

    // Running questions function
    function runningQuestions(){
        if(index <= (questions.length-1)){
            selectedAnswer = event.target.textContent;
            if(selectedAnswer === questions[index].correct){
                $(".green-alert").show(); // show green alert when correct
            }
            else{
                time -= 15;
                $(".red-alert").show(); // show green alert when correct
            }
        }
        else{
            console.log("QUIZ OVER");
        }
}

    // increment score if answer is correct when next button is clicked
    $(".next-btn").on("click", function(){

        if(selectedAnswer === questions[index].correct){
            score++;
            console.log(score);
        }
        nextQuestion();
    });

    // NextQuestion function
    function nextQuestion(){
    $(".green-alert").hide(); // hide green alert when correct
    $(".red-alert").hide(); // hide green alert when correct

    index++;
        showQuestions();
    }

    // End quiz function: show final score
    function lastScore(){
        var finalScore = ((score / questions.length ) * 100);
        alert("Final Score: " + finalScore + "%");
    }

})