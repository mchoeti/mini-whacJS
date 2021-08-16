/*
You will be provided with an initial array 
(the first argument in the destroyer function), followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments.
Note: You have to use the arguments object.

*/

// Ich nutze mal den SPread Operator um die Values die ich übergeben möchte zu bekommen
function destroyer(arr, ...valuesToRemove) {
    console.log("Wtf should i do?");
    const newArray = [...arr];
    // dann setzen wir filter ein und darin eben die InCLUDE Function.
    return newArray.filter(element => !valuesToRemove.includes(element));

}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
// result should be 1 


// #################################################################
//  Ein bissal was eingebaut mit Verzögerung
// #################################################################
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
console.log("Hello");
sleep(2000)
    .then(() => {
        console.log("World!");
    })
    .then(() => {
        sleep(2000)
            .then(() => {
                console.log("Goodbye!");
            });
    });