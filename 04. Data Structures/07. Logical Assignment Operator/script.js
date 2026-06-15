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

// ANCHOR: Logical assignment operator
/* NOTE: 
Logical assignment operators in JavaScript combine logical operations (||, &&, or ??) with an assignment (=).
*/

const restaurantWithGusts = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const restaurantWithoutGusts = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// ANCHOR: Logical OR Assignment (||=)
/* NOTE: 
This operator assigns the right-hand value only if the left-hand operand evaluates to a falsy value (such as null, undefined, false, 0, "", or NaN) 
*/
/* 
// restaurantWithGusts.numGuests = restaurantWithGusts.numGuests || 10;
// restaurantWithoutGusts.numGuests = restaurantWithoutGusts.numGuests || 10;

restaurantWithGusts.numGuests ||= 10;
restaurantWithoutGusts.numGuests ||= 10;

console.log(restaurantWithGusts);
console.log(restaurantWithoutGusts);
*/

// ANCHOR: Nullish Coalescing Assignment (??=)
/* NOTE: 
This operator assigns the right-hand value only if the left-hand operand is strictly null or undefined. 
*/
/* 
// restaurantWithGusts.numGuests = restaurantWithGusts.numGuests ?? 10;
// restaurantWithoutGusts.numGuests = restaurantWithoutGusts.numGuests ?? 10;

restaurantWithGusts.numGuests ??= 10;
restaurantWithoutGusts.numGuests ??= 10;

console.log(restaurantWithGusts);
console.log(restaurantWithoutGusts); 
*/

// ANCHOR: Logical AND Assignment (&&=)
/* NOTE: 
This operator assigns the right-hand value only if the left-hand operand is truthy (any value that is not falsy).
*/

// restaurantWithGusts.owner = restaurantWithGusts.owner && '<ANONYMOUS>';
// restaurantWithoutGusts.owner = restaurantWithoutGusts.owner && '<ANONYMOUS>';

restaurantWithGusts.owner &&= '<ANONYMOUS>';
restaurantWithoutGusts.owner &&= '<ANONYMOUS>';

console.log(restaurantWithGusts);
console.log(restaurantWithoutGusts);
