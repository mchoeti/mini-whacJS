const names = ["Chris", "Sam", "Dori", "Daniel", "sepp"];

// For Of :-)
for (const name of names) {
    console.log(`Hello there ${name}`);
    // oder simpler
    //console.log(name);
    if (name === "Sam") {
        console.log("Welcome SAMBOY !!!!!!!");
        break;
    }
}

let loading = 0;
while (loading <= 100) {
    console.log("Loading ..........", loading, "%");
    loading += 10;
    if (loading === 100) {
        console.log("Now we can start !!!!😊");
    }
}


const John = {
    fullName: "John Doe",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        //this.BMI = this.mass / (this.height * this.height);
        this.BMI = this.mass / this.height ** 2;
        //console.log(this.BMI);
        return this.BMI;
    }
};

const typesOfJohn = [];
for (const types in John) {
    // mit dem If hier werden dann halt nur STRING typen hinzugfügt
    if (typeof types !== 'string') continue; {
        // damit nehm ich mal nur die Typen also Num oder String oder sowas und pack sie in das Array
        typesOfJohn.push(typeof types);
    }
}
console.log(typesOfJohn, "ONLY STRINGS");