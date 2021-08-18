/*
Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
sollte dann so aussehen  this-is-spinal-tap
*/

function spinalCase(str) {
    return str;
}

console.log(spinalCase('This Is Spinal Tap'));


/* Tipps
Hint 1: Create a regular expression for all white spaces and underscores.
Hint 2: You will also have to make everything lowercase.
Hint 3: The tricky part is getting the regular expression part to work, once you do that then just turn the uppercase to lowercase and replace spaces with dashes using replace().
*/