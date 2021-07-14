function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

// Mal schnell das Array kopiert
let newNumbers = [...numbers];

console.log("Old Numbers", numbers);
console.log("Copied Array with Numbers ", newNumbers);


console.log(sum(...numbers));
// expected output: 6

console.log(sum.apply(null, numbers));
// expected output: 6

// Hinweis:
// Für Objektliterale (neu in ECMAScript 2018):
let objClone = {
    ...obj
};

leArrClone = [...arr];
// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax