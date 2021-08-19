/* Pig Latin is a way of altering English Words. The rules are as follows:
- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
- If a word begins with a vowel, just add way at the end.
*/

function translatePigLatin(str) {

    // gleich mal mit einer replace function gearbeitet
    return str
        // replase alles was nicht a-u ist und häng ein way an
        .replace(/^[aeiou]\w*/, "$&way")
        .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

console.log(translatePigLatin("glove"));
// should be eightway.
// or glove should be oveglay

/* Use replace() on the string, using a regular expression 
to check if the first letter is a consonant and adding way at the end in this case. 
If the first letter is a consonant nothing will happen at this point.

Use replace() again to check for consonants 
at the beginning of the word and to move it 
or them to the end of the word and add ay at the end.
*/


//+++++++++++++++++++++++++++++++++++++++++++++++++++
// Alternativ

function translatePigLatin2(str) {
    let consonantRegex = /^[^aeiou]+/;
    let myConsonants = str.match(consonantRegex);
    return myConsonants !== null ?
        str
        .replace(consonantRegex, "")
        .concat(myConsonants)
        .concat("ay") :
        str.concat("way");
}

console.log(translatePigLatin2("glove"));

/* 
start at beginning and get longest match of everything not a vowel (consonants)
if regex pattern found, it saves the match; else, it returns null
if regex pattern found (starts with consonants), it deletes match, adds the match to the end, and adds “ay” to the end
if regex pattern not found (starts with vowels), it just adds “way” to the ending
*/