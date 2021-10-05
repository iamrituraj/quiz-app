var currentQuestion = 0;
var score = 0;

var queryString = decodeURIComponent(window.location.search); //parsing 
queryString = queryString.substring(1).substr(7,queryString.substr(1).length); 
console.log(queryString);
var string2=queryString.split("&");
var limit = string2[1].substr(1,string2[2].length);
console.log(limit);

//    window.location.href = "assessment-page.html?"+queryString;

var totalQuestions = limit;

var container = document.getElementById("quizContainer");
var questionEl = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");

var nextButton = document.getElementById("nextButton");
var resultCont = document.getElementById("result");

var queryString = decodeURIComponent(window.location.search); //parsing 
    queryString = queryString.substring(1);  //querystring: testid=898
    // console.log("querystring",queryString.substr(7,queryString.length));
    var testid=queryString.substr(7,queryString.length);



   


let questions;

async function data_request() {
    const response = await fetch('/api/'+testid);
    let json = await response.json();
    set_question(json);

};

let timer = testid.split("&")[3].substr(1,testid.split("&")[3].length);

function interval() {
    let countdown = setInterval(() => {
        document.getElementById("time-container").innerHTML = "Time Left:" + timer + "s ";
        timer--;
        if (timer < 0) {
            clearInterval(countdown);
            window.location.href = "/score.html?u"+limit;
        }
    }, 1000);
}


function set_question(data) {
    questions = data;
    interval();
    loadQuestion(currentQuestion);
}

function loadQuestion(questionIndex) {

    let q = questions[questionIndex]

    questionEl.textContent = (questionIndex + 1) + ". " + q.question;
    opt1.textContent = q.options[0];
    opt2.textContent = q.options[1];
    opt3.textContent = q.options[2];
    opt4.textContent = q.options[3];
};

function loadNextQuestion() {
    //If no radio option is selected, return an alert message
    var selectedOption = document.querySelector("input[type=radio]:checked");
    if (!selectedOption) {
        alert("Please select your answer!");
        return;
    }
    //Comparing the answer value, if true add 1 to the score
    var answer = selectedOption.value;
    if (questions[currentQuestion].correctIndex == answer) {
        score += 1;
    }


    // saves score to session storage
    sessionStorage.setItem("score", score);

    //Uncheck the current option, increment currentQuestion and load next question
    selectedOption.checked = false;
    currentQuestion++;
    if (currentQuestion == totalQuestions - 1) {
        nextButton.textContent = "Submit";
        let tag = document.createElement("a");
        tag.id = 'submit';
        tag.href = "score.html?u"+limit;
        let link = document.createTextNode("Submit");
        nextButton.textContent = "";
        // Append the text node to anchor element.
        tag.appendChild(link);
        let button = document.getElementById("nextButton");
        button.appendChild(tag);
        
    }
    

    loadQuestion(currentQuestion);
}

data_request();