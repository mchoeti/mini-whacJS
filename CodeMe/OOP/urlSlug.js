// Only change code below this line
function urlSlug(title) {

    //const newTitle = title.split(' ')
    //title.toLowerCase();

    return title
        .toLowerCase()
        // Entfernt spaces vorne und hinten
        .trim()
        // das PLus brauchen wir ansonsten würde das nicht klappen 
        // (" Winter Is  Coming")
        .split(/\s+/)
        .join("-");

}

console.log(urlSlug(" Winter is coming"));

// Only change code above this line
urlSlug("Winter is coming");

// \s indicates a white space. So [^\s] is any non-white space and includes letters, numbers, special characters