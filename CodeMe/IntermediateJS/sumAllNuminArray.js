function sumAll(arr) {

    //let newArr = [...arr];
    //console.log(newArr);

    const startNum = arr[0];
    const endNum = arr[1];

    console.log(startNum);
    console.log(endNum);

    const numCount = Math.abs(startNum - endNum) + 1;
    const sum = ((startNum + endNum) * numCount) / 2;
    console.log(sum);
    return sum;

}
//console.log(sumAll([1, 4]));
console.log(sumAll([1, 4]));