const squareList = arr => {
    // Only change code below this line
    console.log("Before");

    return arr
        // You will need to filter() the realNumberArray for positive integers (decimals are not integers). 
        .filter(num => num > 0 && num % parseInt(num) === 0)
        .map(num => Math.pow(num, 2));

    console.log("After");
    // Only change code above this line
};

const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
console.log(squaredIntegers);
