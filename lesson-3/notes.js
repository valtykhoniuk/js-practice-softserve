// ===========================
// 🛠 Debugging in JavaScript
// ===========================

// ✅ Basic logging
let x = 10;
let y = 5;
console.log("x - y =", x - y);

// 🛑 Using debugger to pause execution
function add(a, b) {
  debugger; // Opens debugger in DevTools
  return a + b;
}
add(3, 4);

// ==============================
// 💥 try..catch for Error Handling
// ==============================

try {
  let result = someUndefinedVariable + 1;
} catch (error) {
  console.log("Caught an error:", error.message);
}

// ==============================
// 🔁 try..catch..finally structure
// ==============================

try {
  console.log("Start");
  let data = 5 / 0;
} catch (err) {
  console.log("Error:", err.message);
} finally {
  console.log("Always runs, good for cleanup");
}

// ==============================
// 🔨 Throwing Custom Errors
// ==============================

function validateAge(age) {
  if (age < 0) {
    throw new Error("Age cannot be negative");
  }
  return age;
}

try {
  validateAge(-3);
} catch (error) {
  console.log("Custom error:", error.message);
}

// ===============================
// 🧠 Memory Management Concepts
// ===============================

// JavaScript automatically handles memory allocation and garbage collection

// Example: reference counting
let obj1 = { data: { value: 100 } };
let obj2 = obj1; // both point to the same object
obj1 = null; // obj2 still points to it
obj2 = null; // now GC can clean it

// ===============================
// 🕵️ Common Memory Leaks
// ===============================

// ❌ Unused global variables
window.leak = "oops";

// ❌ Forgotten timers
setInterval(() => {
  console.log("Still running...");
}, 1000); // If not cleared, it causes a leak

// ❌ Detached DOM elements
let div = document.createElement("div");
document.body.appendChild(div);
document.body.removeChild(div);
// Still referenced somewhere in JS → leak

// ❌ Closures holding unused data
function outer() {
  let largeData = new Array(1000000).fill("leak");
  return function inner() {
    console.log("still holding largeData");
  };
}
const leaky = outer();
