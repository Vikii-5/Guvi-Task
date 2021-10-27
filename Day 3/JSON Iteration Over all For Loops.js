// JSON Data (Array of Objects)
let givenData = [
  { player: "Dhoni", age: 39, team: "CSK" },
  { player: "Rohit", age: 33, team: "MI" },
  { player: "Virat", age: 32, team: "RCB" },
];

// Iteration using for loop
for (let i = 0; i < givenData.length; i++) {
  console.log(givenData[i]);
}

// Iteration using for in loop
for (let i in givenData) {
  console.log(i, givenData[i]);
}

// Iteration using for of loop
for (let i of givenData) {
  console.log(i);
}

// Iteration using forEach loop
givenData.forEach(function (i) {
  console.log(i);
});
