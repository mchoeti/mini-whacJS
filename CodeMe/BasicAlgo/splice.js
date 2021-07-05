// nur 7, 2 und 1 sollen überbleiben
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(0, 4);
arr.splice(1, 1);
console.log(arr);

function htmlColorNames(arr) {
    // Erster Teil Platz im Array, 2. Die Länge und als 3. Parameter wird ersetzt
    arr.splice(0, 1, "DarkSalmon");
    arr.splice(1, 1, "BlanchedAlmond");
    arr.splice(2, 4, "Alora");
    // arr.push("DarkSalmon", "BlanchedAlmond");

    // Only change code above this line
    return arr;
}
console.log(
    htmlColorNames([
        "DarkGoldenRod",
        "WhiteSmoke",
        "LavenderBlush",
        "PaleTurquoise",
        "FireBrick",
        "FireBrick02",
        "FireBrick03",
    ])
);

for (let i = 0; i < 10; i++) {
    console.log("Love my Job " + i);
}