function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");

//console.log(duck);
//console.log(canary);


// Add it to an array
let ownProps = [];

// Alle Eigenschaften von der Ente in ein Array, wenn sie da sind
for (let property in duck) {
    if (duck.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}

console.log(ownProps);