// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
    // Only change code below this line
    var newArray = [...s];
    newArray.forEach(function (element) {
        console.log("Hallo");
        const index = newArray.indexOf(98);
        if (index > -1) {
            newArray.splice(index, 1);
        }
    });

    console.log("New Array", newArray);
    // Only change code above this line
    return newArray;
};

var new_s = s.myFilter(function (item) {
    return item % 2 === 1;
});

console.log("Hallo", new_s);


// const array1 = ['a', 'b', 'c'];
// array1.forEach(element => {
//     console.log(element)
// });


// var words = ['eins', 'zwei', 'drei', 'vier'];
// words.forEach(function (word) {
//     console.log(word);
//     if (word === 'zwei') {
//         words.shift();
//     }
// });