function Dog(name) {
    this.name = name;
}
let beagle = new Dog();
// Only change code below this line
function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
        return true;
    } else {
        return false;
    }
}

console.log(joinDogFraternity(beagle));