// Basic Object zum  konvertieren in
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// simples Quiz mit MAP erstellen
const question = new Map([
  ["question", "What is the besft coding language in the world"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct answer 🧑 "],
  [false, "Try again"],
]);

console.log(question);

// Convert Objekt zu MAPS als kleiner Trick
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

// Eine MAp ist ein Iterable ein Objekt nicht.
// Daher brauch hier eben kein Obeject.entries...

// Quiz APP
console.log(question.get("question"));

for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}

// Damit klappt das. Aber ich kommentier es mal aus
//const userAnswer = Number(prompt("Your answer please"));
const userAnswer = 3;
console.log(userAnswer);
// simpler 1 liner
console.log(question.get(question.get("correct") === userAnswer));

// Andere Variante
/*
// Checken ob der User alles richtig eingibt
if (userAnswer === 3) {
  console.log(question.get(true));
} else {
  console.log(question.get(false));
}
*/

// Convert an MAP in an ARRAY
console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);

//  Hier hat es noch Duplicates und ist ein ARRAY
const simpleArray = [
  "Focaccia",
  "Focaccia",
  "Bruschetta",
  "Garlic Bread",
  "Focaccia",
  "Caprese Salad",
];

console.log(simpleArray);
// Hier nimmer, neues Set, und damit unique Values
const mySet = new Set([...simpleArray]);
console.log(mySet);
