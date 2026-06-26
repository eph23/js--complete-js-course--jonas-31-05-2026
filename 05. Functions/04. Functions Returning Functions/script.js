'use strict';

// ANCHOR: Higher order functions
/* NOTE: 
A higher-order function is a function that either accepts another function as an argument, returns a function as its output, or does both.
*/

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Ephraim');

greet('Hi')('Eph');

// ANCHOR: Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Howdy')('Steven');
