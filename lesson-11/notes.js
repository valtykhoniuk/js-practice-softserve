/***********************
 * HTTP BASICS
 ***********************/
// HTTP (HyperText Transfer Protocol) is used for communication between client and server
// Stateless: each request is independent
// Request contains: method, headers, body

const httpMethods = ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"];
// GET    - retrieve data
// POST   - send data
// PUT    - replace a resource
// PATCH  - update part of a resource
// DELETE - delete a resource
// OPTIONS - get communication options

/***********************
 * IDEMPOTENCE
 ***********************/
// Idempotent methods: same result no matter how many times they're called
// GET, HEAD, PUT, DELETE are idempotent
// POST is NOT idempotent

/***********************
 * AJAX (XMLHttpRequest)
 ***********************/
// AJAX - Asynchronous JavaScript and XML
// Allows communication with the server without reloading the page
const ajaxRequest = new XMLHttpRequest();
ajaxRequest.open("GET", "data.json", true);
ajaxRequest.onreadystatechange = function () {
  if (ajaxRequest.readyState < 4) {
    document.getElementById("output").innerText = "Loading...";
  } else if (ajaxRequest.readyState === 4) {
    if (ajaxRequest.status === 200) {
      document.getElementById("output").innerText = ajaxRequest.responseText;
    }
  }
};
ajaxRequest.send();
// readyState values:
// 0 - UNSENT
// 1 - OPENED
// 2 - HEADERS_RECEIVED
// 3 - LOADING
// 4 - DONE

/***********************
 * XMLHttpRequest POST EXAMPLE
 ***********************/
const postRequest = new XMLHttpRequest();
postRequest.open("POST", "submit.php", true);
postRequest.setRequestHeader(
  "Content-type",
  "application/x-www-form-urlencoded"
);
postRequest.onreadystatechange = function () {
  if (postRequest.readyState === 4 && postRequest.status === 200) {
    console.log(postRequest.responseText);
  }
};
postRequest.send("name=John&age=30");

/***********************
 * FETCH API
 ***********************/
// Modern alternative to XMLHttpRequest
// Returns a Promise

fetch("data.json")
  .then((response) => {
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json(); // parse JSON from response
  })
  .then((data) => {
    console.log(data); // handle the parsed JSON data
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });

/***********************
 * FETCH POST EXAMPLE
 ***********************/
fetch("submit.php", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name: "John", age: 30 }),
})
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error("Error:", error));

/***********************
 * JSON (JavaScript Object Notation)
 ***********************/
// Lightweight data format for exchanging data

// Convert object to JSON string
const user = { name: "Anna", age: 25 };
const jsonString = JSON.stringify(user); // => '{"name":"Anna","age":25}'

// Parse JSON string to object
const parsedUser = JSON.parse(jsonString); // => { name: "Anna", age: 25 }

/***********************
 * CORS (Cross-Origin Resource Sharing)
 ***********************/
// Security feature that blocks requests to different domains unless allowed by server
// Example: frontend on http://localhost:3000 tries to call API at http://api.example.com

// Server must send CORS headers like:
// Access-Control-Allow-Origin: *

// Without proper CORS headers, browser blocks the request for security reasons
