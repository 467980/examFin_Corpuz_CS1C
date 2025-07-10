let stack = [];

function peek() {
  if (stack.length === 0) {
    console.log("Stack is empty.");
    return null;
  } else {
    console.log(`Top of Stack: ${stack[stack.length - 1]}`);
    return stack[stack.length - 1];
  }
}

function push(item) {
  stack.push(item);
  console.log(`Item "${item}" added to stack.`);
  peek();
  console.log("Current Stack:", stack);
}

function pop() {
  if (stack.length === 0) {
    console.log("Cannot pop. Stack is empty.");
    return;
  }
  let removed = stack.pop();
  console.log(`Item "${removed}" removed from stack.`);
  peek();
  console.log("Current Stack:", stack);
}

for (let i = 0; i < 5; i++) {
  let item = prompt(`Enter grocery item ${i + 1}:`);
  push(item);
}


