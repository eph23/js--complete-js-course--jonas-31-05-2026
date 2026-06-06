"use strict";

const eph = [
    "Ephraim",
    "S",
    2037 - 1991,
    "Web dev",
    ["Michael", "Steven", "Bob"],
    true,
];

// ANCHOR: while Loop
let rep = 1;
while (rep <= 5) {
    console.log(`Lifting weights, rep ${rep}`);
    rep++;
}

let dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.floor(Math.random() * 6) + 1;

    if (dice === 6) {
        console.log(`You rolled a ${dice}....`);
    }
}
