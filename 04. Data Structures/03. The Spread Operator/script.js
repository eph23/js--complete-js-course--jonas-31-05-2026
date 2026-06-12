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
};

// ANCHOR: The spread operator
/* NOTE: 
The spread operator allows you to unpack or expand elements from an iterable (like an array or a string) or properties from an object into individual values
*/
const arr = [7, 8, 9];
console.log(arr);

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// ANCHOR: Copy an array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// ANCHOR: Join arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// ANCHOR: In method argument
restaurant.orderPasta(...['mushrooms', 'tomato', 'cheese']);

// ANCHOR: Object

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);
