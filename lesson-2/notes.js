// === ARRAYS ===

// Declaration
const arr1 = [];
const arr2 = new Array();
const cities = ["Rome", "Lviv", "Warsaw"];

// Access by index (0-based)
console.log(cities[0]); // "Rome"

// Modify elements
cities[0] = "Berlin";

// Add new elements by index
cities[5] = "London";

// Length of array
console.log(cities.length); // 6

// Array methods
cities.push("Paris"); // Add to end
cities.pop(); // Remove from end
cities.shift(); // Remove from start
cities.unshift("Kyiv"); // Add to start

const sliced = cities.slice(1, 3); // Copy from index 1 to 2
cities.splice(1, 1, "Madrid"); // Remove 1 element at index 1 and insert "Madrid"
const all = cities.concat(["Tokyo", "Seoul"]);

cities.forEach((city) => console.log(city));
const upperCase = cities.map((city) => city.toUpperCase());

// === LOOPS ===

// while loop
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

// do...while loop
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 3);

// for loop
for (let k = 0; k < 3; k++) {
  console.log(k);
}

// for...in (keys/indexes)
for (let index in cities) {
  console.log(cities[index]);
}

// for...of (values)
for (let city of cities) {
  console.log(city);
}

// break and continue
for (let x = 1; x <= 10; x++) {
  if (x === 5) continue;
  if (x === 8) break;
  console.log(x);
}

// === FUNCTIONS ===

// Function declaration
function greet(name) {
  console.log(`Hello, ${name}`);
}
greet("Oleh");

// Parameters and default values
function multiply(a = 1, b = 1) {
  return a * b;
}
multiply(3, 4); // 12

// Arguments object (for optional parameters)
function total() {
  let result = 1;
  for (let i = 0; i < arguments.length; i++) {
    result *= arguments[i];
  }
  return result;
}
total(2, 3, 4); // 24

// Return values
function square(n) {
  return n * n;
}
const result = square(5); // 25

// Function as variable (expression)
const sayHi = function () {
  console.log("Hi!");
};
sayHi();

// Function as parameter
function operation(a, b, func) {
  console.log(func(a, b));
}
operation(10, 5, (x, y) => x + y);

// Recursion
function factorial(n) {
  return n === 1 ? 1 : n * factorial(n - 1);
}
factorial(4); // 24

// IIFE
(function () {
  console.log("Immediately called function");
})();

// Closures
function makeCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}
const counter = makeCounter();
counter(); // 1
counter(); // 2

// Hoisting
console.log(a); // undefined
var a = 10;

console.log(add(2, 3)); // works
function add(x, y) {
  return x + y;
}

// console.log(sub(2, 3)); // Error
var sub = function (x, y) {
  return x - y;
};
