/*jshint esversion: 6 */

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section

const weekdays = ["mon", "thu", "wed", "thu", "fri", "sat", "sun"];

// Eigenes Object hier können wir auch gleich computen
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[6]]: {
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
  openingHours,
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
};

// Store OpeningHours in a Variable Also Property Names
const property = Object.keys(openingHours);

// Loop
let openStr = `We are open on ${property.length} days:`;
for (const day of property) {
  openStr += ` ${day} !`;
}
console.log(openStr);

// Property Values
const values = Object.values(openingHours);
console.log(values);

// Entire Object
const entries = Object.entries(openingHours);
console.log(entries);

// Lösen wir gleich mit einem Destructur der
// Bei Zweifel einach das Objekt anschaeun
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open}h and close at ${close}h `);
}

// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }
