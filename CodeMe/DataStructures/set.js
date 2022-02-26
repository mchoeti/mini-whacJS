// SET, wäre also neu im JS

// Im Set gibts auch keine doppelten Werte. Schaut aus wie ein Array
const ordersSet = new Set(["Pasta", "Pizza", "Risotto", "Pasta", "Pizza"]);
console.log(ordersSet);
console.log(ordersSet.size);
console.log(new Set("Chris"));
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Bred"));

ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");

console.log(ordersSet);

ordersSet.delete("Pizza");

for (const iterator of ordersSet) {
  console.log("My Set: ", iterator);
}

// Nehmen wir mal an wir haben ein Array
const staff = ["Waiter", "Chef", "Cook", "Manager ", "Waiter", "Chef"];
console.log("My old Staff", staff);
/*
// Dann machen wir ein Set draus
const uniquePositions = new Set(staff);
console.log(uniquePositions);
const newStaff = [...uniquePositions];
 console.log("My new Stuff", newStaff);
*/

// Oder aber noch einfachers
const uniquePositions = [...new Set(staff)];
console.log(uniquePositions);

//Unique Positions geht mit SET, nur mit SET !!!
console.log(
  new Set(["Waiter", "Chef", "Cook", "Manager ", "Waiter", "Chef"]).size
);

// Wie viele unterschiedliche Buchstaben
console.log(new Set("Christian").size);

// Alle Werte sind einzigartig, ich kann nur fragen ob Wert vorhanden ist
// Es gibt keine Order, wenn also die Reihenfolge wichtig ist, dann Arrays nutzen
