// combine an Array into a String Using the join Method
// Here's an example:
/*
var arr = ["Hello", "World"];
var str = arr.join(" ");
str would have a value of the string Hello World.
*/


function sentensify(str) {
    // Only change code below this line

    const newString = str.split(/\W/).join(" ");
    console.log(newString);
    return newString;

    // Only change code above this line
}
sentensify("May-the-force-be-with-you");