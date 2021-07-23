console.log("Welcome");


// Mal ein praktischer EInsatz von For Each
const squaresTest = document.querySelectorAll("div");
squaresTest.forEach(square => {
    square.addEventListener("click", clickOutcome);
});

function clickOutcome() {
    console.log("Hallo again oder so");
    alert("You did it");
}