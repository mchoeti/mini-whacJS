// Write a function that splits an array (first argument)
// into groups the length of size (second argument)
// and returns them as a two-dimensional array.

/* 
Our goal for this Algorithm is to split arr (first argument) into smaller chunks of arrays with the length provided by size (second argument). There are 4 green checks (objectives) our code needs to pass in order to complete this Algorithm:

(['a', 'b', 'c', 'd'], 2) is expected to be [['a', 'b'], ['c', 'd']]
([0, 1, 2, 3, 4, 5], 3) is expected to be [[0, 1, 2], [3, 4, 5]]
([0, 1, 2, 3, 4, 5], 2) is expected to be [[0, 1], [2, 3], [4, 5]]
([0, 1, 2, 3, 4, 5], 4) is expected to be [[0, 1, 2, 3], [4, 5]]
Relevant Links
Array.push() 1.3k
Array.slice() 1.9k
*/

function chunkArrayInGroups(arr, size) {
    // Neues Array anlegen
    let newArr = [];
    // Loop mal schauen wie lang das vorgegebene Array ist
    for (let i = 0; i < arr.length; i += size) {
        // Mit Push wird der Array Wert ins neue Array geschrieben
        // und mit Slice wird das Array an Stelle size geteilt.
        // Ist die Size gleich 3 hat ein Array max 3 Werte
        newArr.push(arr.slice(i, i + size));
    }
    console.log(newArr);
    return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d", "e", "f", "g"], 3);

// var str = "How are you doing today?";
// var res = str.split(" ");
// var array = ["a", "b", "c", "d"];
// var sliced = array.slice(2);
// console.log(sliced);

// array.forEach((element) => {
//     console.log(element);

// Spontan um 5 erhöhen
let newArr = [];
for (let i = 0; i <= 20; i += 5) {
    newArr.push(i);
    console.log(newArr);
}

console.log("###################################");
let newMixedArray = [];
for (let i = 0; i <= 20; i++) {
    if (i % 5 === 0) {
        newMixedArray.push(i);
        console.log(newMixedArray);
    } else {
        newMixedArray.unshift("OIS", i);
        console.log(newMixedArray);
    }
}