// 🧠 JavaScript OOP

// ✅ Object literal
const user = {
  name: "Alice",
  age: 25,
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  },
};

user.greet(); // "Hi, I'm Alice"

// ✅ Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function () {
    console.log("Hi, I'm " + this.name);
  };
}

const p1 = new Person("Bob", 30);
p1.sayHi(); // "Hi, I'm Bob"

// ✅ Class Syntax (ES6)
class Animal {
  constructor(type) {
    this.type = type;
  }

  speak() {
    console.log(`${this.type} makes a sound`);
  }
}

const cat = new Animal("Cat");
cat.speak(); // "Cat makes a sound"

// ✅ Inheritance
class Dog extends Animal {
  constructor(name) {
    super("Dog");
    this.name = name;
  }

  speak() {
    console.log(`${this.name} barks`);
  }
}

const rex = new Dog("Rex");
rex.speak(); // "Rex barks"

// ✅ Getters and Setters
class User {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (newName.length < 2) throw "Name too short";
    this._name = newName;
  }
}

const u = new User("Max");
console.log(u.name); // Max
u.name = "Leo";
console.log(u.name); // Leo

// ✅ Static Methods & Properties
class MathUtil {
  static PI = 3.14159;

  static double(x) {
    return x * 2;
  }
}

console.log(MathUtil.double(4)); // 8
console.log(MathUtil.PI); // 3.14159

// ✅ Encapsulation with Private Fields (ES2022+)
class Counter {
  #count = 0;

  increment() {
    this.#count++;
  }

  getCount() {
    return this.#count;
  }
}

const c = new Counter();
c.increment();
console.log(c.getCount()); // 1

// ✅ Polymorphism: different implementations of same method
class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  area() {
    return this.side * this.side;
  }
}

const shapes = [new Circle(3), new Square(4)];
shapes.forEach((shape) => console.log(shape.area()));

// ✅ `this` keyword
// Refers to the object that owns the method being called
const car = {
  brand: "BMW",
  showBrand() {
    console.log(this.brand);
  },
};

car.showBrand(); // BMW

// ✅ Factory Function (alternative to class)
function createUser(name) {
  return {
    name,
    greet() {
      console.log(`Hi, I'm ${name}`);
    },
  };
}

const u1 = createUser("Eva");
u1.greet(); // Hi, I'm Eva
