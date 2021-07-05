// Find the Longest Word in a StringPassed
// Return the length of the longest word in the provided sentence.
// Your response should be a number.


function findLongestWordLength(str) {
    let splittedArray = [];
    splittedArray = str.split(" ");
    console.log(splittedArray, splittedArray.length);

    let longestWord = 0;
    for (let i = 0; i < splittedArray.length; i++) {
        console.log("Durchgang: ", i);
        console.log(splittedArray[i].length);
        if (splittedArray[i].length > longestWord) {
            longestWord = splittedArray[i].length;
        }
        console.log("The longest Word is: ", longestWord);
    }
    return longestWord;
}

console.log(findLongestWordLength("Sometimes is is nor always what you see. You need Kubernetes oder so"));