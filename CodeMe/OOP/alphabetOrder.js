function alphabeticalOrder(arr) {
    // Only change code below this line
    return arr.sort(function (a, b) {
        return a === b ? 0 : a < b ? -1 : 1;
    });

    // Only change code above this line
}
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));


// Nach Nummern sortieren 
function ascendingOrder(arr) {
    return arr.sort(function (a, b) {
        return a - b;
    });
}

console.log(ascendingOrder([1, 5, 2, 3, 4]));


// Buchstaben sortieren
function reverseAlpha(arr) {
    return arr.sort(function (a, b) {
        // Alphabetisch  [ 'b', 'h', 'l', 's', 'z' 
        //return a === b ? 0 : a < b ? -1 : 1;
        // Reverse -- [ 'z', 's', 'l', 'h', 'b' ] 
        return a === b ? 0 : a < b ? 1 : -1;
    });
}
console.log(reverseAlpha(['l', 'h', 'z', 'b', 's']));


/* to read

 Mainly in a mathematics, let’s say we have a set of numbers ( 20, 10, 5, 25) and we want to rearrange them ascending, we pick the first number ( 20 ) and compare it to each other number in the set to check if it is the lowest number in the order criteria until we pick a number is lower than it to put it first in the order. If we didn’t find a lower number so ( 20 ) will be the first number in the order but, if we found a lower number, we replace the 20 with that number and start comparing it with other numbers and repeat this steps till finding the lowest ordered number then we move to the next one. For our example: we will check if 20 < 10 by subtracting them ( 20 - 10 ), and then we have 3 cases for the result:
1- if it is negative so 10 is lower than 20 so 20 replaced by 10 and we start comparing 10 with other numbers.
2- if it is positive so 20 is lower than 10 and it still the first temporary first ordered number.
3- if it is 0 so both are the same value and they remain in the same order. (( not sure that I have said this right ))

by repeating this steps for each number we can order them with specific criteria.

*/