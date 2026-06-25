'use strict';

// ANCHOR: Higher order functions

/* NOTE: 
A higher-order function is a function that either accepts another function as an argument, returns a function as its output, or does both.
*/

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best', upperFirstWord);
transformer('JavaScript is the best', oneWord);

const hi5 = function () {
  console.log('🙋‍♂️');
};
document.body.addEventListener('click', hi5);
