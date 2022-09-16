//console.log("Hello world!");
var readlineSync = require('readline-sync');
var userName = readlineSync.question("What is your name?");
console.log("Welcome " + userName + " do you know Radhika")
var score = 0;
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    score = score + 1;
    console.log("You are Right!Score " + score)
  }
  else {
    console.log("You are Wrong!Score " + score)
  }
}
var questions = [{
  question: "Where do I live?",
  answer: "mumbai"
},
{
  question: "Which is my favorite place in Mumbai?",
  answer: "marine drive"
},
{
  question: "What do I like to eat?",
  answer: "chinese"
},
{
  question: "Which is my favourite Chinese Restaurant ?",
  answer: "chopsticks"
}, {
  question: "Do I like Cats or Dogs?",
  answer: "cats"
}
]
for (var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer)
}
console.log("Your Final Score " + score + "/" + questions.length);