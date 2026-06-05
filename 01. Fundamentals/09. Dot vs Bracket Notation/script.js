"use strict";

// ANCHOR: Object literal

const eph = {
    firstName: "Ephraim",
    lastName: "S",
    age: 2037 - 1988,
    job: "Web Dev",
    friends: ["Michael", "Steven", "Bob"],
};

console.log(eph);

// ANCHOR: Accessing object property
// Dot (.) notation
console.log(eph.lastName);

// Bracket notation
console.log(eph["firstName"]);

const nameKey = "Name";
console.log(eph[`first${nameKey}`]);
console.log(eph[`last${nameKey}`]);

/* const interestedIn = prompt(
    `What do you want to know about Eph? Choose between firstName, lastName, age, job and friends`,
);

if (eph[interestedIn]) {
    console.log(eph[interestedIn]);
} else {
    console.log(
        `Wrong choice... Please choose between firstName, lastName, age, job and friends`,
    );
} */

// ANCHOR: Adding object property
eph.location = "Bangladesh";
eph["twitter"] = "@ephS";

console.log(eph);

// ANCHOR: Challenge
/* 
Ephraim has 3 friends and his best friend is called Michael
*/

console.log(
    `${eph.firstName} has ${eph.friends.length} friends and his best friend is called ${eph.friends[0]}`,
);
