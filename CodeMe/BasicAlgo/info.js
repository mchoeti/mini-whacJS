// Challenge
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

console.log("##########################");
// Alternative vor JS6
const upperCasedOld = words.map(function(word) {
    return word.toUpperCase();
});

const lowerCasedOld = words.map(function(word) {
    return word.toLowerCase();
});
console.log(lowerCased);
console.log(upperCased);

function mutation(arr) {
    let first = arr[1].toLowerCase();
    //console.log("Should be Low.....  " + first);
    let second = arr[0].toLowerCase();
    //console.log("Should be High.....  " + second);
    for (let i = 0; i < first.length; i++) {
        //console.log(i);
        if (second.indexOf(first[i]) < 0) return false;
    }
    return true;
}

// const lowerCased = arr.map(ar => ar.toLowerCase());
// console.log(lowerCased);
// // oder uppercase
// const upperCased = arr.map(ar => ar.toUpperCase());
// console.log(upperCased);

console.log("##########################");
// should be false
console.log(mutation(["Helsssslo", "haallo"]));
// should be true weil die letter h,l,o in "Hallo" vorkommen
console.log(mutation(["Hallo", "hlo"]));