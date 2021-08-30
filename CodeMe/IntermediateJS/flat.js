const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [
    [
        [3, 4]
    ]
]];

console.log(arr2.flat(2));
// expected output: [0, 1, 2, [3, 4]]

const arr1a = [1, 2, [3, 4]];
console.log(arr1a.flat());
// [1, 2, 3, 4]

const arr2a = [1, 2, [3, 4, [5, 6]]];
console.log(arr2a.flat());
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
console.log(arr3.flat(2));
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
//arr4.flat(Infinity);
console.log(arr4.flat(Infinity));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]