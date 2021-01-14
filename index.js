
var readLineSync = require('readline-sync');
var chalk = require('chalk');
var userName = readLineSync.question('What Is your Name? ');
console.log("Welcome To The ", chalk.green("QUIZ WORLD, "),chalk.red.underline.bold(userName));
console.log(" ");
console.log(chalk.yellow("Let's Check Out How Much Do you Know About India..."));
console.log(" ");

var score = 0;
function playQuiz(question, answer) {
  var userAns = readLineSync.question(question);
  if(userAns.toUpperCase() == answer.toUpperCase()) {
    console.log(chalk.green("Right!!!"));
    score = score + 1;
  } else {
    console.log(chalk.red("Wrong!!!"));
  }
  console.log("Your Current Score is: ", score);
  console.log("*--***--*--***--*");
  console.log(" ");
}

var questionAns = [{
  question : "Who Is The Prime Minister Of India? ",
  answer : "Modi"
}, {
  question : "What is the Capital of India? (Delhi Or New Delhi):- ",
  answer : "New Delhi"
},
{
  question : "How many states are there in India? ",
  answer : "28"
},
{
  question : "How many union territories are there in India? ",
  answer : "8"
},
{
  question : "What, approximately, is the area of India, in square kilometers? (3000000 Or 4000000) :- ",
  answer : "3000000"
}];

for(i=0;i<questionAns.length;i++) {
  var funBegin = questionAns[i];
  playQuiz(funBegin.question, funBegin.answer);
}

var HighScore = [{
  name:'Abdul',
  score:5
},{
  name:'Shashikant',
  score:4
},{
  name:'FarhanDinho',
  score:3
}];



console.log(chalk.green.underline.bold("Your Final Score Is: "), chalk.yellow.underline.bold(score));
console.log("");
console.log("");




var flag = 0;
for(var j =0; j<HighScore.length;j++) {
  var UserScore = HighScore[j];
    if(UserScore.score<score) {
        flag = 1;
      }
}

if(flag==1) {
  console.log(chalk.yellow.bold(chalk.green.bold(userName) + ", You Got A High Score.") + chalk.yellow.bold("Please Send Your Score Screenshot So I Put It Into My ScoreBoard"));
    console.log("");
}


 console.log("Our Score Board:- ");
for(var j =0; j<HighScore.length;j++) {
  var PreUserScore = HighScore[j];
  
  console.log(PreUserScore.name + ": " + PreUserScore.score);
  //console.log(PreUserScore.score);
  console.log("");
}


console.log("");
console.log(chalk.redBright("You Did Well.. Thanks For Participating. "));
