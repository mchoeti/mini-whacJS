/*
slice() copies or extracts a given number of elements to a new array, leaving the array it is called upon untouched. 
Now only 2 paramaeters
the first is the index at which to begin extraction, and the second is the index at which to stop extraction
*/

// warm and sunny
function forecast(arr) {
    let todaysWeather = arr.slice(2, 4);
    return todaysWeather;
}

console.log(
    forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
);