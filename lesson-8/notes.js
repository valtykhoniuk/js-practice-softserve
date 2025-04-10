/***********************
 * SPREAD OPERATOR (...)
 ***********************/
// Expands iterable elements (like arrays or strings) into individual elements.

const nums = [11, 8, 44, 87];
Math.min(...nums); // => 8

const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2]; // => [1, 2, 3, 4]

const str = "hello";
const chars = [...str]; // => ['h', 'e', 'l', 'l', 'o']

/***********************
 * DESTRUCTURING
 ***********************/
// Extract values from arrays or properties from objects into variables.

// Array destructuring
const [first, second] = [10, 20];
console.log(first); // 10
console.log(second); // 20

// Object destructuring
const person = { name: "Alice", age: 25 };
const { name, age } = person;
console.log(name); // Alice
console.log(age); // 25

// Nested object
const user = { id: 1, info: { email: "test@example.com" } };
const {
  info: { email },
} = user;
console.log(email); // test@example.com

/***********************
 * SYMBOL
 ***********************/
// Unique and immutable data type used as object keys.

const sym1 = Symbol("id");
const sym2 = Symbol("id");
console.log(sym1 === sym2); // false

const obj = {
  [sym1]: 123,
};
console.log(obj[sym1]); // 123

/***********************
 * SET
 ***********************/
// Collection of unique values.

const set = new Set([1, 2, 3, 2, 1]);
console.log(set); // => Set {1, 2, 3}

set.add(4);
set.has(2); // => true
set.delete(1);
set.size; // => 3

// Convert Set to Array
const uniqueArr = [...set]; // => [2, 3, 4]

/***********************
 * MAP
 ***********************/
// Collection of key-value pairs with keys of any type.

const map = new Map();
map.set("a", 1);
map.set("b", 2);
map.set(3, "three");

console.log(map.get("a")); // => 1
map.has("b"); // => true
map.delete(3);
map.size; // => 2

// Iterate over a Map
map.forEach((value, key) => {
  console.log(key, value);
});

/***********************
 * ITERATORS
 ***********************/
// Objects that implement the iterable protocol.

const arr = [10, 20, 30];
const iterator = arr[Symbol.iterator]();

console.log(iterator.next()); // { value: 10, done: false }
console.log(iterator.next()); // { value: 20, done: false }
console.log(iterator.next()); // { value: 30, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

/***********************
 * ARROW FUNCTIONS
 ***********************/
// Shorter syntax for function expressions. No own 'this'.

// Traditional function
const add = function (a, b) {
  return a + b;
};

// Arrow function
const addArrow = (a, b) => a + b;

const greet = (name) => `Hello, ${name}`;
console.log(greet("John")); // => "Hello, John"
