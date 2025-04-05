// === VARIABLES ===
let name = "Alice"; // can change
const PI = 3.14; // constant, cannot reassign

// === DATA TYPES ===
let str = "Hello"; // String
let num = 42; // Number
let isJSFun = true; // Boolean
let nothing = null; // Null
let notAssigned; // Undefined
let user = { name: "Alex", age: 25 }; // Object

// === TYPE CHECKING ===
console.log(typeof str); // "string"
console.log(typeof notAssigned); // "undefined"
console.log(typeof null); // "object" (JS quirk)

// === USER INTERACTION ===
alert("Hello JS!"); // Message popup
let input = prompt("Enter your name", "User"); // Input dialog
let isOkay = confirm("Are you sure?"); // Yes/No dialog

// === CONSOLE LOG ===
console.log("This is a message");

// === COMMENTS ===
// Single-line comment
/*
Multi-line comment
Explains multiple lines
*/

// === BASIC HTML INTEGRATION ===
// 1. Inline:
// <button onclick="alert('Hi!')">Click</button>

// 2. In HTML file:
// <script>
//   console.log("Hello from inside script tags");
// </script>

// 3. External JS file:
// <script src="script.js"></script>

// Type Conversion (Manual)
Number("1991"); // → 1991
String(23); // → '23'
Boolean(0); // → false
Boolean("hello"); // → true

// Type Coercion (Automatic)
"I am " + 23 + " years old"; // → 'I am 23 years old'
"23" - "10" - 3; // → 10
"23" * "2"; // → 46
"24" / "2"; // → 12
"24" > 12; // → true (string coerced to number)

// Truthy & Falsy Values
// Falsy: 0, '', undefined, null, NaN
Boolean(0); // → false
Boolean(""); // → false
Boolean(undefined); // → false
Boolean(null); // → false
Boolean(NaN); // → false

// Truthy: Everything else
Boolean("hello"); // → true
Boolean(1); // → true

// Use in conditionals:
const money = 0;
if (money) {
  console.log("Don't spend it all!");
} else {
  console.log("You should get a job!");
}

// Prompt & Comparison
const age = Number(prompt("What is your age?"));
if (age === 18) {
  console.log("You just became an adult.");
} else {
  console.log("Not 18.");
}

// Equality Operators
// === Strict equality (no coercion)
23 === "23"; // → false

// == Loose equality (with coercion)
23 == "23"; // → true

// Logical Operators
const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = false;

// AND (&&)
if (hasDriversLicense && hasGoodVision) {
  console.log("You can drive!");
}

// OR (||)
if (hasDriversLicense || hasGoodVision) {
  console.log("One skill is enough!");
}

// NOT (!)
if (!isTired) {
  console.log("You are ready to drive!");
}
