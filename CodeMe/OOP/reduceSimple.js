const users = [{
        name: 'John',
        age: 34
    },
    {
        name: 'Amy',
        age: 20
    },
    {
        name: 'camperCat',
        age: 10
    }
];

const sumOfAges = users.reduce((Wert1, egal) => Wert1 + egal.age, 0);
console.log(sumOfAges);

const sumOfNames = users.reduce((Wert1, user) => Wert1 + user.name, " ");
console.log("Names: ", sumOfNames.toUpperCase());