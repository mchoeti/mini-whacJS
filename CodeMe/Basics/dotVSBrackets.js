// J.S. 43
const christian = {
    name: "Christian",
    age: 28,
    job: "Coder",
    friends: ["Bud", "Terence"]
};

//console.log(christian);
//console.log(christian.job);

const interresteIn = prompt("What do you want to know: Choose friends, job or age");
// Das klappt nur mit Brackets
console.log(christian[interresteIn]);
console.log("..................................");
// Das würde mit . nicht klappen
console.log(christian.interresteIn);

// Update HTML 
const htmlAnswer = christian[interresteIn];
document.querySelector(".answer").innerText = htmlAnswer;

// Console Error Meldung
if (christian[interresteIn]) {
    console.log(christian[interresteIn]);
} else {
    console.log("Falsche Angabe");
    alert("Falsche Angabe, bitte age, name , job oder friends wählen");
}

// Adding new properties and values to the object Christian
christian.location = "Coimbar";
christian['twitter'] = "@mchoeti";
console.log(christian);

// Challenge here: 
// Christian has value friends and his best friend is Bud.
const firstPart = "Christian hat: " + christian.friends.length;
//console.log(firstPart);
const secondPart = "Freunde und sein bester Freund nennt sich: " + christian.friends[0];
console.log(firstPart, secondPart);

// oder noch cooler mit neuem JS6
const firstES6 = `${christian.name}` + " hat " + `${christian.friends.length}` + " Freunde";
const secondES6 = " Sein bester ist: " + `${christian.friends[1]}`;
console.log("Neues JS --------nun Terence---------");
console.log(firstES6, secondES6);