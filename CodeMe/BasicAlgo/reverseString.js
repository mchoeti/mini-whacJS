// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

function reverseString(str) {
    let simpleArray = [];
    simpleArray = str.split("");
    console.log(simpleArray);
    let reversedArray = [];
    reversedArray = simpleArray.reverse().join("");
    console.log(reversedArray);
    return reversedArray;
}

console.log(reverseString("hello"));

function reverseString2(str) {
    let strReverse = str.split('').reverse().join(''); // 'lkjhgfdsa'
    return strReverse;
}

console.log("New short Simple Reverse: ", reverseString2("abcdefgh"));