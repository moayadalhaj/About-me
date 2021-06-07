'use strict';


let userName = prompt('what is your name ?');
alert('welcome ' + userName + ', Have a nice day.');

let myMajor = prompt('Does my major is mechanical engineering ?').toLowerCase();

if (myMajor === 'yes' || myMajor === 'y') {
//   console.log('Yes you are right');
  alert('Yes you are right');
} else if (myMajor === 'no' || myMajor === 'n') {
  alert('NO, I am MECHANICAL ENGINEER!');
} else {
  alert('please write yes or no');
}

let carName = prompt('Do I like BMW more than the Mercedes ?').toLowerCase();

if (carName === 'yes' || carName === 'y') {
//   console.log('Yes you are right.');
  alert('Yes you are right.');
} else if (carName === 'no' || carName === 'n') {
  alert('NO, I am in love with BMW!');
} else {
  alert('please write yes or no');
}

let smoke = prompt('Do I hate the somking ?').toLowerCase();

if (smoke === 'yes' || smoke === 'y') {
//   console.log('Yes you are right');
  alert('Yes you are right');
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
} else {
  alert('please write yes or no');
}

let pet = prompt('Do I have a cat?').toLowerCase();

if (pet === 'yes' || pet === 'y') {
  alert('NO, I hate cats');
} else if (pet === 'no' || pet === 'n') {
//   console.log('Yes you are right');
  alert('Yes you are right');
} else {
  alert('please write yes or no');
}
alert('Well done. I hope you enjoy.');
document.getElementById('userDisplay').innerHTML = 'Welcome ' + userName + ' I hope you like my webpage.';
