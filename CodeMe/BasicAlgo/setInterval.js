/*jslint node: true */

//const myArray = ["Servas"];
const myArray = [];

function alertMe() {
    //let total = myArray.push(" Zusammen");
    let total = myArray.push("");
    console.log(total);
    console.log(myArray);
}

const timerID = setInterval(alertMe, 2000);



const myValues = [1, 2, 3, 4, 56, 7, 88, 999];
console.log(myValues);