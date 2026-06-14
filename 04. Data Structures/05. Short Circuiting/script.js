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

  openingHours: {
    thu: {
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
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// ANCHOR: Sort Circuiting
/* NOTE: 
Short-circuiting in JavaScript is an evaluation behavior where logical operators stop checking conditions from left to right as soon as the final outcome of the expression is guaranteed
*/

// Logical OR (||) operator
/* NOTE: 
The (||) operator returns the first truthy value it encounters.
*/
console.log(`===(OR) ===`);
console.log(3 || 'Eph');
console.log('' || 'Eph');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

const gustsTernary = restaurant.numGuests ? restaurant.numGuests : 100;
console.log(gustsTernary);

const gustsShortCircuit = restaurant.numGuests || 10;
console.log(gustsShortCircuit);

console.log(`===(AND) ===`);
// Logical AND (&&) operator
/* NOTE: 
The (&&) operator returns the first falsy value it encounters.
*/
console.log(0 && 'Eph');
console.log(3 && 'Eph');
console.log(true && 0);
console.log(undefined && null);
console.log(null && undefined);

console.log('Eph' && 23 && undefined && 0 && '' && 'Hello' && 23 && null);

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza &&
  restaurant.orderPizza('mushrooms', 'spinach', 'olives');
