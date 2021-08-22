var readlineSync = require("readline-sync");
var chalk = require("chalk");

console.log(chalk.bgHex('cad315')(' Hey there! This quiz decides how well you know ASHOK '))

var score = 0;

// data of high score
var highScores = [
  {
    name: "Jyoti",
    score: 6,
  },

  {
    name: "Krishana",
    score: 5,
  },
]
var anss="answer: "
// array of objects
var questions = [{
  question: chalk.bgHex('f56942')("\n 1. What is my nick name? \n\n Answer: "),
  answer: ("Ashkya")
},{
  question: chalk.bgHex('f56942')("\n 2. Where do I live? \n\n Answer: "),
  answer: "Pune"
}, 
{
  question:chalk.bgHex('f56942')("\n 3. On social media, what i will use very wide? \n\n Answer: "),
  answer: "WhatsApp"
},
{
  question: chalk.bgHex('f56942')("\n 4. My favorite food? \n\n Answer: "),
  answer: "Chole Bhature"
},
{
  question: chalk.bgHex('f56942')("\n 3. Where do I work? \n\n Answer: "),
  answer: "TCS"
}];

function welcome() {
 var userName = readlineSync.question(chalk.bold.red ("\nWhat's your name? ")).toUpperCase();

 var name=(chalk.bold.yellow (userName));

  console.log("Hey! "
   +name+ " Welcome, Happy to see you here!");

console.log(chalk.bgHex('132cd1') ("\n Lets Start With QUIZ!"));

}

// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("\nwrong!");
   
  }

  console.log((chalk.bold.hex('fecd1a') ("current score: ")), score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
 
  console.log((chalk.black.bgGreen.bold("\n YAY! You SCORED: ")), score);

  console.log((chalk.bold.hex('f70a12')("\nCheck out the high scores, if you should be there ping me and I'll update it \n")));

  console.log((chalk.bgHex('0eebd8').bold.black("Kindly Find Highest score \n")));

  highScores.map(score => console.log( score.name, " : ", score.score))

  console.log((chalk.bgHex('faf605').bold.black("\nNote: ")), (chalk.bold.hex('f507f1') ("If you are high scorer so you can reach out to me using below platforms with Screenshots")));

  console.log((chalk.bold.white("\nMobile Number: ")),(chalk.bold.hex('fa2a05') ("+91 7219451977")));
 
  console.log((chalk.bold.white("Linkdin: ")), (chalk.bold.hex('fa2a05')("https://www.linkedin.com/in/ashok-jadhav-6a62bb185")));

   console.log((chalk.bold.white("facebook: ")), (chalk.bold.hex('fa2a05') ("https://www.facebook.com/profile.php?id=100006769126891")));
  
   console.log((chalk.bold.white("Instagam: ")), (chalk.bold.hex('fa2a05') ("https://www.instagram.com/its_me_ashkya/")));

   console.log(chalk.bold.white("\n\n        Thank you for using :)\n\n\n\n\n"));
}


welcome();
game();
showScores();