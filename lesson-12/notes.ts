// TypeScript Basics

// 1. Basic Data Types
let num: number = 10;
let big: bigint = 1000n;
let str: string = "text";
let bool: boolean = true;
let sym: symbol = Symbol("id");
let n: null = null;
let und: undefined = undefined;

// 2. Any type (не рекомендується)
let user: any = 1;
user = "Alex";
user = true;

// 3. Function Typing
function sum(a: number, b: number): number {
  return a + b;
}

function showMessage(msg: string): void {
  console.log(`Message: ${msg}`);
}

function throwErr(msg: string): never {
  throw new Error(msg);
}

// 4. Object Typing
let address: { street: string; house: number } = {
  street: "Franko",
  house: 22,
};

// 5. Array Typing
const ages: number[] = [18, 25, 30];
const cities: string[] = ["Lviv", "Kyiv", "Rivne"];
const nums2D: number[][] = [
  [1, 2],
  [3, 4],
];

// 6. Array Destructuring
const filteredCities = cities.filter((c) => c.length > 4);
const [first, second] = filteredCities;

// 7. Tuples
let tuple1: [string, number, boolean] = ["student", 1, true];
tuple1.push("extra");
// console.log(tuple1[3]); // Error: index 3 not in type

// 8. Enums
enum Fruits {
  Orange = 10,
  Mango = 5,
  Apple = 21,
}
console.log(Fruits.Mango); // 5

// 9. Union Types
let house: number | string = "221B";
house = 33;

function showData(data: string | number | boolean): void {
  console.log(`Data: ${data}`);
}

// 10. Type Narrowing
function process1(data: string | number): void {
  if (typeof data === "string") {
    console.log(data.toUpperCase());
  } else {
    console.log(data.toFixed(2));
  }
}

// 11. Literal Types
function runServer(port: 8000 | 8001): void {
  console.log(`Server started on port ${port}`);
}
runServer(8000);
// runServer(3000); // Error

// 12. Type Aliases
type UserId = number | string;

function showUserId(id: UserId): void {
  console.log(`User ID: ${id}`);
}
showUserId(1);
showUserId("abc123");
