function splitify(str) {
    // Only change code below this line
    //const newArray = [...str];

    var newArray = str.split(" ");
    //console.log(newArray);
    newArray = str.split(/\W/);
    console.log(newArray);
    //newArray = otherString.split(/\d/);
    return newArray;
    //console.log(str);

    // Only change code above this line
}
splitify("Hello World,I-am code");

/*
// Using the Regex W means
\W  Matches a non-word character

more here: https://www.keycdn.com/support/regex-cheatsheet
*/