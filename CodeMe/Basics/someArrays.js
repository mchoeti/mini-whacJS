const schedule = ["Wake", "me", "up"];
console.log(schedule);

// Remoce last one
schedule.pop();
console.log(schedule);

// Remove first one
schedule.shift();
console.log(schedule);

// Add on the first slot
schedule.unshift("Added something in the first place");
console.log(schedule);

// Add something at the end
schedule.push("The end");
console.log(schedule);

// find the index of something
console.log(schedule.indexOf("me"));

// Hier geben wir mal nur was aus
const something = schedule.indexOf("me");
console.log(schedule[something]);