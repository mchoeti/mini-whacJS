function Animal() {}
Animal.prototype.eat = function () {
    console.log("nom nom nom");
};

function Bird() {}
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
Bird.prototype.fly = function () {
    console.log("I'm flying!");
};

let duck = new Bird();
duck.eat();
duck.fly();


function Dog() {}
// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
    console.log("Woof!");
};
// Only change code above this line

let beagle = new Dog();
beagle.bark();