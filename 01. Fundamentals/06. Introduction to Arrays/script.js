"use strict";

// ANCHOR: Array literal
const friends = ["Michael", "Steven", "Bob"];
console.log(friends);

// ANCHOR: Array constructor function
const years = new Array(1991, 1984, 2008, 2020);

// ANCHOR: Accessing array element
/* NOTE 
Arrays are zero based and to access array element we have to use bracket notation and index number of the element
*/
console.log(friends[0]);
console.log(friends[2]);

// ANCHOR: Array property
/* NOTE 
Array property however is not zero based
*/
console.log(friends.length);
console.log(friends[friends.length - 1]);

// ANCHOR: Mutating array element
/* NOTE: 
It is possible to mutate array element.
But its not possible to replace the whole array declared with const 
*/
friends[2] = "Jay";
console.log(friends);

// ANCHOR: Array elements
/* NOTE 
Arrays can hold different types of data, because inside the bracket in each index array expect any kind of expressions
*/

const firstName = "Ephraim";
const birthYear = 1988;
const eph = [firstName, "S", 2037 - birthYear, "Web-dev", friends];
console.log(eph);
console.log(eph.length);

// Exercise
const birthYears = [1990, 1967, 2002, 2010, 2018];
const calcAge = function (birthYear) {
    return 2037 - birthYear;
};

const ages = [
    calcAge(birthYears[0]),
    calcAge(birthYears[1]),
    calcAge(birthYears[birthYears.length - 1]),
];
console.log(ages);
