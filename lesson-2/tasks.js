// task 1
function calc(a, b, op) {
  return op === 3 ? a / b : op === 2 ? a * b : op === 1 ? a - b : a + b;
}

// task 2
function createArray(start, end) {
  let newArray = [];
  while (start <= end) {
    newArray.push(start);
    start++;
  }
  return newArray;
}

// task 3
function randArray(k) {
  let result = [];
  for (let i = 0; i < k; i++) {
    let randomNum = Math.floor(Math.random() * 500) + 1;
    result.push(randomNum);
  }
  return result;
}

// task 4
function findUnique(arr) {
  let uniqueElements = new Set(arr);
  return uniqueElements.size === arr.length;
}
