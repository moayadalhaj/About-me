'use strict';

let counter = 0;
let userName = prompt('what is your name ?');
alert('welcome ' + userName + ', Have a nice day.');

let myMajor = prompt('Does my major is mechanical engineering ?').toLowerCase();

if (myMajor === 'yes' || myMajor === 'y') {
//   console.log('Yes you are right');
  alert('Yes you are right');
  counter++;
} else if (myMajor === 'no' || myMajor === 'n') {
  alert('NO, I am MECHANICAL ENGINEER!');
} else {
  alert('please write yes or no');
}

let carName = prompt('Do I like BMW more than the Mercedes ?').toLowerCase();

if (carName === 'yes' || carName === 'y') {
//   console.log('Yes you are right.');
  alert('Yes you are right.');
  counter++;
} else if (carName === 'no' || carName === 'n') {
  alert('NO, I am in love with BMW!');
} else {
  alert('please write yes or no');
}

let smoke = prompt('Do I hate the somking ?').toLowerCase();

if (smoke === 'yes' || smoke === 'y') {
//   console.log('Yes you are right');
  alert('Yes you are right');
  counter++;
} else if (smoke === 'no' || smoke === 'n') {
  alert('NO, I hate it!');
} else {
  alert('please write yes or no');
}

let myFavourite = prompt('Do I like playing swimming more than football ?').toLowerCase();

if (myFavourite === 'yes' || myFavourite === 'y') {
  alert('NO, I like both but football more!');
} else if (myFavourite === 'no' || myFavourite === 'n') {
//   console.log('Yes you are right');
  alert('Yes you are right');
  counter++;
} else {
  alert('please write yes or no');
}

let pet = prompt('Do I have a cat?').toLowerCase();

if (pet === 'yes' || pet === 'y') {
  alert('NO, I hate cats');
} else if (pet === 'no' || pet === 'n') {
//   console.log('Yes you are right');
  alert('Yes you are right');
  counter++;
} else {
  alert('please write yes or no');
}
alert('Well done. I hope you enjoy.');
document.getElementById('userDisplay').innerHTML = 'Welcome ' + userName + ' I hope you like my webpage.';


for (let i = 0; i < 4; i++){
  let guessNumber = prompt('Guess a number between 1-9:');
  if (Number(guessNumber) < 6){
    alert('You are too low');
  } else if (Number(guessNumber) > 6){
    alert('You are too high');
  } else {
    alert('Correct Guessing');
    counter++;
    break;
  }
  if (i === 3){
    alert('The correct answer is 6.');
  }
}


let foods = ['Pizza','shawerma','seafood','Pasta','mansaf'];
let ii;
for (let j = 0; j < 7;j++){
  let food = prompt('What is my favourit food?');
  for (ii = 0; ii < foods.length; ii++){
    if (food === foods[ii]){
      alert('Yes this is one of my favourite food');
      counter++;
      break;
    }
  }
  if (ii < foods.length){
    break;
  }
}

alert('My favourit foods are '+ foods);
alert('Your score is ' + counter + ' out of 7');
