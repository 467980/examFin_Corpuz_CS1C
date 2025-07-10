let word1 = prompt("Enter first word (e.g. RACECAR):");
let word2 = prompt("Enter second word (e.g. RECORDER):");

function reverseString(str) {
  return str.split("").reverse().join("");
}

let reversed1 = reverseString(word1);
let reversed2 = reverseString(word2);

console.log(`Original: ${word1}, Reversed: ${reversed1}`);
console.log(`Original: ${word2}, Reversed: ${reversed2}`);

console.log(`${word1} is a palindrome?`, word1 === reversed1);
console.log(`${word2} is a palindrome?`, word2 === reversed2);
