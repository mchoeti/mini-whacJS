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

// Nun geben wir den namen als Property und as alter als Value zurück
const usersObj = users.reduce((obj, user) => {
    obj[user.name] = user.age;
    return obj;

}, {});
console.log(usersObj);