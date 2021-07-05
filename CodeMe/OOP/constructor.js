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

let hound = new Dog();
console.log("Std Name: ", hound);
hound.name = "Neuer Name";
console.log(hound);