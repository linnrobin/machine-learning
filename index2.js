const brain = require("brain.js");
// const data = require("./data.json");
const data = require("./data2.json");

const network = new brain.recurrent.LSTM();

const trainingData = data.map((el) => ({
  input: el.match,
  output: el.winner,
}));

network.train(trainingData, {
  iterations: 300,
});

const output = network.run("France Vs Croatia");
console.log("Biggest winner probability: " + output);
