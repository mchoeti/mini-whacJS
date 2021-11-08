/*jslint node: true */
//"use strict";

// aufpassen im HTML gibts für das 2 Klassen is
// Ich nehm die Klasse check weil die einfach weil btn auch für andere Buttons stehen könnte.
// Damit haben wir die Klasse Btn zum stylen und die andere eben für JS und CO
document.querySelector(".check").addEventListener("click", function () {
    console.log(document.querySelector(".guess").value);
});