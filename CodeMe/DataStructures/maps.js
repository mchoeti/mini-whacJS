// mal eine empty Map erstellen
const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Roma, Italy");
rest.set(2, "Lisbon, Portugal");

console.log(rest);

// einfach mit einem Set Werte hinzufügen
rest
  .set("categories", ["Pasta", "Pizza", "Risotto", "Pasta", "Pizza"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "We are closed");

// Und dann kan man es auch gleich easy abfrage
console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(2));

// mal was testen ob das mit dem Abfragen klappt
// Wenn Wert true, also tiwschen 11 und 23 dann soll open und wenn nicht closed zurückgegeben werden
const time = 8;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
// should be true
console.log(rest.has("categories"));

// delete Rom via key
rest.delete(1);
console.log(rest);
console.log(rest.size);
// damit machen wir es mal leer
console.log(rest.clear);

// mal ein Array als Key hinzufügen
rest.set([1, 2], "Test");
console.log(rest);
console.log(rest.size);

// Die kann man aber SO nicht als KEy abfrufen weil sie nich die gleichen wie im HEAP sind
console.log(rest.get([1, 2]));

// dafür müsste man zuerst ein Array anlegen und dann das verwendeen.
const myArray = [3, 4];
rest.set(myArray, "Test2");
console.log(rest.get(myArray));

// DAmit können wir Objekte und Map Keys verwenden.verwenden
// Praktisch vor allem bei DOM Elementen.
rest.set(document.querySelector("h1"), "Header");
