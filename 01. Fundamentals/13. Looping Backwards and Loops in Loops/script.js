"use strict";

const eph = [
    "Ephraim",
    "S",
    2037 - 1991,
    "Web dev",
    ["Michael", "Steven", "Bob"],
    true,
];

// ANCHOR: Looping backwards
for (let i = eph.length - 1; i >= 0; i--) {
    console.log(i, eph[i]);
}

// ANCHOR: Loops in loops
for (let i = 1; i < 3; i++) {
    console.log(`===Starting Exercise ${i}`);

    for (let j = 1; j < 3; j++) {
        console.log(`Exercise ${i}, rep ${j}`);
    }
}
