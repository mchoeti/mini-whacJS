//const text = document.querySelector("h1");
const text = document.querySelector(".title");
const changeColor = document.querySelector(".changeColor");
// Für List Inputer
const usersList = document.querySelector(".name-list");
const listInput = document.querySelector(".list-input");
const addListBtn = document.querySelector(".addListBtn");


text.style.color = "green";
text.classList.add("changeFromCSS");
// oder wir removen ; sollte man halt nicht gleich drauf schreiben
// text.classList.remove("changeFromCSS");

changeColor.addEventListener("click", function () {
    text.classList.toggle("changeFromCSS");
    // oder removen
    //text.classList.remove("changeFromCSS");
});


// Ansprechen von ein paar Elementen
const userList = document.querySelectorAll(".name-list li");
//console.log(userList);

for (const user of userList) {
    user.addEventListener("click", function () {
        console.log(this);
        this.style.color = "green";
    });
}

//Hinzufügen der Werte - Elemente
console.log(listInput.value);
addListBtn.addEventListener("click", function () {
    // create an li 
    const newLi = document.createElement("li");
    const liContent = document.createTextNode(listInput.value);
    console.log(listInput.value);
    // add the input value inside the new li
    newLi.appendChild(liContent);
    // Attach li to userlist
    usersList.appendChild(newLi);
});