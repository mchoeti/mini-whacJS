function Bird() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
}

function Dog() {
    this.name = "Wuffi";
    this.color = "grey";
    this.numLegs = 4;
}

let terrier = new Dog();
console.log("Std Name: ", terrier);
terrier.name = "Neuer Name";
console.log(terrier);