// function Dog(name) {
//     this.name = name;
//     //Dog.prototype.numLegs = 4;
// }
// Dog.prototype.numLegs = 4;
// let beagle = new Dog("Snoopy");

// console.log(beagle.numLegs);

// and now iterate 

function Dog(name) {
    this.name = name;
}
Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

// Erstmal die neuen Arrays
let ownProps = [];
let prototypeProps = [];

for (let property in beagle) {
    if (beagle.hasOwnProperty(property)) {
        ownProps.push(property);
    } else {
        prototypeProps.push(property);
    }
}

console.log(ownProps);
console.log(prototypeProps);