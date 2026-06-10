'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// ANCHOR: Destructuring arrays
/* NOTE: 
a shorthand syntax introduced in ES6 that allows you to unpack values from arrays directly into distinct variables
*/

const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z);

const [first, second] = restaurant.categories;
console.log(first);
console.log(second);

// ANCHOR: Skipping value while destructuring
const [one, , two] = restaurant.categories;
console.log(one);
console.log(two);

// ANCHOR: Destructuring returned value
const [starter, main] = restaurant.order(2, 1);
console.log(starter);
console.log(main);

// ANCHOR: Destructuring nested array
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j);

const [l, , [m, n]] = nested;
console.log(l, m, n);

// ANCHOR: Default value
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
