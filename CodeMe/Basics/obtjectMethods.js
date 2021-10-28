// J.S. 43
const christian = {
    name: "Christian",
    age: 28,
    birthYear: 1977,
    job: "Coder",
    friends: ["Bud", "Terence"],
    hasChilds: true,

    // Jede Funktion die in einem Objekt ist wird method genannt
    calcAge: function (thisYear) {
        return thisYear - this.birthYear;
    },

    theAnswer: function () {
        return `${christian.name} du bist ${christian.calcAge(2021)}  Jahre alt und hast  ${christian.hasChilds ? '1' : "kein"} Kind`;
    }
};

console.log(christian.calcAge(2025));
// in das Object eingebaut und damit als Methode aufgerufen
console.log("-----------------------");
console.log(christian.theAnswer());

// Alternativ natürlichn außerhalb des Objektes, dann ist es eine Funktion
// function theAnswer() {
//     ........................