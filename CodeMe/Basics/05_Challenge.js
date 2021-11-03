/*
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
    tips and total values (bill + tip) for every bill value in the bills array. Use a for
    loop to perform the 10 calculations!

Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉
*/

// Function von vorher
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// neue Arrays
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    //console.log(tip);
    tips.push(tip);
    //console.log(tips);
    totals.push(tip + bills[i]);
    //console.log(totals);
}

console.log(`Bills ${bills}`);
console.log(`tip ${tips}`);
console.log(`TOTALS ${totals}`);


// Adding more usefull stuff
const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        //sum = sum + arr[i];
        sum += arr[i];
    }
    // vorher nur mal die Summe testen, ergibt eben die Summer der Addition
    //console.log(sum);
    return sum / arr.length;
};

// Testing this simple function sollte 4,25 ergeben
console.log(calcAverage([2, 3, 5, 7]));

// Jetzt mit den Werten
console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(totals));