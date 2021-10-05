<hr> 
 
## <div align=center><u>MCQs-App</u><br>Walkover-final-assignment</div>

#### <u>Intruduction</u>
This is a web application which is made on top of Node.js and Express.js which provide you a platform to host the Multiple choice questions (MCQs) based online test.<br><br>
 Application provides you to login as a `normal user` or as a `admin`
> ##### Normal user : `The one who will be giving the online test.` <br> Admin user &nbsp;&nbsp;: `The examiner or the one who wants to host the test.` <br>

Admin has following rights :
- Can login after email OTP verification
- Create Unique test link
- Decide number of question to be present in test
- Create Questions pool (pool maybe greater than number of question in test.)
- Can see the ranks of candidates who has already completed their test
- Direct access link for test creation : [Link](https://walkover-mcqs-app.herokuapp.com/create_test.html)
- Sample test id - id1632238257404&u3&q5&t145
<hr>

#### <u>Features Specification</u>
##### Assigned in Project
- [x] Assessment shall be MCQ pattern 
- [x] There must be a question pool for the assessment
- [x] The questions displayed in the assessment shall be only from that pool
- [x] Number of questions in the pool shall be more than questions displayed
- [x] Set a time limit for the assessment (individual timer for a question/optional)
- [x] Question order shall be shuffled for each candidate appearing
- [x] Assessment score shall be generated at the time of submission
##### Additional
- Easy & Simple UI.
<hr>

#### <u>Tech Stack</u>

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)&emsp;![CSS](https://img.shields.io/badge/CSS3-1572D6?style=for-the-badge&logo=css3&logoColor=white)&emsp;![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)&emsp;![NodeJS](https://img.shields.io/badge/Node.js-4853D?style=for-the-badge&logo=node.js&logoColor=white)&emsp;![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

<hr>

#### <u>Contributors</u>
>[Mayank Choudhary](https://github.com/Mayank151c) <br>
>[Mradul Agrawal](https://github.com/mradul098)    <br>
>[Sweeti Gupta](https://github.com/Sweeti-Gupta)   <br>
<hr>

#### <u>Deployment</u>
Application is deployed on top of CI/CD pipeline of Heroku platform.

| Web-page | Link | 
|   ----   | ---- |
| Live Project|[`Click here`](https://walkover-mcqs-app.herokuapp.com/)| 
| Admin-Login |[`Click here`](https://walkover-mcqs-app.herokuapp.com/adminLogin.html) |

<hr>

#### <u>Project Setup</u>
Steps to setup and run our project locally on your machine
>1. Install git on your machine if not installed already <br>
>To install [`click here`](https://git-scm.com/downloads) for Windows or <br>Run command `$ sudo apt-get install git` for Linux
>2. Clone the repository <br>
`git clone https://github.com/Mayank151c/MCQs_App.git`
>
>3. Go inside the cloned directory on the terminal.
>4. Install the required packages by command <br>
`npm install`
>
>5. Start local-server by command <br>
`npm start`
>
>6. Open any browser and access the web application by following link <br>    `http://localhost:3000/`
><br>
>7.In Local System there wont be credentials for mailing the otp so either give personal mail inside nodemailer to check its working or directly visit http://localhost:3000/adminMainPage.html in order to access admin page

 
