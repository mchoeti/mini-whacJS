/*jslint node: true */
//"use strict";

const christian = {
    name: "christian",
    year: 2000,
    calcAge: function () {
        return 2022 - this.year;
    }
};


console.log(christian.calcAge());
console.log(christian.name);