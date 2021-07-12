// bird.name = "Duffy";

// function Bird() {
//     let hatchedEgg = 10;

//     this.getHatchedEggCount = function () {
//         return hatchedEgg;
//     };
// }
// let ducky = new Bird();
// ducky.getHatchedEggCount();


function Bird() {
    let weight = 15;
    //  this.weight = 15;
    this.getWeight = function () {
        return weight;
    }

}

let ducky1 = new Bird();
ducky1.getWeight();
console.log(ducky1.getWeight());