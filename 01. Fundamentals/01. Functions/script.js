"use strict";
// ANCHOR: Function Declaration
/* NOTE: 
Function is a reusable block of code designed to perform a specific task
*/

function logger() {
    console.log(`Hi, my name is Eph`);
}

// ANCHOR: Calling/running/invoking function
logger();
logger();
logger();

// ANCHOR: Function statement/declaration with parameters
/* NOTE: 
Parameters are live variables and specific to a function.
Parameters are placeholders for real value to be passed in to a function
*/
function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

/* NOTE: 
The return statement ends executing a function further and returns an outcome from a function
 */

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

// ANCHOR: Calling function with arguments
/* NOTE: 
Arguments are the real values passed in to a function
*/
/* NOTE: 
We can store a functions return value within a variable and can be used later 
*/

const appleOrangeJuice = fruitProcessor(4, 2);
console.log(appleOrangeJuice);
