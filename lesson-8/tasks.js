// task 1
let names = { first: "Tom", second: "Sam", third: "Ray" };
const {
  first: f = "Name №1",
  second: s = "Name №2",
  third: t = "Name №3",
} = names;

console.log(names); // { first: 'Tom', second: 'Sam', third: 'Ray' }
console.log(f); // Tom
console.log(s); // Sam
console.log(t); // Ray

// task 2
let data = { names: ["Sam", "Tom", "Ray", "Bob"], ages: [20, 24, 22, 26] };
const {
  names: [name1, name2, name3],
  ages: [age1, age2, age3],
} = data;

// task 3
function mul(...args) {
  const numbers = args.filter((arg) => typeof arg === "number");

  if (numbers.length === 0) {
    return 0;
  }
  return numbers.reduce((product, num) => product * num, 1);
}

// task 4

let server = {
  data: 0,
  convertToString(callback) {
    callback(() => this.data + "");
  },
};

let client = {
  server,
  result: "",
  calc(data) {
    this.server.data = data;

    // Capture `this` in a variable
    const self = this;

    this.server.convertToString(function (callback) {
      self.notification(callback);
    });
  },
  notification(callback) {
    this.result = callback();
  },
};

client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"

// task 6
function mapBuilder(keysArray, valuesArray) {
  const map = new Map();

  for (let i = 0; i < keysArray.length; i++) {
    map.set(keysArray[i], valuesArray[i]);
  }
  return map;
}
