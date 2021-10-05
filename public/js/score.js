const name_text = document.getElementById('score-text1');
const score_text = document.getElementById('score-text2');

let username = sessionStorage.getItem("name");
let score = sessionStorage.getItem("score");
let email = sessionStorage.getItem("email");

sessionStorage.removeItem("name");
sessionStorage.removeItem("score");
sessionStorage.removeItem("email");




console.log(score)

var queryString = decodeURIComponent(window.location.search);
queryString2 = queryString.substring(1).substr(1,queryString.substring(1).length);

name_text.innerHTML = username + ' you scored ';
score_text.innerHTML = score + '/' +queryString2;

let score2=score + '/' +queryString2;


const data = {
    username,
    email,
    score:score2
};

const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
};


async function data_send() {
    const response = await fetch('/result', options);
    console.log('hi');
    const json = await response.json();
    console.log(json);
}
console.log("username",username,"email",email,"score",score);
if (username && email) {
    data_send();
}
