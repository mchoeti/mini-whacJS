//A common pattern in JavaScript is to execute a function as soon as it is declared:
//Anonyme function werden dann eben mit parentheses
(function () {
    console.log("Chirp, chirp!");
})();



let funModule = (function () {
    return {
        isCuteMixin: function (obj) {
            obj.glide = function () {
                console.log("Gliding on the water");
            };
        },
        flyMixin: function (obj) {
            obj.fly = function () {
                console.log("Flying, wooosh!");
            };
        }
    };
})();


let isCuteMixin = function (obj) {
    obj.isCute = function () {
        return true;
    };
};
let singMixin = function (obj) {
    obj.sing = function () {
        console.log("Singing to an awesome tune");
    };
};