//uses 2 paramaters ( begin and End)
//slice ( begin, end)

// RETURN nicht vergessen :-)
function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line
    let newArr = [...inputAnim];
    newArr = anim.slice(beginSlice, endSlice);
    return newArr;
    // simpler
    //  return anim.slice(beginSlice, endSlice);

    // Only change code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];

console.log(sliceArray(inputAnim, 1, 3));


// simple sample with    
// var arr = ["Cat", "Dog", "Tiger", "Zebra"];
// var newArray = arr.slice(1, 3);
// console.log(newArray);