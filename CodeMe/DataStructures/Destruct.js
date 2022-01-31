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
    }

};
//console.log(restaurant.starterMenu);
restaurant.orderDelivery({
    time: "22:30",
    address: "Vive del Sol, 21 ",
    mainIndex: 2,
    starterIndex: 2,
});

// und hier mit default Werten
console.log("--------------------------------");
console.log("--------------------------------");
console.log("--------------------------------");

restaurant.orderDelivery({
    address: "Somewhere in Graz"
    // Rest kommit mit Default Werten
});