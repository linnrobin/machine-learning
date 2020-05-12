const brain = require("brain.js");
const network = new brain.NeuralNetwork();

const country = [
  [0, "Germany"],
  [1, "Argentina"],
  [2, "Spain"],
  [3, "Netherlands"],
  [4, "Italy"],
  [5, "France"],
  [6, "Brazil"],
  [7, "England"],
  [8, "Ceko"],
  [9, "Sweden"],
  [10, "Uruguay"],
  [11, "Hungary"],
  [12, "Croatia"],
];

network.train([
  { input: [0, 1], output: [0] },
  { input: [2, 3], output: [0] },
  { input: [4, 5], output: [0] },
  { input: [6, 0], output: [0] },
  { input: [6, 5], output: [1] },
  { input: [6, 4], output: [0] },
  { input: [1, 0], output: [1] },
  { input: [1, 0], output: [0] },
  { input: [0, 4], output: [1] },
  { input: [3, 1], output: [1] },
  { input: [3, 0], output: [1] },
  { input: [4, 6], output: [1] },
  { input: [7, 0], output: [0] },
  { input: [6, 8], output: [0] },
  { input: [6, 9], output: [0] },
  { input: [11, 0], output: [1] },
  { input: [10, 6], output: [1] },
  { input: [11, 4], output: [1] },
  { input: [8, 4], output: [1] },
  { input: [10, 1], output: [0] },
]);

const output = network.run([12, 5]);
let winner = "";
if (output > 0.5) {
  winner = "France";
} else {
  winner = "Croatia";
}
console.log(`Final winner probability : ${winner}`);
