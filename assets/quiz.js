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

    // Timer function (done)
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


})