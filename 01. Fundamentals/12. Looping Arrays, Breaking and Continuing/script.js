"use strict";

const eph = [
    "Ephraim",
    "S",
    2037 - 1991,
    "Web dev",
    ["Michael", "Steven", "Bob"],
    true,
];

// ANCHOR: Looping array
for (let i = 0; i < eph.length; i++) {
    console.log(eph[i], typeof eph[i]);
}

console.log(`End of loop`);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

// ANCHOR: Continue and Break
/* continue */
console.log(`---Continue---`);
for (let i = 0; i < eph.length; i++) {
    if (typeof eph[i] !== "string") {
        continue;
    } else {
        console.log(eph[i], typeof eph[i]);
    }
}

/* break */
console.log(`---Break---`);
for (let i = 0; i < eph.length; i++) {
    if (typeof eph[i] === "number") {
        break;
    } else {
        console.log(eph[i], typeof eph[i]);
    }
}
