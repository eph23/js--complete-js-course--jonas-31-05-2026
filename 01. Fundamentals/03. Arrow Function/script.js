"use strict";

// ANCHOR: Function Declaration
function calcAgeDeclaration(birthYear) {
    return 2037 - birthYear;
}

const ageDeclaration = calcAgeDeclaration(1988);
console.log("Age from Function Declaration", ageDeclaration);

// ANCHOR: Function Expressions
const calcAgeExpression = function (birthYear) {
    return 2037 - birthYear;
};

const ageExpression = calcAgeExpression(1988);
console.log("Age from Function Expression", ageExpression);

// ANCHOR: Arrow Functions
/* NOTE: 
An arrow function is a compact alternative to a traditional function expression
*/

const calcAgeArrow = (birthYear) => 2037 - birthYear;
const ageArrow = calcAgeArrow(1988);
console.log("Age from Arrow Function", ageArrow);

/* NOTE: 
Simple form of arrow function has a concise body and returns implicitly.
*/

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1988, "Eph"));
console.log(yearsUntilRetirement(1980, "Bob"));
