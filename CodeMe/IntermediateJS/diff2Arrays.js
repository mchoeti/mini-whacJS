/*
Compare two arrays and return a new array with any items only found in one of the two given arrays,
but not both. 
In other words, return the symmetric difference of the two arrays.

[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
*/

// Starting point
function diffArray(arr1, arr2) {
    var newArr1 = [...arr1];
    var newArr2 = [...arr2];
    console.log("The following value is different");
    return arr1
        .concat(newArr2)
        // nur mit concat wäre es eben 
        /* 
            [
            1, 2, 3, 5, 1,
            2, 3, 4, 5
            ]
        */
        .filter(item => !newArr1.includes(item) || !newArr2.includes(item));
    // return newArr;
}

//diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));