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
