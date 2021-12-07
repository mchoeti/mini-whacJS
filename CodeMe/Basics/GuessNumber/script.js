/*jslint node: true */
//"use strict";

// Zuerst mal eine Std Nummer definieren zwischen 1 und 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//console.log(secretNumber);
let score = 20; // initial score
let highscore = 0;


// Verstecken der Nummer
// document.querySelector(".number").textContent = secretNumber;

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


    // When there is no input
    if (!guess) {
        document.querySelector(".message").textContent = " ⛔ Well there is no secretNumber";

        // When player wins
    } else if (guess === secretNumber) {
        document.querySelector(".message").textContent = " 🎊  Well DONE!!";
        // Wird erst angezeigt, wenn wir richtig sind
        document.querySelector(".number").textContent = secretNumber;


        // adding colour change when player wins
        // ion JS können wir aber nur NAmen nehmen im CSS wäre es background-colour 
        // JS macht hier am besten ein CamelCase draus backgroundColor
        // geht aber auch mit einer #60b347 oder so
        document.querySelector("body").style.backgroundColor = "green";
        document.querySelector(".number").style.width = "30rem";

        if (score >= highscore) {
            highscore = score;
            console.log("New HighScore", highscore);
            document.querySelector(".highscore").textContent = highscore;
        }

        // When it is to high
    } else if (guess >= secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = " Leider zu hoch";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = " You lost !!!";
            document.querySelector(".score").textContent = 0;
        }

        // When it is to low
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

document.querySelector(".again").addEventListener("click", function () {
    console.log("You Clicked again");
    // Neue Nummer wenn du nochmals spielen willst
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // restore number , score and 
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    // Input ist immer ein String
    document.querySelector(".guess").textContent = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
});