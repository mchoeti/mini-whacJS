/*
Iterate Through All an Array's Items Using For LoopsPassed
Modify the function, using a for loop, to return a filtered version 
of the passed array such that any array nested within arr containing elem has been removed.
*/

function filteredArrayWith(arr, elem) {
    let newArr = [];
    // Filtere Nur Elemente die über Wert X verfügen
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) === 1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(
    "Nur die Arrays die über den Wert verfügen: ",
    filteredArrayWith(
        [
            ["trumpets", 2],
            ["flutes", 4],
            ["saxophones", 2],
        ],
        4
    )
);

function filteredArrayWithout(arr, elem) {
    let newArr = [];
    // Filtere Nur Elemente die über Wert X verfügen
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) === -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(
    "Nur die Arrays die NICHT über den Wert verfügen: ",
    filteredArrayWithout(
        [
            ["trumpets", 2],
            ["flutes", 4],
            ["saxophones", 2],
        ],
        4
    )
);