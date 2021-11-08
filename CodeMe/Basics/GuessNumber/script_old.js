/*jslint node: true */
//"use strict";
console.log("Hallo Du nochmals");
// start guessing und wir wollen ja den Text
console.log(document.querySelector(".message").textContent);

// Dom manipulation with the document.querySelect
document.querySelector(".message").textContent = "Beginne zu raten ❓";
document.querySelector(".number").textContent = 10;
document.querySelector(".score").textContent = 17;

// mit dem Input Field arbeiten da sollte man mit dem value arbeiten
// mal ein empty Value ausgegeben..,  :-)
console.log(document.querySelector(".guess").value);
document.querySelector(".guess").value = 23;
// jetzt sollte 23 in der Console stehen :-)
console.log("Neuer Value:", document.querySelector(".guess").value);
