## ONLINE ASSESSMENT PROJECT
This is an online assessment platform made by Rituraj Rajput, Aditi Dahare and Ayushi Singh Bhadauria as the final project of walkover University Program. This is a robust online testing platform for conducting remote examinations. This web application is made using HTML5, CSS3, JavaScript,Bootstrap,Bulma as frontend and  Node.js, Express.js as backend and NeDB as database.

A deployed version can be checked here :  

Demo Video Link:



## We worked for the following specifications:
1. Assessment shall be MCQ pattern.✔️

2. There must be a question pool for the assessment.✔️
   
   `We have created a pool of 31 questions in database and randomly selected 10 questions in shuffled order.`
  
3. The questions displayed in the assessment shall be only from that pool.✔️

4. Number of questions in the pool shall be more than questions displayed.✔️

5. Set a time limit for the assessment (individual timer for a question/optional).✔️ 

6. Question order shall be shuffled for each candidate appearing.✔️

7. Assessment score shall be generated at the time of submission.✔️


## Admin Panel:

Link of admin Login: 

 - Firstly user have to login to admin panel with valid Email to prove his authenticity.
 - A OTP will be sent to his Email.
 - After successfully entering the OTP Admin will be  redirected to a page where  admin have options to see rankings
     of user attempted the test add questions in Question pool.
 - After successful login user redirected to results page where he can see results of all users attempted the assessment.
 - On Rankings page, records of all users displayed with details : `Name` , `Email ID` , `Score`.
 - The admin can also add new questions to the question pool using add question option.
 - The admin can Create test by entering no. of questions which will appear in test and time limit for the test.
 - A unique link and unique id will be generated based on admin's inputs.
 - Link for test creation : [Link]()

 - Demo TestID - 
 - Demo Test Link - 


## Additional Features: 
1. Great UI.
2. Login page for storing user's data and validation of the data of users attempting for assessment.
3. Result is displayed with Name entered at the time of login.
4. All users' name and score are displayed at the end using databse table for storing the data and scores of the user.

  

## Pages Functionality:

   `TestID page` - User will Enter the test id and it will be redirected to login Page.

   1. `Login page` - to take the data of users attempting for assessment.
   2. `Instruction page` - to show the instructions and  rules for assessment. 
   3. `Question Page` - It will show user questions and options to choose from.
   4. `Result Page` - After attempting the assessment, in case the user submits or if the user fails to answer all the questions
                    in the given time duration he/she will be redirected to the result page.
   5. `Admin login` - admin can login through this page by entering the email and after email verification he/she will be redirected to admin page.
   6. `Admin Page` - this page will show option to see rankings of user attempted the test and also add question page.
   7. `Rankings Page` - admin can see rankings of all the user.
   8. `Create Test Page` - The admin can Create test by entering no. of questions which will appear in test and time limit for the test through    this page.
   9. `Add Question Page` - admin Can add questions in the question pool through this page.


## Developers
1. Rituraj Rajput [https://github.com/iamrituraj]
2. Aditi Dahare []
3. Ayushi Singh Bhadauria [https://github.com/ayushisingh-web-cell]

## Tech Stack Used: 
1. Frontend -HTML5, CSS3, JavaScript, Ajax and Bootstrap, Bulma.
2. Backend - Node.js, Express.js (Node.js framework).
3. Database – NeDB.
4. For Email verification - two-step-auth.


## Deployment
For Deployment, we have used glitch as a paltform.
| Live Project|[`Click here`]()| 
| Admin-Login |[`Click here`]() |


## Project Setup: 

**Requirements:** Pre-installed `VS code` with `Node js`.

Steps to setup and run our project locally on your machine
>1. Install git on your machine if not installed already <br>
>2. Clone the repository <br>
`git clone `
>
>3. Go inside the cloned directory on the terminal.
>4. Install the required packages by command <br>
`npm install`
>
>5. Start local-server by command <br>
`npm start`
>
>6. Enter the following link in browser, and it will Start the assessment. <br>    `http://localhost:3000/`
><br>
>7. Admin Page - http://localhost:3000/adminMainPage.html .