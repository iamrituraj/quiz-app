// document.getElementById("submit-button").addEventListener("submit",function(e){
//     handlesubmitbutton(e);
//     console.log("fsdsfd",e);
// })

// function handlesubmitbutton(event){
//     event.preventDefault();
//     console.log("addquestionloop");
//     // window.location.href = "/addquestionloop.html";
// }

document.getElementById("submit-button").onclick = function (event) {
    let value1 = document.getElementById('number_of_question_pool').value;
    let value2 = document.getElementById('number_of_que_user').value;
    let value4 = document.getElementById('time_limit').value;
    let value3='id' + (new Date()).getTime();

    event.preventDefault();
    console.log("hola");
    // var value1="foo"; 
// var value2="bar"; 
var queryString = "?id=" + value3 + "&u" + value2+"&q"+value1+"&t"+value4;
    location.href = "/addquestionloop.html"+queryString;
};