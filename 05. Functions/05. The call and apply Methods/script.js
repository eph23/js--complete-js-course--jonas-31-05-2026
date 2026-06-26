'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`,
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Ephraim S.');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'LH',
  bookings: [],
};

// ANCHOR: call method
/* NOTE: 
The call() method immediately invokes a function and explicitly sets its internal this context to a specified object. This allows an object to "borrow" and execute a method belonging to another object without rewriting code.
*/
const book = lufthansa.book;

book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Marry Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss airlines',
  iataCode: 'SW',
  bookings: [],
};

book.call(swiss, 583, 'Marry Cooper');
console.log(swiss);

// ANCHOR: apply method
/* NOTE: 
The apply() method in JavaScript invokes a function while explicitly setting its this context and passing arguments as a single array or array-like object.
*/

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);
