const timeLeft = document.getElementById("time-left");

const birthday = new Date("06/04/2021");
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24; // all in Miliseconds
let timerId;

//const today = new Date();
//console.log(today);
//console.log(birthday);

function countDown() {
    console.log("Tick Tock");
    const today = new Date();
    const timeSpan = birthday - today;
    //console.log(timeSpan);
    // zuerst mal checken ob der in der Vergangenheit liegt
    if (timeSpan <= -day) {
        timeLeft.innerHTML = "Hope you had a nice birthday";
        clearInterval(timerId);
        return;
    }

    if (timeSpan <= 0) {
        timeLeft.innerHTML = "Happy Birthday";
        clearInterval(timerId);
        return;
    }

    // display left days seconds and more.
    const days = Math.floor(timeSpan / day);
    const hours = Math.floor((timeSpan % days) / hour);
    const minutes = Math.floor((timeSpan % hour) / minute);
    const seconds = Math.floor((timeSpan % minute) / second);

    timeLeft.innerHTML = days + "days " + hours + " hours " + minutes + " min " + seconds + " seconds";
}

setInterval(countDown, second);