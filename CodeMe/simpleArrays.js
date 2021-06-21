let mySimpleArray = [7, 50, 10, 30];

// Vor Each
mySimpleArray.forEach(element => {
    console.log(element);
});

// mit einer simplen FOR
for (var i = 0; i < mySimpleArray.length; i++) {
    console.log("With a FOR: ", mySimpleArray[i]);
}

// einfachr nur mal Werte ausgeben
console.log(mySimpleArray.values());

// iterator bedeutet Zeiger  :-)
const iterator = mySimpleArray.values();
for (const value of iterator) {
    console.log("Der Wert der Arrays ", value);
}


// if in einer FOR
let largestNumber = 0;
for (var i = 0; i < mySimpleArray.length; i++) {
    // if (mySimpleArray[i] > largestNumber) {
    //     largestNumber = mySimpleArray[i];
    console.log(i);
    if (mySimpleArray.values() == 10) {
        console.log("You found Value 10, the position in the array is: ", mySimpleArray[i]);
    }
    // }

    //console.log("Hallo largestet Number: ", largestNumber);
    //return largestNumber;
}

//console.log("Hallo largestet Number: ", largestNumber);