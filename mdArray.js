let names = prompt("Enter 5 names separated by commas (e.g. Genevieve,Juan,Luna,Gabriel,Elise):").split(",");
let ages = prompt("Enter 5 corresponding ages separated by commas (e.g. 24,65,21,5,9):").split(",").map(Number);

let multiDimensionalArray = [];

for (let i = 0; i < names.length; i++) {
  multiDimensionalArray.push([names[i], ages[i]]);
}

console.log("Restructured [name, age] array:");
multiDimensionalArray.forEach(pair => console.log(pair));

