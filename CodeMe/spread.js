/*
ES6's new spread operator allows us to easily copy all of an array's elements, in order, with a simple and highly readable syntax. The spread syntax simply looks like this: ...
*/

// Example usage
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        // Damir wird jedes mal ein neues Array erzeugt.
        newArr.push([...arr]);
        num--;
    }
    return newArr;
}

console.log(copyMachine([true, false, true], 4));
//console.log("This Arrays: ", thisArray);
//console.log("That Arrays: ", thatArray);

// Another huge advantage of the spread operator is the ability to combine arrays, or to insert all the elements of one array into another, at any index.
function spreadOut() {
    let fragment = ["to", "code"];
    let sentence = ["learning", ...fragment, "is", "fun"];
    return sentence;
}
console.log(spreadOut());

let test = 10;
if (test === 10) {
    console.log("Congratulation it is a 10");
} else {
    console.log("Not really");
}