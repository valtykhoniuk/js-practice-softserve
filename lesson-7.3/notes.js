/***********************
 * WHAT IS LODASH
 ***********************/
// Lodash is a JavaScript utility library for arrays, objects, strings, and more.
// It simplifies data manipulation and improves code readability.
// Syntax: _.method()

/***********************
 * ARRAY METHODS
 ***********************/
_.chunk(["a", "b", "c", "d"], 2); // => [['a', 'b'], ['c', 'd']]
_.uniq([2, 1, 2]); // => [2, 1]
_.flatten([1, [2, [3, 4]]]); // => [1, 2, [3, 4]]
_.flattenDeep([1, [2, [3, 4]]]); // => [1, 2, 3, 4]
_.compact([0, 1, false, 2, "", 3]); // => [1, 2, 3]
_.difference([1, 2, 3], [2, 3]); // => [1]

/***********************
 * OBJECT METHODS
 ***********************/
_.merge({ a: 1 }, { b: 2 }); // => { a: 1, b: 2 }
_.cloneDeep({ a: { b: 2 } }); // deep clone
_.pick({ a: 1, b: 2, c: 3 }, ["a"]); // => { a: 1 }
_.omit({ a: 1, b: 2, c: 3 }, ["a"]); // => { b: 2, c: 3 }
_.has({ a: { b: 2 } }, "a.b"); // => true

/***********************
 * FUNCTION METHODS
 ***********************/
const log = () => console.log("Run");

const debounced = _.debounce(log, 300);
debounced(); // runs after 300ms of no calls

const throttled = _.throttle(log, 1000);
throttled(); // runs at most once per 1000ms

/***********************
 * COLLECTION METHODS
 ***********************/
_.each([1, 2, 3], function (n) {
  console.log(n);
});

_.map([1, 2, 3], function (n) {
  return n * 2;
}); // => [2, 4, 6]

_.filter([1, 2, 3], function (n) {
  return n % 2 === 1;
}); // => [1, 3]

_.groupBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': [4.2], '6': [6.1, 6.3] }

/***********************
 * STRING METHODS
 ***********************/
_.camelCase("hello world"); // => 'helloWorld'
_.kebabCase("Hello World"); // => 'hello-world'
_.startCase("hello world"); // => 'Hello World'

/***********************
 * UTILITIES
 ***********************/
_.isEmpty([]); // => true
_.isEqual({ a: 1 }, { a: 1 }); // => true
_.random(1, 5); // => random int between 1 and 5
_.now(); // => timestamp

/***********************
 * PERFORMANCE OPTIMIZATION
 ***********************/
const heavyOp = _.memoize(function (x) {
  return x * 1000;
});
heavyOp(2); // caches result for repeated calls

/***********************
 * INSTALLATION
 ***********************/
// npm install lodash
// or via CDN:
// <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>
