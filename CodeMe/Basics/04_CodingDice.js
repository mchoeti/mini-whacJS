// Let the dice Roll
let dice = Math.trunc(Math.random() * 6) + 1;
//console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a  ${dice} number, please try again`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice == 6) {
        console.log(`YOU WON!!!!!! Lucky number ${dice} `);
    }
}