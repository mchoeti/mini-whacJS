// // The global variable
// var fixedValue = 4;

// function incrementer() {
//     // Only change code below this line
//     let newValue = fixedValue + 1;
//     return newValue;

//     // Only change code above this line
// }

// console.log(incrementer());


// The global variable
var fixedValue = 4;

// Only change code below this line
function incrementer(value) {
    return value + 1;
    // Only change code above this line
}

console.log(incrementer(fixedValue));
console.log("Oder so mit varialem Wert", incrementer(10));