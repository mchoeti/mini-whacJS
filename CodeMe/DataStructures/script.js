/*jslint node: true */
//"use strict";

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
};
// receive 2 values from a function
console.log("Now it is working ", restaurant.order(2, 0));


// exrtrahieren von Restaurant bzw. den Kategorien
// Extracturing verwenden wir für ganz viele Dinge.
let [main, , third] = restaurant.categories;
console.log("Orig: ", main, third);

// Beispielsweise wollen wir die Werte switchen
[main, third] = [third, main];
console.log("Switched: ", main, third);



// Destructuring also einfach mal ein bisserl entpacken orig Array bleibt natürlich unverändert
const arr = [2, 3, 4, 5];
const [x, y, z, a] = arr;
// hier nehm ich einfach mal die werte x und a raus..  Die hab ich ja vorher definiert.
console.log(x, a);
console.log(arr);

const nested = [2, 4, [5, 6, 7]];
//const [i, , j] = nested;
//console.log("From the array", i, j);
const [i, , [j, k]] = nested;
console.log("From the nested array", i, j, k);

// Do some default valuesToRemove
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);