// task 1
class Circle {
  constructor(center, radius) {
    this.center = center;
    this.radius = radius;
  }

  getLength() {
    return 2 * Math.PI * this.radius;
  }

  static getLengthFromRadius(radius) {
    return 2 * Math.PI * radius;
  }

  getCopy() {
    return new Circle({ x: this.center.x, y: this.center.y }, this.radius);
  }

  static createCircle(x, y, r) {
    return new Circle({ x: x, y: y }, radius);
  }

  checkPointInside(point) {
    const distanceSquared =
      Math.pow(point.x - this.center.x, 2) +
      Math.pow(point.y - this.center.y, 2);
    return distanceSquared <= Math.pow(this.radius, 2);
  }

  toString() {
    return `Circle with center in ${this.center.x},${this.center.y} and radius ${this.radius}`;
  }
}

//task 2
function propsCount(currentObject) {
  return Object.keys(currentObject).length;
}

//task 3
class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getFullName() {
    return "${this.surname} ${this.name}";
  }
}

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  getFullName(middleName) {
    return `${this.surname} ${this.name} ${middleName}`;
  }

  getCourse() {
    let currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }
}

// task 5
class Worker {
  #fullName;
  #dayRate;
  #workingDays;
  #experience;

  get fullName() {
    return this.#fullName;
  }

  set fullName(name) {
    this.#fullName = name;
  }

  get dayRate() {
    return this.#dayRate;
  }

  set dayRate(rate) {
    this.#dayRate = rate;
  }

  get workingDays() {
    return this.#workingDays;
  }

  get experience() {
    return this.#experience;
  }

  set experience(exp) {
    this.#experience = exp;
  }

  addWorkingDays(n) {
    this.#workingDays += n;
  }

  getSalary() {
    return this.#dayRate * this.#workingDays;
  }

  getSalaryWithExperience() {
    return this.#dayRate * this.#workingDays * this.#experience;
  }

  static sortBySalary(workers) {
    return workers.slice().sort((a, b) => a.getSalary() - b.getSalary());
  }
}
