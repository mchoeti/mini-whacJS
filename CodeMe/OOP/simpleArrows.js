// ES5 Regular function
let add = function (a, b) {
    return a + b;
};


// ES6 Arrow function
let addAdvanced = (a, b) => {
    return a + b;
};

console.log(add(1, 2));
console.log(addAdvanced(4, 5));

/* conslusio

Anstelle des functionSchlüsselworts 
verwendet die Pfeilfunktion einen Pfeil ( =>),
der aus einem Gleichheitszeichen und einem Zeichen größer als besteht
 (nicht zu verwechseln mit dem Operator größer als oder gleich, der geschrieben wird >=).

*/

// Bei nur einem Argument gehts noch kürzer

// ES5 Regular function
let double = function (n) {
    return n * 2;
};
console.log(double(3)); // 6

// ES6 Arrow function
let doubleAdvanced = n => n * 3;
console.log(doubleAdvanced(3)); // 9