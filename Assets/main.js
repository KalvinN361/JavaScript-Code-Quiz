// timer variables
var currentQuestionIndex = 0;
var time = 60;
var timer;
// variables

var questionsEl = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");
var endScreen = document.getElementById('end-screen');
var startScreen = document.getElementById('start-screen');

var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: "all of the above"
    },
    {
      title:
        "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes"
    },
    {
      title:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log"
    }
  ];


  // initialize timer
timerEl.innterHTML = time

startBtn.addEventListener("click", quiz);

function timer() {
    time -= 1;
    timerEl.innerHTML = time;
}


function quiz () {
    timer = setInterval(timer, 1000);
    question();
}


function question() {
    if(currentQuestionIndex == questions.length)  {
        console.log('Complete');
        questionsEl.className = "hide"
        feedbackEl.className = "hide"
        endScreen.classList.remove("hide")
        clearInterval(timer)
        return
    }
    choicesEl.innerHTML = '';
    questionsEl.classList.remove("hide");
    feedbackEl.classList.remove("hide");
    startBtn.classList.add("hide");
    startScreen.classList.add("hide");
    questionTitle.innerHTML = questions[currentQuestionIndex].title
    for (let index = 0; index < questions[currentQuestionIndex].choices.length; index ++) {
        choicesEl.insertAdjacentHTML('afterbegin', `<button id="${questions[currentQuestionIndex].choices[index]}">${questions[currentQuestionIndex].choices[index]} </button>`);     
        const str = questions[currentQuestionIndex].choices[index]
        document.getElementById(questions[currentQuestionIndex].choices[index]).onclick = function() {answer(str)}
    }
}   

function answer(a) {
    if (questions[currentQuestionIndex].answer != a.replace(/\s+/g, '')) {
        time -= 10 
        feedbackEl.innerHTML = "Incorrect answer";
    }else {
        feedbackEl.innerHTML = "Correct answer";
    }
    setTimeout(clearFeedback, 1000);
    currentQuestionIndex += 1;
    question();
}

function clearFeedback() {
    feedbackEl.interHTML = ''
}
function saveScore() {
    current = JSON.parse(window.localStorage.getItem("highscores")) || []
    current.push({"score": time, "initials": initialsEl.value})
    window.localStorage.setItem('highscores', JSON.stringify(current))
    window.location.href = 'highscores.html'
}
 
