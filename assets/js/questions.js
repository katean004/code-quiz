const questions = [
    {
        question: "Inside which HTML element do we put the Javascript?",
        answers: [
            { text: "<javascript>"},
            { text: "<scripting>"},
            { text: "<script>"},
            { text: "<js>"}
        ],
        correct: "<script>"
    },
    {
        question: "Where is the correct place to insert a Javascript?",
        answers: [
            { text: "<body> section"},
            { text: "<head> section"},
            { text: "both the <head> and the <body>"},
            { text:"<title>"}
        ],
        correct : "both the <head> and the <body>"
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js?'",
        answers: [
            { text: "<script name='xxx.js'>"},
            { text: "<script href='xxx.js'>"},
            { text: "<script src='xxx.js'>"},
            { text:"<script alt='xxx.js>"}
        ],
        correct: "<script src='xxx.js'>"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        answers: [
            { text: "alertBox('Hello World');"},
            { text: "msg('Hello World');"},
            { text: "msgBox('Hello World');"},
            { text: "alert('Hello World');"}
        ],
        correct: "alert('Hello World');"
    },
    {
        question: "How to get a random number between 1 to 10?",
        answers: [
            { text: "Math.random()*10"},
            { text: "Math.floor*10"},
            { text: "Math.floor(Math.random()*10-1)"},
            { text: "Math.floor(Math.random()*10"}
        ],
        correct: "Math.floor(Math.random()*10"
    },
    {
        question: "What is the syntax for creating a function in Javascript named booFunction?",
        answers: [
            { text: "function = booFunction()"},
            { text: "function booFunction()"},
            { text: "function := booFunction()"},
            { text: "function: booFunction()"}
        ],
        correct: "function booFunction()"
    },
    {
        question: "How to call a function in Javascript?",
        answers: [
            { text: "call booFunction();"},
            { text: "call function booFunction();"},
            { text: "booFunction();"},
            { text: "function booFunction();"}
        ],
        correct: "booFunction();"
        
    },
    {
        question: "How to add comments in Javascript?",
        answers: [
            { text: "<!--This is a comment-->"},
            { text: "//This is a comment"},
            { text: "-This is a comment"},
            { text: "/*This is a comment*/"}
        ],
        correct: "//This is a comment"
    },
    {
        question: "How to write and IF statement for executing some code if 'i' is NOT equal to 5?",
        answers: [
            { text: "if i <> 5"},
            { text: "if(i!=5)"},
            { text: "if i=!5 then"},
            { text: "if(i>5)"}
        ],
        correct: "if(i!=5)"
    },
    {
        question: "How to print values in Console for Javascript?",
        answers: [
            { text: "print(5);"},
            { text: "console.log(5);"},
            { text: "console.print(5);"},
            { text: "consolelog(5);"}
        ],
        correct: "console.log(5);"
    }
]