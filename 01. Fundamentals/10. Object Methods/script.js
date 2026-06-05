"use strict";

// ANCHOR: Object literal
const eph = {
    firstName: "Ephraim",
    lastName: "S",
    birthYear: 1988,
    job: "Web Dev",
    friends: ["Michael", "Steven", "Bob"],
    hasDriversLicense: true,

    // ANCHOR: Object method
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    // Challenge
    getSummery: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job} and he has ${this.hasDriversLicense ? "a" : "no"} drivers license`;
    },
};

console.log(eph);

// ANCHOR: Method call
console.log(eph.calcAge());
console.log(eph.age);

// ANCHOR: Challenge
/* 
Write a method to get summery
`Ephraim is a 49 year old Web Dev and he has a drivers license`
*/
console.log(eph.getSummery());
