const user = {
    // Properties with different values 
    name: "Christian",
    age: 33,
    married: false,
    purchases: ["phone", "laptop", "beer"],
    // Methods are Functions attached to an object
    sayName: function () {
        // this means user.name
        console.log(this.name);
    }
};

// Basic Objects
console.log(user.purchases);

// oder mal die Methode aufrufen ( invoke / wäre eben aufrufen)
user.sayName();


// Add apples to Windows Functions
function apples() {
    console.log("apples");
}

// 2 Varianten apples anzugeben
// window.apples();
console.log("oder so");
apples();

// A sample window Object
//console.log(this);


// Methods are Functions attached to an object