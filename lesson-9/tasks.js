// task 1
function getPromise(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

// task 2
function calcArrProduct(arr) {
  return new Promise((resolve, reject) => {
    if (arr.every((item) => typeof item === "number")) {
      const product = arr.reduce((acc, num) => acc * num, 1);
      resolve(product);
    } else {
      reject("Error! Incorrect array!");
    }
  });
}

// task 3
function getNumberPrompt(message) {
  return new Promise((resolve) => {
    const input = prompt(message);
    const num = Number(input);

    if (!isNaN(num)) {
      resolve(num);
    } else {
      resolve(getNumberPrompt("Try again: "));
    }
  });
}

getNumberPrompt("Enter a number:").then((result) => {
  console.log(result);
});

// task 4
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let delays = [300, 200, 100, 150, 500];

delays.forEach((ms, index) => {
  delay(ms).then(() => {
    console.log(index);
  });
});

// task 5
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let delays2 = [300, 200, 100, 150, 500];

async function showDelaysInOrder() {
  for (let i = 0; i < delays2.length; i++) {
    await delay(delays2[i]);
    console.log(i);
  }
}

showDelaysInOrder();
