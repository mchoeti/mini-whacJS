function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

// Only change code below this line
let check = Dog.prototype.isPrototypeOf(beagle);
console.log(check);


// Second One Understand Proto Chaining
function Dog2(name) {
    this.name = name;
}

let beagle2 = new Dog("Snoopy");
Dog2.prototype.isPrototypeOf(beagle); // yields true
// Fix the code below so that it evaluates to true
let check2 = Object.prototype.isPrototypeOf(Dog2.prototype);
console.log("Check2: ", check2);