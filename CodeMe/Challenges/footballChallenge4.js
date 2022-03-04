///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

//
console.log("**************************");
//1. Create an array 'events' of the different game events that happened (no duplicates)
// Array
const events = [...new Set(gameEvents.values())];
// Set
const events2 = new Set(gameEvents.values());
console.log(events);
console.log(events2);
console.log(`**************************`);

// After the game has finished, is was found that the yellow card from minute 64 was unfair.
// So remove this event from the game events log.
gameEvents.delete(64);
console.log(gameEvents);
console.log(`**************************`);

// Print the following string to the console:
//"An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)

// addition wir nehmen den letzen Wert
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

console.log(`**************************`);

// 4. Loop over the events and log them to the console,
//marking whether it's in the first half or second half (after 45 min) of the game, like this: [FIRST HALF] 17: ⚽️ GOAL
//const key = gameEvents.keys();
//const value = gameEvents.values();

//console.log(key);
//console.log(value);
/*
for (const [key, value] of gameEvents) {
  //console.log(key);
  if (key <= 45) {
    console.log(`[FIRST HALF] ${key}: ${value}`);
  } else if (key >= 50 && key <= 90) {
    console.log(`[SECOND HALF] ${key}: ${value}`);
  } else {
    console.log(`[OVERTIME ] ${key}: ${value}`);
  }
}
*/

// eine andere Variante mit dem Ternaryle
for (const [key, value] of gameEvents) {
  const half = key <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half}] ${key}: ${value}`);
}
