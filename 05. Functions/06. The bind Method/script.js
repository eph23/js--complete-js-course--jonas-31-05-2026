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
  iataCode: 'EW',
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
  iataCode: 'LX',
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

// ANCHOR: bind Method
/* NOTE: 
The JavaScript bind() method creates a new function that, when executed, has its this keyword permanently set to a provided value. Unlike call() and apply(), bind() does not immediately execute the function; it extracts a copy to be invoked later.
*/

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookSW = book.bind(swiss);

bookEW(23, 'Steven Williams');
bookLH(23, 'Sarah Williams');
bookSW(239, 'Thomas Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Ephraim S.');
bookEW23('Martha Cooper');
console.log(eurowings);

// ANCHOR: event listener
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this.planes);
  console.log(lufthansa);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// ANCHOR: Partial application
const addTax = (tax, value) => value + value * tax;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

// Challenge

const vat = rate => amount => amount * rate + amount;
console.log(vat(0.5)(100));
console.log(vat(0.5)(200));
