/*jslint node: true */
//"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
//const hidden = document.querySelector(".hidden");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
console.log(btnsOpenModal);

// Log Text Content to the Console
for (let i = 0; i < btnsOpenModal.length; i++) {
    console.log(btnsOpenModal[i].textContent);
}