'use strict';

let counter = 0;
let userName = prompt('what is your name ?');
alert('welcome ' + userName + ', Have a nice day.');

function userQuestion(question, correctAnswer, correctMessage, uncorrectMessage) {
  let userInput = prompt(question).toLowerCase();

  while (userInput !== 'yes' && userInput !== 'y' && userInput !== 'no' && userInput !== 'n'){
    userInput = prompt(question + ' please answer by yes , y or no , n');
  }
  if (userInput === correctAnswer[0] || userInput === correctAnswer[1]) {
    alert(correctMessage);
    counter++;
  } else {
    alert(uncorrectMessage);
  }

}
userQuestion('Does my major is mechanical engineering ?', ['yes', 'y'], 'Yes you are right', 'NO, I am MECHANICAL ENGINEER!');
userQuestion('Do I like BMW more than the Mercedes ?', ['yes', 'y'], 'Yes you are right', 'NO, I am in love with BMW');
userQuestion('Do I hate the somking ?', ['yes', 'y'], 'Yes you are right', 'NO, I hate it!');
userQuestion('Do I like playing swimming more than football ?', ['no', 'n'], 'Yes you are right', 'NO, I like both but football more!');
userQuestion('Do I have a cat?', ['no', 'n'], 'Yes you are right', 'NO, I hate cats');

for (let i = 0; i < 4; i++) {
  let guessNumber = prompt('Guess a number between 1-9:');
  if (Number(guessNumber) < 6) {
    alert('You are too low');
  } else if (Number(guessNumber) > 6) {
    alert('You are too high');
  } else {
    alert('Correct Guessing');
    counter++;
    break;
  }
  if (i === 3) {
    alert('The correct answer is 6.');
  }
}


let foods = ['Pizza', 'shawerma', 'seafood', 'Pasta', 'mansaf'];
let ii;
for (let j = 0; j < 7; j++) {
  let food = prompt('What is my favourit food?');
  for (ii = 0; ii < foods.length; ii++) {
    if (food === foods[ii]) {
      alert('Yes this is one of my favourite food');
      counter++;
      break;
    }
  }
  if (ii < foods.length) {
    break;
  }
}

alert('My favourit foods are ' + foods);
alert('Your score is ' + counter + ' out of 7');
document.getElementById('userDisplay').innerHTML = 'Welcome ' + userName + ' I hope you like my webpage.';
