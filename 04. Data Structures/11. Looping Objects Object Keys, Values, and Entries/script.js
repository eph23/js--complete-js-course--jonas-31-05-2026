'use strict';

const openingHours = {
  wed: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours,

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// ANCHOR: Object keys
/* NOTE: 
The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.
 */
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open ${properties.length} days of a week: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// ANCHOR: Object values
/* NOTE: 
In JavaScript, Object.values() is a static method that returns an array of a given object's own enumerable string-keyed property values
*/

const values = Object.values(openingHours);
console.log(values);

// ANCHOR: Object entries
/* NOTE: 
The Object.entries() method in JavaScript transforms an object into a two-dimensional array of key-value pairs
*/

const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
