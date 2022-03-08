console.log("a+very+nice+string".split("+"));
const [firstname, lastname] = "Christian Ho".split(" ");
console.log(firstname, lastname);
console.log("*************************");

// Mal mit Join arbeiten und die ausgabe manipulieren , es wird damit zum String
const newName = ["Mr.", firstname, lastname.toLocaleUpperCase()].join(" ");
console.log(newName);
const newName2 = ["Mr.", firstname, lastname.toLocaleUpperCase()].join("---");
console.log(newName2);

console.log("*************************");

// Jeden Anfangsbuchstaben groß schreiben.
// Wir verwenden toUpperCase, slice , push , split und join

const capitalizeName = function (name) {
  const names = name.split(" ");
  let nameUpperCase = [];

  for (const word of names) {
    nameUpperCase.push(word[0].toUpperCase() + word.slice(1));
    //console.log(nameUpperCase);
    //console.log(typeof nameUpperCase);
    nameUpperCase;
  }
  console.log(nameUpperCase.join(" "));
};

capitalizeName("dorella diet");
capitalizeName("Sam boy");
capitalizeName("Christl von der Post");

// Padding a String :-) Füllt quasi die restlichen
const message = "Go to gate 23!!!";
console.log(message.padStart(25, "+"));
console.log("Christian".padStart(25, "+").padEnd(30, "*"));
console.log(message.padEnd(25, "-"));

// Als Beispiel das maskieren einer Nummer und nur die letzten 4 Nummern sollen sichtbar sein
const fullNumber = "2034399002125581";
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, "*");
console.log(maskedNumber);
console.log("**********************");
console.log("**********************");

// mal in eine Funktion packen
const maskCreditCard = function (number) {
  // Wenn einer ein String ist wird alles zu einem String
  const string = number + "";
  const last4Digits = string.slice(-3);
  return last4Digits.padStart(string.length, ".");
};

console.log(maskCreditCard(12345678));

// REPEAT Method
const message2 = "... Bad weather - All departures are delayed ... ";
console.log(message2.repeat(3));
// gleich mal mit den Fliegern, aChtung Emojees mit  : aufrufen
const planesInline = function (n) {
  console.log(`There are ${n} planes in line ${"✈".repeat(n)}`);
};

planesInline(3);
planesInline(7);
