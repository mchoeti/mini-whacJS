/*jslint node: true */
/*
Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, 
case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.
We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

*/

/* Examples
palindrome("eye") should return true.
palindrome("_eye") should return true.
palindrome("race car") should return true.
palindrome("not a palindrome") should return false.
*/

function palindrome(str) {
    const regex = /[^A-Za-z0-9]/g;
    let firstString = str.replace(regex, "").toLowerCase();
    let firstSplit = [...firstString];
    console.log(firstString);
    console.log(firstSplit);
    console.log("----------------------");
    // Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean
    let reverseString = [...firstString].reverse().join("");
    console.log(reverseString);
    //let reverseString =
    return reverseString === firstString;
}

console.log(palindrome("eye "));