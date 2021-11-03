const John = [
    "john", 12, "Sepplhuber", true, ["Wert1", "Wert2", "Wert3"]
];

for (let i = John.length - 1; i >= 0; i--) {
    console.log("Array position", i, John[i]);
}

// Loop inside a Loop
for (let exercise = 1; exercise <= 9; exercise++) {
    console.log(`------Starting Exercise --------- ${exercise} `);
    for (let rep = 1; rep <= 3; rep++) {
        console.log(`Lifting number  ${rep}🏋️‍♂️`);
    }
}