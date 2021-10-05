// required packages
const express = require('express');
const path = require('path');
const Datastore = require('nedb');
const { Auth } = require("two-step-auth");

var nodemailer = require('nodemailer');

var val = Math. floor(1000 + Math. random() * 9000);

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mcqappmail@gmail.com',
    pass: process.env.password_mail
  }
});

var mailOptions = {
  from: 'mcqappmail@gmail.com',
  to: 'mradul8668@gmail.com',
  subject: 'Sending Email using Node.js',
  text: `Hi Your login otp is `+val
  // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'        
};



const app = express();
const PORT = process.env.PORT || 3000;


// path variables
const pathPUBLIC = path.join(__dirname,`/public`);
const pathADMIN = path.join(__dirname,`/public/adminLogin.html`);
const pathRESULT = path.join(__dirname,`/public/score.html`);

// middlewares
app.use(express.static(pathPUBLIC));
app.use(express.json({ limit: '5mb' }));


const question_bank = new Datastore('question_bank.json');
const users_score   = new Datastore('users_score.json');

question_bank.loadDatabase();
users_score.loadDatabase();


function randomize(data1) {

    let questions = [];
    let i = 0;
    let limit=data1[0].uid;
    var queries = limit.split("&"); 

    let number_of_ques=queries[1].substr(1,queries[1].length);

    console.log(queries);
    let num=[];
    for (var ij = 1; ij <= number_of_ques; ij++) {
        num.push(ij);
     }
    // let num = range(0,10)//, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

    while (i < number_of_ques ) {
        let random = Math.floor(Math.random() * num.length)
        let indx = num.splice(random, 1);
        questions.push(data1[indx[0]]);
        i++;
    }
    return questions;
}





app.get('/admin', (req, res) => {
    res.sendFile(pathADMIN);
});


app.get('/api/:testid', (request, response) => {
    question_bank.loadDatabase();
users_score.loadDatabase();
    
    console.log("Reqfdfa",request.params.testid);
    question_bank.find({uid:request.params.testid}, (err, data) => {
        if (err) {
            console.log("error bhai");
            response.end();
            return;
        }
        console.log("dotaaaaaaaaaaa",data);
        response.send(randomize(data));
    });
});


app.get('/result', (req, res) => {
    res.sendFile(pathRESULT);
});


app.get('/rankings', (request, response) => {
    users_score.find({}, (err, data) => {
        if (err) {
            response.end();
            return;
        }
        response.json(data);
    });
});


app.post('/otp', (req, res) => {
    const data = req.body;

    // login(data.email).then(res1 => {
    //     res.json(res1);
    // });
    transporter.sendMail({
        from: 'mcqappmail@gmail.com',
        to: data.email,
        subject: 'Sending Email using Node.js',
        text: `Hi Your login otp is `+val
        // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'        
      }, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });
    res.json({"otp":val});
});


app.post('/result', (request, response) => {
    console.log("result inside",request.body);
    const data = request.body;

    users_score.insert(data);
    response.json(data);
});


app.post('/add_questions', (request, response) => {
    const data = request.body;
    const data1 = {
        question: data.question,
        options: [data.choices[0], data.choices[1], data.choices[2], data.choices[3]],
        correctIndex: data.correctindex,
        user_ques:data.user_ques,
        uid:data.uid
    }
    console.log("Datraga",data1);
    question_bank.insert(data1);
});


app.listen(PORT, () => {
    console.log(`server running on Port:${PORT}`);
})