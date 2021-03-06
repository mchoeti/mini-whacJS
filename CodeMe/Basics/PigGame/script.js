/*jslint node: true */
//"use strict";

const resetScore = document.querySelector(".score");
const resetValue = 0;
//const scores = [0, 0];

// Score definieren, muss ein let sein, weil wir updaten :-)
//let currentScore = 0;
//let activePlayer = 0;
//let playing = true;

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

let scores, currentScore, activePlayer, playing;

const init = function () {
    console.log("New Game launches");
    // Score definieren, muss ein let sein, weil wir updaten :-)
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    // Werte auf 0 setzen beim Start
    score0EL.textContent = 0;
    score1EL.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    diceEl.classList.add("hidden");
    player0E.classList.remove("player--winner");
    player1E.classList.remove("player--winner");
    player0E.classList.add("player--active");
    player1E.classList.remove("player--active");
};

init();

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
    // Soll nur laufen, wenn playing true ist.
    if (playing) {
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
    }
});

btnHold.addEventListener("click", function () {

    if (playing) {
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
            // Würfel verstecken wenn das Spiel aus ist
            diceEl.classList.add("hidden");
        } else {
            // Switch the next player
            switchPlayer();
        }
    }
});

// bei getElmwent by ID nur den ID NAmen anzugeben
// bei query Selector muss die Klasse, bzw. der . angegeben werden.


// Reset definieren
btnNew.addEventListener('click', init);