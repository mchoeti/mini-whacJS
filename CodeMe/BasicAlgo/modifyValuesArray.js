let user = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
            'Sam',
            'Kira',
            'Tomo'
        ],
        location: {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        }
    }
};

function addFriend(userObj, friend) {
    let pushed = user.data.friends.push(friend);
    return Object.values(userObj.data.friends);
}

console.log(addFriend(user, 'Pete'));

// oder so..
function getArrayOfUsers(obj) {
    // Only change code below this line
    let values = Object.values(obj);
    return values;
    //return Object.values(obj);
    // Only change code above this line
}
console.log("Here are the keys: ", getArrayOfUsers(user.data.friends));