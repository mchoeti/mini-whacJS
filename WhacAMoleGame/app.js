const GAME_SECONDS = 60;
const MOLE_INTERVAL_MS = 700;

const squares = document.querySelectorAll(".square");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time-left");
const startButton = document.getElementById("start");

let score = 0;
let timeLeft = GAME_SECONDS;
let molePosition = null;
let moleTimer = null;
let countdownTimer = null;

function showRandomMole() {
    squares.forEach((square) => square.classList.remove("mole"));
    const index = Math.floor(Math.random() * squares.length);
    squares[index].classList.add("mole");
    molePosition = index;
}

function hit(index) {
    if (index !== molePosition) return;
    score++;
    scoreDisplay.textContent = score;
    molePosition = null;
    squares[index].classList.remove("mole");
}

function endGame() {
    clearInterval(moleTimer);
    clearInterval(countdownTimer);
    squares.forEach((square) => square.classList.remove("mole"));
    molePosition = null;
    startButton.disabled = false;
    alert(`Game over! Your final score is ${score}`);
}

function tick() {
    timeLeft--;
    timeDisplay.textContent = timeLeft;
    if (timeLeft === 0) endGame();
}

function startGame() {
    score = 0;
    timeLeft = GAME_SECONDS;
    scoreDisplay.textContent = score;
    timeDisplay.textContent = timeLeft;
    startButton.disabled = true;
    showRandomMole();
    moleTimer = setInterval(showRandomMole, MOLE_INTERVAL_MS);
    countdownTimer = setInterval(tick, 1000);
}

squares.forEach((square, index) => {
    square.addEventListener("click", () => hit(index));
});
startButton.addEventListener("click", startGame);
