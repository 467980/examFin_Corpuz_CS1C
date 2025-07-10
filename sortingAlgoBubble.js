let numbers = [];
for (let i = 0; i < 10; i++) {
  let num = Number(prompt(`Enter number ${i + 1} of 10:`));
  numbers.push(num);
}

function bubbleSort(arr) {
  let len = arr.length;
  let temp;
  let sorted = [...arr];

  console.log("Bubble Sort Process:");
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      console.log(`Comparing ${sorted[j]} and ${sorted[j + 1]}`);
      if (sorted[j] > sorted[j + 1]) {
        temp = sorted[j];
        sorted[j] = sorted[j + 1];
        sorted[j + 1] = temp;
        console.log(`Swapped to: [${sorted.join(", ")}]`);
      }
    }
  }
  return sorted;
}

let sortedArray = bubbleSort(numbers);
console.log("Final Sorted Array:", sortedArray);

