 function clear_input() {
     document.getElementById('question').value = "";
     document.getElementById('options').value = "";
     document.getElementById('correctindex').value = "";
 }

 var currentQuestion = 2;




 async function question_send(question, choices, correctindex,user_ques,uid) {

     const data = {
         question,
         choices,
         correctindex,
         user_ques,
         uid
     };

     console.log("fdafasgf",data);

     const options = {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
     };

     const response = await fetch('/add_questions', options);
     const json = await response.json();

    
 }


 function handleLoginSubmit(event) {
    document.getElementById("questionnumber").textContent="Q. "+currentQuestion;
    console.log(currentQuestion);
     event.preventDefault();
     currentQuestion++;

     let question = document.getElementById('question').value;
     let choices = document.getElementById('options').value;
     let correctindex = document.getElementById('correctindex').value;

     var queryString = decodeURIComponent(window.location.search); //parsing 
     queryString = queryString.substring(1); 
     var queries = queryString.split("&"); 
     console.log("q",question);
     console.log("quesrrie",queryString.substr(3,queryString.length));

     let options = choices.split(",");
     let user_ques=queries[2].substr(1,queries[2].length);
     let uid=queryString.substr(3,queryString.length);

     question_send(question, options, correctindex,user_ques,uid);
     clear_input();
     console.log("current"+currentQuestion+" user"+user_ques )
     if(currentQuestion-1>user_ques)
     {
        window.location.href="/success.html?"+uid;
     }

 }



 (function () {
     const forms = document.querySelectorAll('.question-form');
     Array.from(forms)
         .forEach(function (form) {
             form.addEventListener('submit', function (e) {
                 handleLoginSubmit(e)
             });
         });
 })()