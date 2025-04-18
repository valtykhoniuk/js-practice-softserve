// ==============================
// 📦 FUNCTION OVERLOADING
// ==============================

// Define overload signatures
function makeDate(timestamp: number): Date;
function makeDate(month: number, day: number, year: number): Date;

// Implement function for all cases
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d); // 3 params: treat as (month, day, year)
  } else {
    return new Date(mOrTimestamp); // 1 param: treat as timestamp
  }
}

// Usage examples
const date1 = makeDate(1650000000000); // ✅ valid: timestamp
const date2 = makeDate(4, 18, 2025); // ✅ valid: month, day, year
// const date3 = makeDate(4, 18);        // ❌ Error: no matching overload

// ==============================
// 📦 GENERICS
// ==============================

// Basic generic function
function identity<T>(arg: T): T {
  return arg; // returns same type
}

// Usage
const str = identity<string>("Hello");
const num = identity(42); // type inferred as number

// Generic with array
function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length); // ✅ array has .length
  return arg;
}

const logged = loggingIdentity([1, 2, 3]);

// ==============================
// 📦 GENERIC TYPES & INTERFACES
// ==============================

// Option 1: Function type with generics
let myIdentity: <T>(arg: T) => T = identity;

// Option 2: Interface with generic method
interface GenericIdentityFn {
  <T>(arg: T): T;
}

// Option 3: Interface with generic type
interface GenericIdentityTyped<T> {
  (arg: T): T;
}

let myTyped: GenericIdentityFn = identity;
let myNumberIdentity: GenericIdentityTyped<number> = identity;

// ==============================
// 📦 GENERIC CLASSES
// ==============================

class GenericNumber<T> {
  zeroValue!: T;
  add!: (x: T, y: T) => T;
}

let numberInstance = new GenericNumber<number>();
numberInstance.zeroValue = 0;
numberInstance.add = (x, y) => x + y;

let stringInstance = new GenericNumber<string>();
stringInstance.zeroValue = "";
stringInstance.add = (x, y) => x + y;

// ==============================
// 📦 GENERIC CONSTRAINTS
// ==============================

interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(arg: T): T {
  console.log(arg.length); // ✅ safe access
  return arg;
}

logLength("test"); // ✅ string has .length
logLength([1, 2, 3]); // ✅ array has .length
// logLength(123);        // ❌ number has no .length

// ==============================
// 📦 GENERIC FACTORY FUNCTION
// ==============================

function createInstance<T>(c: new () => T): T {
  return new c();
}

class BeeKeeper {
  hasMask: boolean = true;
}

class ZooKeeper {
  nametag: string = "Mikle";
}

class Animal1 {
  numLegs: number = 4;
}

class Bee extends Animal1 {
  keeper: BeeKeeper = new BeeKeeper();
}

class Lion extends Animal1 {
  keeper: ZooKeeper = new ZooKeeper();
}

const lion = createInstance(Lion);
console.log(lion.keeper.nametag);

// ==============================
// 🧩 DECORATORS (CLASS / METHOD / PROPERTY)
// ==============================

// Enable "experimentalDecorators": true in tsconfig.json

// --- CLASS DECORATOR ---
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class SealedClass {
  name = "Test";
}

// --- CLASS DECORATOR with EXTENSION ---
function reportable<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    reportingURL = "http://example.com/report";
  };
}

@reportable
class BugReport {
  type = "report";
  title: string;
  constructor(t: string) {
    this.title = t;
  }
}

const bug = new BugReport("UI bug");
// console.log(bug.reportingURL); // ❌ TypeScript doesn't see this property!

// --- METHOD DECORATOR ---
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with`, args);
    const result = original.apply(this, args);
    console.log(`${propertyKey} returned`, result);
    return result;
  };
  return descriptor;
}

class Printer {
  @log
  print(message: string) {
    console.log("Message:", message);
  }
}

const printer = new Printer();
printer.print("Hello!");

// --- PROPERTY DECORATOR ---
function deprecated(_: any, context: { name: string }) {
  console.warn(`${context.name} is deprecated`);
}

class Product {
  @deprecated
  name: string = "OldProduct";
}
