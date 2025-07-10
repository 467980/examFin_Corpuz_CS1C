let numbers = prompt("Enter numbers separated by comma (e.g. 24,65,21,5,9,32,42,80,57):").split(",").map(Number);
let names = prompt("Enter names separated by comma (e.g. Zenvo,Erica,Jordie,Alicia,Redon):").split(",");

let mergedArray = [...numbers, ...names];
console.log("Merged Array:", mergedArray);

let sortedNumbers = [...numbers].sort((a, b) => b - a);
console.log("Numbers Sorted (Descending):", sortedNumbers);

let sortedNames = [...names].sort();
console.log("Names Sorted (Alphabetically):", sortedNames);

