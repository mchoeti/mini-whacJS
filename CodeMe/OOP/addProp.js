function Dog(name) {
    this.name = name;
}

let beagle = new Dog();
// Adding new values to the prototype
Dog.prototype = {
    // Only change code below this line
    constructor: Dog,
    numLegs: 2,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log("My name is " + this.name);
    }
};

console.log(Dog.prototype);
console.log(beagle.name = "Hallo");