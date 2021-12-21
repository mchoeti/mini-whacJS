/*jslint node: true */
//"use strict";

const resetScore = document.querySelector(".score");
const resetValue = 0;

// Score definieren, muss ein let sein, weil wir updaten :-)
let currentScore = 0;

// mal ein paar Vars definieren
const score0EL = document.querySelector("#score--0");
const score1EL = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Werte auf 0 setzen beim Start
score0EL.textContent = resetValue;
score1EL.textContent = resetValue;
diceEl.classList.add("hidden");


// Roll the Dice Function
btnRoll.addEventListener("click", function () {
    // Generate a random rolled
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log("Der Wert ist: ", dice);
    // display the Dice und dann wechseln wir auch gleich das Bild
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;


    // check if dice == 1
    if (dice !== 1) {
        console.log("Go on...");
        currentScore += dice;
        current0El.textContent = currentScore;

    } else {
        console.log("Der Wert is 1, Spielerwechsel");
        current0El.textContent = "0";
    }
});



// Reset definieren
document.querySelector(".btn--new").addEventListener("click", function () {
    console.log("You pressed the Reset");
    score0EL.textContent = resetValue;
    score1EL.textContent = resetValue;
    // document.querySelector("#score--0").textContent = resetValue;
    // document.querySelector("#score--1").textContent = resetValue;
    //document.querySelector("#current--0").textContent = resetValue;
    //document.querySelector("#current--1").textContent = resetValue;
    document.getElementById("current--0").textContent = " 67 ";
    document.getElementById("current--1").textContent = "22";
    diceEl.classList.add("hidden");
    //document.querySelectorAll("#score--0", #score--1).textContent = resetValue;
});

// Roll the dice definieren.
document.querySelector(".btn--roll").addEventListener("click", function () {
    console.log("Roll the dice");
});

// HOld you Roll and pass to the next player
document.querySelector(".btn--hold").addEventListener("click", function () {
    console.log("Hold me now !!!");
});






// document.querySelector(".again").addEventListener("click", function () {
//     console.log("You Clicked again");
//     // Neue Nummer wenn du nochmals spielen willst
//     score = 20;
//     secretNumber = Math.trunc(Math.random() * 20) + 1;
//     // restore number , score and 
//     //document.querySelector(".message").textContent = "Start guessing...";
//     displayMessage("Start guessing...");

//     document.querySelector(".score").textContent = score;
//     document.querySelector(".number").textContent = "?";
//     // Input ist immer ein String
//     document.querySelector(".guess").textContent = "";
//     document.querySelector("body").style.backgroundColor = "#222";
//     document.querySelector(".number").style.width = "15rem";
// });