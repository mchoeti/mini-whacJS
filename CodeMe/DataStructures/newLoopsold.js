/*jshint esversion: 6 */

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section

const weekdays = ["no", "Di", "MI", "Do", "Fr", "Sa", "So"];

// Eigenes Object hier können wir auch gleich computen
const hours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`day-6`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ES6 enhanced object literals
  hours,
  // und hier gleich nochmals. KEyword Function wird damit entfernt
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // hier noch alt mit colon und function keywords
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(`Order received 
        ${this.starterMenu[starterIndex]} and
        ${this.mainMenu[mainIndex]} will be delivered to
        ${address} at 
        ${time} See you soon`);
  },

  // Add some RL examples for the Spread Operator
  // hier wieder ohne Function keyword
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1} and ${ing2} and ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// und hier mit default Werten
console.log("--------------------------------");
console.log("--------------------------------");
console.log("--------------------------------");

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// bei nur einem Statement braucht man keinen Code Block {}
for (const item of menu) console.log(item);

console.log("--------------------------------");
console.log("--------------------------------");

for (const [i, el] of menu.entries()) {
  // Formartieren gleich mal mit Destructuren
  // console.log(`${item[0] + 1} : ${item[1]}`);
  console.log(`${i + 1} : ${el}`);
  //console.log(item);
}
console.log("--------------------------------");

// A bisserl testen
const myObject = {
  names: ["Christiano", "Dorella", "Samurelo"],
};
const unsereNamen = [...myObject.names];

// Hier die forof in altem Style
for (const item of unsereNamen.entries()) {
  console.log(`${item[0] + 1} : ${item[1]}`);
}
