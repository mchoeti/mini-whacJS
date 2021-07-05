function Dog() {
    this.name = "Wuffi";
    this.color = "grey";
    this.numLegs = 4;
}

// Use the Dog constructor from the last lesson to create a new instance of Dog, assigning it to a variable hound.
let terrier = new Dog();
console.log("Std Name: ", terrier);
terrier.name = "Neuer Name";