/*jslint node: true */
//"use strict";

const resetScore = document.querySelector(".score");
const resetValue = 0;
const scores = [0, 0];

// Score definieren, muss ein let sein, weil wir updaten :-)
let currentScore = 0;
let activePlayer = 0;
let playing = true;

// mal ein paar Vars definieren
const player0E = document.querySelector(".player--0");
const player1E = document.querySelector(".player--1");

const score0EL = document.querySelector("#score--0");
const score1EL = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");


// Code niemals 2 mal verwenden daher DRY eine Funktion brauchen
// und weil wir keine Parameter brauchen, Code is ja gleich kann man das so super einbauen
const switchPlayer = function () {
    console.log("Der Wert is 1, Spielerwechsel");
    //current0El.textContent = "0";
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    // Mit turnery Operator. Wenn Player = 0  dann 1 wenn 1 dann null
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    // fügt oder entfernt die vorhandene Klasse
    player0E.classList.toggle("player--active");
    player1E.classList.toggle("player--active");
};

// Werte auf 0 setzen beim Start
score0EL.textContent = resetValue;
score1EL.textContent = resetValue;
diceEl.classList.add("hidden");
// Christmas commit

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
        // select active Player mit neuer JS6
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        //current0El.textContent = currentScore;

    } else {
        switchPlayer();
    }
});


btnHold.addEventListener("click", function () {
    // add current score to player score0EL
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    // checken ob score >= 100 ist weil hier gibts an WIn 
    console.log("Hold me now !!!");

    if (scores[activePlayer] >= 10) {
        console.log("you WOON");
        playing = false;
        // beim Query selector wenn du eine Klassa aufrufst bitte auch den punkt machen :-)
        document
            .querySelector(`.player--${activePlayer}`)
            .classList.add("player--winner");
        document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
    } else {
        // Switch the next player
        switchPlayer();
    }

});

// bei getElmwent by ID nur den ID NAmen anzugeben
// bei query Selector muss die Klasse, bzw. der . angegeben werden.


// Reset definieren
document.querySelector(".btn--new").addEventListener("click", function () {
    console.log("You pressed the Reset");
    score0EL.textContent = resetValue;
    score1EL.textContent = resetValue;
    // document.querySelector("#score--0").textContent = resetValue;
    // document.querySelector("#score--1").textContent = resetValue;
    //document.querySelector("#current--0").textContent = resetValue;
    //document.querySelector("#current--1").textContent = resetValue;
    document.getElementById("current--0").textContent = " 0.0 ";
    document.getElementById("current--1").textContent = "0.0";
    diceEl.classList.add("hidden");
    //document.querySelectorAll("#score--0", #score--1).textContent = resetValue;
});

// Roll the dice definieren.
// document.querySelector(".btn--roll").addEventListener("click", function () {
//     console.log("Roll the dice");
// });

// HOld you Roll and pass to the next player
// document.querySelector(".btn--hold").addEventListener("click", function () {
//     console.log("Hold me now !!!");
// });





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