// Coding Challenge #2

/* 
Let's continue with our football betting app!
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
GOOD LUCK 😀
*/

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

console.log("**************************");

/*
// BEi einem Array muss man die Entries nehmen
game.scored.entries
// BEi einem Object eben die Objects
Object.values(game.odds)
*/

//1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
const scores = game.scored.entries();
//console.log(scores);
for (const [index, player] of scores) {
  console.log(`Goal No: ${index + 1} was scored by ${player}`);
}
console.log("**************************");

// Player in the TEAM
const players = game.players.entries();
const team1 = game.team1.valueOf();
const team2 = game.team2.valueOf();

for (const [index, player] of players) {
  if (index === 0) {
    console.log(`Those are the players of team ${team1} : ${player}`);
  } else {
    console.log(`Those are the players of team ${team2} : ${player}`);
  }
}

console.log("**************************");
console.log("**************************");

//2. Use a loop to calculate the average odd and log it to the console
// (We already studied how to calculate averages, you can go check if you don't remember)

// bei einem Object brauch ich klarerweise das OBJECT !!
//https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object/values

/*
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
*/
