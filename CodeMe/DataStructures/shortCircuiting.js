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
    },

    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};

// und hier mit default Werten
console.log("--------------------------------");
console.log("--------------------------------");
console.log("--------------------------------");


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

// Objects seit 2018 Spread ist immer auf der rechten Seiten
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

// SPREAD wäre right hand simpledog
const arrNew = [1, 2, ...[3, 4]];
console.log(arrNew);
console.log(...arrNew);

// REST wäre left hand side und muss immer das letzte sein.
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

// Rest in Objects
const {
    sat,
    ...weekdays
} = restaurant.openingHours;
console.log(weekdays);

// Rest in functions
const add = function (...numbers) {
    //console.log(...numbers);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum);
};

add(2, 3);
add(5, 7, 21, 2, 3, 4, 56);
// With Rest we compress
// With Spread we expand

const x = [23, 44, 55];
add(...x);
console.log(add);

// Auch wieder wird der Rest operator dazu verwenden alle nicht gebrauchten values zu collecten
restaurant.orderPizza("Mushrooms", "onion", "olives", "spinach");
// Siehe Console, dasss erste wird als MAin Argoment gestored, 
// die anderen in ein anderes-
restaurant.orderPizza("Mushrooms");


console.log(3 || "Christian");
console.log("" || "Chris");
console.log(true || false);
console.log(undefined || null);
// Result is true when eines true is
console.log("" || undefined || 0 || "Chris Now " || 22);

// noch gibts keine Gäste
console.log(restaurant.guests);
// Wenn es keine gibt. Dann gib ihm welche
const guests = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guests);

// Gleich mal auf 22 setzen damit die Eigenschaft "true" is, ansonsten sind es 12 Gäste
restaurant.numGuest = 22;
// DAs klappt aber auch gleich
const guests2 = restaurant.numGuest || 12;
console.log(guests2);
// Siehe hier nun sind es 22 Gäste im Resti und die Eigentschaft Gäste gibts auch 
console.log(restaurant);

console.log("-----------------");
console.log("---- AND ----");
console.log("-----------------");

// END Operator && is nur true wenn alle Werte true sind
console.log(3 && "Christian");
console.log("" && "Chris");
console.log(true && false);
console.log(undefined && null);


// Practical AND USecase
// if (restaurant.orderPizza) {
//     restaurant.orderPizza("Muscheln", "Spinat");
// }

// Kann man auch gleichn so anwenden.
// wenbn es restaurant.orderPizza gibt dann wird weitergemacht
restaurant.orderPizza && restaurant.orderPizza("Muscheln", "Spinat");

// Error fixen 
// 'object spread property' is only available in ES9 (use 'esversion: 9'). (W119)