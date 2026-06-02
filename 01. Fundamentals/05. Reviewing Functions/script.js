"use strict";

// ANCHOR: Helper function
function calcAge(birthYear) {
    return 2037 - birthYear;
}

// ANCHOR: Function declaration
function yearsUntilRetirement(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return `${firstName} will retire in ${retirement} years`;
    } else {
        return `${firstName} has already retired`;
    }
}

console.log(yearsUntilRetirement(1988, "Eph"));
console.log(yearsUntilRetirement(1980, "Bob"));
console.log(yearsUntilRetirement(1970, "Steven"));
