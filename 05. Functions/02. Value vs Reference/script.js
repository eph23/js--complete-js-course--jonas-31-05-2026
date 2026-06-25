'use strict';

// ANCHOR: Value vs reference

/* NOTE: 
In JavaScript, the core difference is that primitive types are stored and copied by value, while objects and arrays are stored and copied by reference.

How "By Value" Works
When you assign or pass a primitive value, JavaScript clones the data completely. The variables have no connection to each other afterward.

How "By Reference" Works
When you create an object or an array, JavaScript stores it in a memory heap and gives your variable a pointer (reference) to that location. If you copy that variable, you are only copying the pointer, not the actual object.

*/
const flight = 'LH234';
const eph = {
  name: 'Ephraim S',
  passport: 246456454656,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = `Mr. ${passenger.name}`;

  if (passenger.passport === 246456454656) {
    console.log('Check in');
  } else {
    console.log('Wrong passport');
  }
};

checkIn(flight, eph);
console.log(flight);
console.log(eph);

const newPassport = function (person) {
  person.passport = Math.floor(Math.random() * 100000000);
};

newPassport(eph);
checkIn(flight, eph);
