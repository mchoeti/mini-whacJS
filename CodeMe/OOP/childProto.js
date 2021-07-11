function Animal() {}

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

function Dog() {}

// Remember that the prototype is like the "recipe" for creating an object. 
// In a way, the recipe for Bird now includes all the key "ingredients" from Animal.
Dog.prototype = Object.create(Animal.prototype);
let beagle = new Dog();
beagle.eat();