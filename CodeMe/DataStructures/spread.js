/*jshint esversion: 6 */

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({
        starterIndex = 1,
        mainIndex = 0,
        time = "20:00",
        address
    }) {
        console.log(`Order received 
        ${this.starterMenu[starterIndex]} and
        ${this.mainMenu[mainIndex]} will be delivered to
        ${address} at 
        ${time} See you soon`);
    },

    // Add some RL examples for the Spread Operator
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your pasta with ${ing1} and ${ing2} and ${ing3}`);
    }

};
// //console.log(restaurant.starterMenu);
// restaurant.orderDelivery({
//     time: "22:30",
//     address: "Vive del Sol, 21 ",
//     mainIndex: 2,
//     starterIndex: 2,
// });

// und hier mit default Werten
console.log("--------------------------------");
console.log("--------------------------------");
console.log("--------------------------------");

// restaurant.orderDelivery({
//     address: "Somewhere in Graz"
//     // Rest kommit mit Default Werten
// });


const arr = [7, 8, 9];
// mit dem Spread Operator bekommen wir halt auch die Werte von arr ins neue Array rein.

const newArr = [1, 2, ...arr];
console.log(newArr);
// Immer dann wenn wir die Elemente indivuduell brauchen nehmen wir bitte den Spread Operator
// siehe hier
console.log(...newArr);

// ein Array mit einem weiterem Essens Elementen 
// Neues Element von Scratch quasi mit alten Werten
const newMenu = [...restaurant.mainMenu, "Döner", "Gnocci"];
console.log(newMenu);

// Copy Orig Array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

console.log("--------------------------------");
console.log("--------------------------------");

// Join 2 arrays Main and StarterMenu
const fullMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(fullMenu, fullMenu.length);

// Spread wirkt auf alle Iterables ( Strings, Arrays, Maps or SETS)
const string = "Christian";
const letter = [...string, " ", "H."];
console.log(...letter);

// Order pasta from Prompt Function
const ingredients = [
    // prompt("Lets make paste Zutat 1 ?"),
    // prompt("Zutat 2 ?"),
    // prompt("Zutat 3 ?"),
];
console.log(ingredients);
restaurant.orderPasta(...ingredients);

// Objects seit 2018
const newRestaurant = {
    ...restaurant,
    founder: "Giuseppe",
    foundedIn: 1999
};

console.log(newRestaurant);

console.log("--------------------------------");
console.log("--------------------------------");
const restaurantCopy = {
    ...restaurant
};
restaurantCopy.name = "Edis Einkehr";
console.log(restaurantCopy.name);
console.log(restaurant.name);

