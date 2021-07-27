// Return a Sorted Array Without Changing the Original Array
var globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
    // Only change code below this line
    const newArray = [...arr];
    // newArray.sort(); -- da gehts nur nach Asci also Sortierfunktion einbauen
    newArray.sort(function (a, b) {
        return a - b;
    });
    console.log(newArray);
    return newArray;

    // Only change code above this line
}
nonMutatingSort(globalArray);


// Only change code below this line
//let newArr = [...inputAnim];