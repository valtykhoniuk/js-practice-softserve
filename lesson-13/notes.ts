// ----- Complex Types Overview -----

// Tuple: fixed-length array with different types
let tupleExample: [string, number, boolean] = ["JS", 2025, true];

// Enum: named constants (numeric or string-based)
enum Role {
  ADMIN, // 0
  USER, // 1
  GUEST, // 2
}
enum Status {
  SUCCESS = "success",
  FAIL = "fail",
}

// Union: one of multiple types
let unionExample: string | number;
unionExample = "hello";
unionExample = 42;

// Intersection: combine types
type A = { a: string };
type B = { b: number };
type AB = A & B;
const obj: AB = { a: "hello", b: 123 };

// Literal Types
type Direction = "left" | "right" | "up" | "down";

// ----- Type Aliases vs Interfaces -----

// Type Alias
type Point = { x: number; y: number };
type ID = string | number;

// Interface
interface IUser {
  name: string;
  age?: number; // optional
  getId(): ID;
}

// Callable Interface with overloads
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

// Type Alias supports union, intersection, etc.
type Mixed = string | number | boolean;
type Extended = Point & { z: number };

// ----- Classes and OOP -----

class Animal {
  public name: string;
  protected sound: string;
  private id: number;
  static species = "Unknown";

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
    this.sound = "unknown";
  }

  public makeSound(): void {
    console.log(this.sound);
  }

  get description(): string {
    return `${this.name} makes ${this.sound}`;
  }

  set setSound(s: string) {
    this.sound = s;
  }
}

class Dog extends Animal {
  constructor(name: string, id: number) {
    super(name, id);
    this.setSound = "bark";
  }

  override makeSound(): void {
    console.log("Dog barks!");
  }
}

// Abstract Class
abstract class Shape {
  abstract area(): number;
  describe(): string {
    return "This is a shape.";
  }
}

class Circle1 extends Shape {
  constructor(public radius: number) {
    super();
  }

  override area(): number {
    return Math.PI * this.radius ** 2;
  }
}

// Type Narrowing
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log("String ID:", id.toUpperCase());
  } else {
    console.log("Numeric ID:", id.toFixed(2));
  }
}

// instanceof, in, custom guard
function isCircle(shape: Shape): shape is Circle1 {
  return shape instanceof Circle1;
}
