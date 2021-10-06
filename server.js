// required packages
const express = require('express');
const path = require('path');
const Datastore = require('nedb');
const {Auth} = require("two-step-auth");


const app = express();
const PORT = process.env.PORT || 3000;


// path variables
const pathPUBLIC = path.join(__dirname, `/public`);
const pathADMIN = path.join(__dirname, `/public/adminLogin.html`);
const pathRESULT = path.join(__dirname, `/public/score.html`);

// middlewares
app.use(express.static(pathPUBLIC));
app.use(express.json({
    limit: '5mb'
}));


const question_pool = new Datastore('question_pool.db');
const users_score = new Datastore('users_score.db');

question_pool.loadDatabase();
users_score.loadDatabase();


// function to shuffle questions
function randomize(data1, number_of_ques) {

    let questions = [];
    let i = 0;

    let num = [];
    for (var ij = 1; ij <= data1.length; ij++) {
        num.push(ij);
    }

    while (i < number_of_ques) {
        let random = Math.floor(Math.random() * num.length)
        let indx = num.splice(random, 1);
        questions.push(data1[indx[0]]);
        i++;
    }
    return questions;
}




// admin route
app.get('/admin', (req, res) => {
    res.sendFile(pathADMIN);
});

// get questions.
app.get('/api/:testid', (request, response) => {
    question_pool.loadDatabase();
    users_score.loadDatabase();

    question_pool.find({}, (err, data) => {
        if (err) {
            console.log(err);
            response.end();
            return;
        }
        let id = request.params.testid;
        let string = id.split("&");
        var limit = string[1].substr(1, string[2].length);
        response.send(randomize(data, limit));

    });
});


// get all questions from question pool
app.get('/questions', (request, response) => {
    question_pool.loadDatabase();
    question_pool.find({}, (err, data) => {
        if (err) {
            console.log(err);
            response.end();
            return;
        }
        response.send(data);
    });
});


// get result page
app.get('/result', (req, res) => {
    res.sendFile(pathRESULT);
});

//get rankings of users attempted the test
app.get('/rankings', (request, response) => {
    users_score.find({}, (err, data) => {
        if (err) {
            response.end();
            return;
        }
        response.json(data);
    });
});

// function to send otp
async function login(emailId) {
    const res = await Auth(emailId);

    let otp = res.OTP;
    let status = res.success;
    return {
        otp,
        status
    };
}

// sending email to backend for admin verification
app.post('/otp', (req, res) => {
    const data = req.body;
    login(data.email).then(res1 => {
        res.json(res1);
    });
});

// inserting scores to database
app.post('/result', (request, response) => {
    const data = request.body;
    users_score.insert(data);
    response.json(data);
});

//  adding questions to database
app.post('/add_questions', (request, response) => {
    const data = request.body;
    const data1 = {
        question: data.question,
        options: [data.choices[0], data.choices[1], data.choices[2], data.choices[3]],
        correctIndex: data.correctindex,
    }
    question_pool.insert(data1);
});

// server 
app.listen(PORT, () => {
    console.log(`server running on Port:${PORT}`);
})