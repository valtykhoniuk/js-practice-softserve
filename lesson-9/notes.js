/***********************
 * SETTIMEOUT
 ***********************/
// Executes a function after a delay (in milliseconds)
setTimeout(function () {
  console.log("Hello after 1 second");
}, 1000); // => logs after 1s

/***********************
 * CALLBACKS
 ***********************/
// A callback is a function passed to another function and called later
function greeting(name, callback) {
  console.log("Hi " + name);
  callback();
}

function askQuestion() {
  console.log("How are you?");
}

greeting("Anna", askQuestion);
// => Hi Anna
// => How are you?

/***********************
 * PROMISES
 ***********************/
// A Promise represents an operation that hasn't completed yet
let promise = new Promise(function (resolve, reject) {
  let success = true;
  if (success) {
    resolve("Success!");
  } else {
    reject("Error!");
  }
});

promise
  .then(function (result) {
    console.log(result); // => "Success!"
  })
  .catch(function (error) {
    console.error(error); // => "Error!"
  });

/***********************
 * ASYNC / AWAIT
 ***********************/
// Makes asynchronous code easier to read and write
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function demo() {
  console.log("Start");
  await wait(1000);
  console.log("Waited 1 second");
}

demo();
// => Start
// => Waited 1 second

/***********************
 * JAVASCRIPT MODULES
 ***********************/
// Allows code to be split into reusable files

// --- math.js ---
export function add(a, b) {
  return a + b;
}

// --- main.js ---
import { add } from "./math.js";
console.log(add(2, 3)); // => 5
