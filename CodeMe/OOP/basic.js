let simpledog = {
    name: "Aflac",
    numLegs: 2
};

//console.log(simpledog);
//console.log(simpledog.name);


let dogOld2 = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () {
        return "This dog has " + dogOld2.numLegs + " legs.";
    }
};

console.log(dogOld2.sayLegs());

// Using THIS

let dog = {
    name: "Spot",
    numLegs: 5,
    sayLegs: function () {
        return "This dog has " + this.numLegs + " legs.";
    }
};

console.log(dog.sayLegs());