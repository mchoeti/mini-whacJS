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
    // console.log(btnsOpenModal[i].textContent);
    // Checken ob das mit dem Button auch klappt

    const openModal = function () {
        //console.log("Button Clicked");
        // the . is only for the selector. Da muss der String wirklich passen
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    };

    btnsOpenModal[i].addEventListener('click', openModal);

    // gleich mal als Function einbauen
    const closeModal = function () {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    };

    btnCloseModal.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
}

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};


// Globales Event, ein Keypress Event
// nehmen wir mal e für Event
document.addEventListener("keydown", function (e) {
    //console.log("A Key was pressed");
    // mal schauen was wir drücken 
    console.log(e);
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        console.log("Well done you pressed the Escape button");
        closeModal();
        // if modal class is NOT hidden mach es zu
        console.log("Modal now is hidden");
    }
});

/* Zuerst habe ich die simple Variante verwendet

// Simples Öffnen 
    btnsOpenModal[i].addEventListener('click', function () {
            console.log("Button Clicked");
            // the . is only for the selector. Da muss der String wirklich passen
            modal.classList.remove('hidden');
            overlay.classList.remove('hidden');
        })

//das wäre Simples Schließen
    btnCloseModal.addEventListener('click', function () {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    });

    overlay.addEventListener('click', function () {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    });
*/