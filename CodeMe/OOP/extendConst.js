function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new Dog("Onkel", "blue");
//console.log("Std Name: ", terrier);
//terrier.name = "Neuer Name";

// Wenn es manuel erstellt wird, ist es natürlich falsch weil es keine Instanz is
console.log(terrier);
let birdie = {
    name: "Mildred",
    color: "Yellow",
    numLegs: 2
}
// checken ob das passt
console.log(terrier instanceof Dog);
console.log(birdie instanceof Dog);