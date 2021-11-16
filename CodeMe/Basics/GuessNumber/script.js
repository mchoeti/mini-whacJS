/*jslint node: true */
//"use strict";

// Zuerst mal eine Std Nummer definieren zwischen 1 und 20
const secretNumber = Math.trunc(Math.random() * 20) + 1;
//console.log(secretNumber);
let score = 20; // initial score



document.querySelector(".number").textContent = secretNumber;

// aufpassen im HTML gibts für das 2 Klassen is
// Ich nehm die Klasse check weil die einfach weil btn auch für andere Buttons stehen könnte.
// Damit haben wir die Klasse Btn zum stylen und die andere eben für JS und CO
document.querySelector(".check").addEventListener("click", function () {
    console.log(document.querySelector(".guess").value);
    // Aufpassen ich muss das natürlich auch auf Nummer umschreiben
    const guess = Number(document.querySelector(".guess").value);
    console.log("This is our gues", guess);
    // UserEingabe ist meistens String. gleich mal checken.
    console.log(guess, typeof guess);

    // a bisserl DOm mainpulieren
    //document.querySelector('.message').textContent = "SUPER 🎊 GEIL !!";

    if (!guess) {
        document.querySelector(".message").textContent = " ⛔ Well there is no secretNumber";
    } else if (guess === secretNumber) {
        document.querySelector(".message").textContent = " 🎊  Well DONE!!";
    } else if (guess >= secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = " Leider zu hoch";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = " You lost !!!";
            document.querySelector(".score").textContent = 0;
        }
    } else if (guess <= secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = " Leider zu klein";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = " You lost !!!";
            document.querySelector(".score").textContent = 0;
        }
    }
    console.log(score); // Aktueller Score +
});