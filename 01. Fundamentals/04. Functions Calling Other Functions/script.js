"use strict";

// Anchor: Helper Functions
/* NOTE: 
A helper function is a small, reusable function designed to perform a specific, repetitive task to make your main code cleaner and easier to read.
*/
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    // ANCHOR Helper function call
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges`;
    return juice;
}

const appleOrangeJuice = fruitProcessor(2, 3);
console.log(appleOrangeJuice);
