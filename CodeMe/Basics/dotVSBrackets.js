const christian = {
    name: "christian",
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