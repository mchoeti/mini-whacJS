/* myNestedArray
Use the every method inside the checkPositive function to check if every element in arr is positive. The function should return a Boolean value.
*/

function checkPositive(arr) {
    // Only change code below this line
    return arr.every(function (currentValue) {
        return currentValue > 0;
        // Only change code above this line
    });
}

console.log(checkPositive([1, 2, 3, 7, 5]));
console.log(checkPositive([1, 2, -3, 7, 5]));

// and the sumOfAges
console.log("SOME Methode");
console.log("############################");


/*
Weil das Array ja positiv sein muss noch die Abfrage größer 0 einbauen 
 */
function checkPositive(arr) {
    // Only change code below this line
    return arr.some(function (currentValue) {
        return currentValue > 0;
    });

    // Only change code above this line
}
console.log(checkPositive([1, 2, 3, -47, 5]));