var randomizer = document.getElementById('randomizer');
var clearThisShit = document.getElementById('clearThisShit');
randomizer.addEventListener("click", addAnswer);
clearThisShit.addEventListener("click", clearList);

var randomAnswers = [
 'It is certain',
 'It is decidedly so',
 'Without a doubt',
 'Yes definitely',
 'You may rely on it',
 'As I see it, yes',
 'Most likely',
 'Outlook good',
 'Yes',
 'Signs point to yes',
 'Reply hazy try again',
 'Ask again later',
 'Better not tell you now',
 'Cannot predict now',
 'Concentrate and ask again',
 'Dont count on it',
 'My reply is no',
 'My sources say no',
 'Outlook not so good',
 'Very doubtful'
 ]

function randomA() {
  var genAnswer = randomAnswers[
    Math.floor(Math.random() * randomAnswers.length)
  ];
  return genAnswer;
}

function addAnswer() {
  var ans = randomA();
  var answerBox = document.getElementById('answerList');
  var questionBox = document.getElementById("questionInput");
  if ( questionBox.value === "" ) {
    alert("You need a question to generate an answer");
  } else {
    var li = document.createElement('li');
    li.innerHTML = questionBox.value + ' : ' + ans;
    answerBox.appendChild(li);
    questionBox.value = ""
  }

}

function clearList() {
  var list = document.getElementById('answerList');
  list.innerHTML = ""
}
