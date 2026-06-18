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

if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mom);
}

// ANCHOR: Optional chaining (?.)
/* NOTE: 
Optional chaining (?.) is a safe way to access deeply nested properties or functions
*/
console.log(restaurant.openingHours.mom?.open || 'closed');
console.log(restaurant.openingHours.wed?.open);

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of weekDays) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, ${open !== 'closed' ? `we open at ${open}` : open}`);
}

// ANCHOR: Optional chaining on methods
console.log(restaurant.order?.(1, 2) ?? 'Method dose not exists');
console.log(restaurant.orderRisotto?.(1, 2) ?? 'Method dose not exists');

// ANCHOR: Optional chaining on arrays
const users = [
  {
    name: 'Ephraim',
    email: 'hello@example.com',
  },
];

if (users.length > 0) {
  console.log(users[0].name);
} else {
  console.log(`User array empty`);
}

console.log(users[0]?.name ?? 'User array empty');
console.log(users[1]?.name ?? 'User not found');
