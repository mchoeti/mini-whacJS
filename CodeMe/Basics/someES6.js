// ES 6 

const toDoList = ["Milk", "Toast", "honey"];

// bei einem Single thing. with a new ARROW function
const sayLocation = (location, name) => {
    console.log(`My location is in ${location}`);
};

sayLocation("Graz");

// Gleich mal Dinge Konvertieren
const stringerl = "23456";
console.log(typeof (stringerl));
console.log("Noch bin ich ein String", stringerl);
const nummer = Number(stringerl);
console.log(`Jetz aber eine ${nummer}`);
console.log(typeof (nummer));