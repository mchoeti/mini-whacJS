// Std Values defineren
// um 100 erhöhen, ansonsten gibts Rundungsfehler
const stdValues = {
  PENNY: 0.01 * 100,
  NICKEL: 0.05 * 100,
  DIME: 0.1 * 100,
  QUARTER: 0.25 * 100,
  ONE: 1.0 * 100,
  FIVE: 5.0 * 100,
  TEN: 10.0 * 100,
  TWENTY: 20.0 * 100,
  "ONE HUNDRED": 100.0 * 100,
};

// Globale Check Funktion
function checkCashRegister(price, cash, cid) {
  // Variablen definieren
  let changeSum = cash * 100 - price * 100;
  let changeSumCheck = changeSum;
  let change = [];
  let status = "";
  let cidSum = 0;

  // Filtern bzw. Removen der Elemente die 0 enthalten. Siehe beispiel
  // ["FIVE", 0], ["TEN", 0], ["TWENTY", 0]
  let filteredCid = cid.filter((value) => value[1] !== 0).reverse();
  // Check this with the console.log
  // Reverse auch deshlalb weil ich abziehen will, daher beginnen wir mit 100
  console.log(filteredCid);

  // For Each Loop einbauen
  filteredCid.forEach((value) => {
    let currency = value[0];
    let currSum = value[1] * 100;
    cidSum += currSum;
    let amount = 0;
    while (changeSum >= stdValues[currency] && currSum > 0) {
      amount += stdValues[currency];
      changeSum -= stdValues[currency];
      currSum -= stdValues[currency];
    }
    if (amount !== 0) {
      change.push([currency, amount / 100]);
    }
  });

  if (changeSum > 0) {
    status = "INSUFFICIENT_FUNDS";
    change = [];
  } else if (changeSum == 0 && changeSumCheck == cidSum) {
    status = "CLOSED";
    change = cid;
  } else {
    status = "OPEN";
  }
  return { status: status, change: change };
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);

/*
should return status: 
    "OPEN", change: 
        [["TWENTY", 60], ["TEN", 20], 
        ["FIVE", 15], ["ONE", 1],
        ["QUARTER", 0.5], ["DIME", 0.2],
        ["PENNY", 0.04]]}
        */

console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
