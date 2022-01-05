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
        console.log("Now we can start !!!!");
    }
}