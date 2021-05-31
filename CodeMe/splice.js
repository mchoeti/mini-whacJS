// nur 7, 2 und 1 sollen überbleiben
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(0, 4);
arr.splice(1, 1);
console.log(arr);

function htmlColorNames(arr) {
    // Only change code below this line
    arr.splice(0, 1, "DarkSalmon");
    arr.splice(1, 1, "BlanchedAlmond");
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
    ])
);