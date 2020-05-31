// questions and answers list
const questions = [
    {
        question: "Inside which HTML element do we put the Javascript?",
        answers: [
            { text: "<javascript>", correct: false},
            { text: "<scripting>", correct: false},
            { text: "<script>", correct: true},
            { text: "<js>", correct: false}
        ]
    },
    {
        question: "Where is the correct place to insert a Javascript?",
        answers: [
            { text: "<body> section", correct: false},
            { text: "<head> section", correct: false},
            { text: "both the <head> and the <body>", correct: true}
        ]
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js?'",
        answers: [
            { text: "<script name='xxx.js'>", correct: false},
            { text: "<script href='xxx.js'>", correct: false},
            { text: "<script src='xxx.js'>", correct: true}
        ]
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        answers: [
            { text: "alertBox('Hello World');", correct: false},
            { text: "msg('Hello World');", correct: false},
            { text: "msgBox('Hello World');", correct: false},
            { text: "alert('Hello World');", correct: true}
        ]
    },
    {
        question: "The external Javascript must contain <script> tag. True or False?",
        answers: [
            { text: "true", correct: false},
            { text: "false", correct: true}
        ]
    },
    {
        question: "What is the syntax for creating a function in Javascript named booFunction?",
        answers: [
            { text: "function = booFunction()", correct: false},
            { text: "function booFunction()", correct: true},
            { text: "function := booFunction()", correct: false},
            { text: "function: booFunction()", correct: false}
        ]
    },
    {
        question: "How to call a function in Javascript?",
        answers: [
            { text: "call booFunction();", correct: false},
            { text: "call function booFunction();", correct: false},
            { text: "booFunction();", correct: true},
            { text: "function booFunction();", correct: false}
        ]
    },
    {
        question: "How to add comments in Javascript?",
        answers: [
            { text: "<!--This is a comment-->", correct: false},
            { text: "//This is a comment", correct: true},
            { text: "-This is a comment", correct: false},
            { text: "/*This is a comment*/", correct: false}
        ]
    },
    {
        question: "How to add comments in Javascript?",
        answers: [
            { text: "<!--This is a comment-->", correct: false},
            { text: "//This is a comment", correct: true},
            { text: "-This is a comment", correct: false},
            { text: "/*This is a comment*/", correct: false}
        ]
    },
    {
        question: "How to print values in Console for Javascript?",
        answers: [
            { text: "print(5);", correct: false},
            { text: "console.log(5);", correct: true},
            { text: "console.print(5);", correct: false},
            { text: "consolelog(5);", correct: false}
        ]
    }
]