const countdown = () => {
    const countDate = new Date("December 24, 2021 00:00:00").getTime();
    console.log(countDate);
    const now = new Date().getTime();
    const gap = countDate - now;
    console.log(gap);

    // How much is time, mit der Miliseconds beginnen
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // calculate the things
    const textDay = Math.floor(gap / day);
    //console.log(textDay);
    const textHour = Math.floor((gap % day) / hour);
    //console.log(textHour);
    const textMinute = Math.floor((gap % hour) / minute);
    // console.log(textMinute);
    const textSecond = Math.floor((gap % minute) / second);
    // console.log(textSecond);

    // Update HTML 
    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;


};

// Updating jede Sekunde
setInterval(countdown, 1000);
//countdown();