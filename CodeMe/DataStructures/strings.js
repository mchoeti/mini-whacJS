console.log("Hallo to the Airline Strings");

const airLine = "TAP Air Portugal";
const plane = "A320";
console.log("*************************");
// Simple Strings
console.log(plane[0], plane[0], plane[0]);
console.log(airLine.length);
console.log("Christian".length);
console.log("*************************");
// Wo is das r in der Airline
console.log(airLine.indexOf("r"));
console.log(airLine.lastIndexOf("r"));
// Achtung immer key sensitiv
console.log(airLine.indexOf("Portugal"));
console.log(airLine.indexOf("portugal"));

console.log("*************************");
console.log(airLine.slice(4));
console.log(airLine.slice(4, 7));
console.log(airLine.slice(4, 7).length);

// Try to exxtract 1st word Von Anfang bis zum ersten Leerzeichen
console.log(airLine.slice(0, airLine.indexOf(" ")));
// Hier dann eben bist zum letzten Leerteichen und das +1 wegen der schönen Ansicht
console.log(airLine.slice(airLine.lastIndexOf(" ") + 1));

// Negative Characters Also die letzen beiden
console.log(airLine.slice(-2));
// hier wird der erste Buchstabe entfernt und die letzen beiden
console.log(airLine.slice(1, -2));
console.log("*************************");
// Üben mal mit einer kleinen Funktion
const checkMiddleSeat = function (seat) {
  // B and E are middle seats dann soll ein middle seat kommen
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log(seat, "You are in the middle");
  } else console.log(seat, "You are a lucky one !!");
};

checkMiddleSeat("7A");
checkMiddleSeat("17B");
checkMiddleSeat("27C");

console.log(new String("Christian"));

console.log("*************************");
console.log("*************************");
console.log(airLine.toLowerCase());

// Fix capiitalization in Names
const passenger = "ChriSTIAN";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// A simple Function um das zu verwenden
function correctPassengerName(name) {
  let newName = name.toLowerCase();
  let correctName = newName[0].toUpperCase() + newName.slice(1);
  name = correctName;
  return name;
}

// some examples
console.log(correctPassengerName("DoRis"));
console.log(correctPassengerName("TrudeLEI"));
console.log(correctPassengerName("SMUERELLO"));

// Check EMail input eigentlich mehr ein comparing beim vertipplsern
const email = "hello@christian.io";
const loginEmail = " Hello@ChrisTian.io \n";
// lowerCase und Trim Methoden verwendet
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);
// geht natürlich einfacher und schneller
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log("*************************");
console.log("*************************");

function validEmails(first, second) {
  let normalizedEmail = second.toLowerCase().trim();
  //console.log(normalizedEmail);
  let check = first === normalizedEmail ? true : false;
  console.log(`Are both emails the same? ==> ${check} `);
}

validEmails("hello@christian.io", "HEllo@CHristian.io");
validEmails("hello@christian.io", "HEllo@CHristiano.io");

// Replacing Strings !! Gleich in einem Aufwasch, also mit Chaining
const priceGB = "299,97€";
const priceUS = priceGB.replace("€", "$").replace(",", ".");
console.log(priceUS);

// Replace also Strings
const announcement = "All passenger, please come All to boarding door 24.";
const updateAnnouncement = announcement.replace("door", "gate");
console.log(updateAnnouncement);
// Will ich mehr könnte man Regex verwenden siehe hier
console.log(announcement.replace(/All/g, "Everyone"));
// hab ich das Wort öfters, kann ich auch die Function replaceAll() verwenden
console.log(announcement.replaceAll("Everyone", "All"));

// Booleans auch key sensitiv
const plane1 = "A320   no";
const plane2 = "A320Sneo";
console.log(plane1.includes("A320")); // Yes hat den String A320 drinnen
console.log(plane1.includes("Boing")); // False nix mit Booing
console.log(plane1.startsWith("A")); // True startet mit
console.log(plane1.startsWith("Air")); // False startet nicht mit Air
// Ternary for the win
let checkplane = plane1 === plane2 ? true : false;
console.log(checkplane);

if (plane1.startsWith("A320") && plane1.endsWith("neo")) {
  console.log("Yes part of the new Airbus family");
} else {
  console.log("Sorry old family");
}

// A simple function um zu klären ob er nur legale Dinge mit hat
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("gun") || baggage.includes("knife")) {
    console.log("No entry sir");
  } else {
    console.log(`You are welcome with: ${items}`);
  }

  //console.log(baggage);
};

checkBaggage("Snacks and a gun");
console.log("****************");
checkBaggage("Laptop and something for my personal Things");
console.log("****************");
checkBaggage("Got some Food and a pocket knife");
checkBaggage("Snacks and a gun");
console.log("****************");
