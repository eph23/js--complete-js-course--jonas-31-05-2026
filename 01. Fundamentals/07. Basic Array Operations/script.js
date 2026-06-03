"use strict";

// ANCHOR: Array literal
const friends = ["Michael", "Steven", "Bob"];
console.log(friends);

// ANCHOR: push method
/* Adds new element at the end of an array */
friends.push("Jay");
console.log(friends);

// ANCHOR: unshift method
/* Adds new element at the beginning of an array */
friends.unshift("John");
console.log(friends);

// ANCHOR: shift method
/* Removes element from the beginning of an array */
const popped = friends.pop();
console.log(popped);
console.log(friends);

// ANCHOR: shift method
/* Removes element from the end of an array */
const shifted = friends.shift();
console.log(popped);
console.log(friends);

// ANCHOR: indexOf
/* Returns the index of an element else returns -1*/
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Jay"));

// ANCHOR: includes
/* Returns true if element is present in the array else returns false */
console.log(friends.includes("Michael"));
console.log(friends.includes("John"));
