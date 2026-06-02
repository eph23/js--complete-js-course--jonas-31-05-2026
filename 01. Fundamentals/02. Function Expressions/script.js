"use strict";

// ANCHOR: Function Declaration
function calcAgeDeclaration(birthYear) {
    return 2037 - birthYear;
}

const ageDeclaration = calcAgeDeclaration(1988);
console.log("Age from Function Declaration", ageDeclaration);

// ANCHOR: Function Expressions
/* NOTE: 
A function expression is a way to create a function and assign it to a variable or pass it directly into another function. Because it is an expression, it evaluates to a specific function value and does not execute automatically when the script loads 
*/
const calcAgeExpression = function (birthYear) {
    return 2037 - birthYear;
};

const ageExpression = calcAgeExpression(1988);
console.log("Age from Function Expression", ageExpression);

/* NOTE: 
Statement vs expression
An expression produces a value, while a statement performs an action
*/