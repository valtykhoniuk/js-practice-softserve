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

// task 5
function getNumbers(a, b) {
  let resultArr = [];

  let counter = 1;
  while (a <= b) {
    for (let i = 1; i <= counter; i++) {
      resultArr.push(a);
    }
    a++;
    counter++;
  }
  console.log(resultArr);
}

// task 6
function compact(arr) {
  let uniqueSet = new Set(arr);
  let uniqueArray = Array.from(uniqueSet);
  return uniqueArray;
}

// task 7
function funcName(arr) {
  let numbers = [];
  let strings = [];

  arr.flat(Infinity);

  arr.forEach((element) => {
    if (typeof element === "number") {
      numbers.push(element);
    } else if (typeof element === "string") {
      strings.push(element);
    }
  });

  return [numbers, strings];
}

// advanced task
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function generatePrimes(count) {
  let primes = [];
  let num = 2;

  while (primes.length < count) {
    if (isPrime(num)) {
      primes.push(num);
    }
    num++;
  }

  return primes;
}