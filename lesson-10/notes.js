/***********************
 * NODE.JS INTRODUCTION
 ***********************/
// Node.js is a JavaScript runtime built on Chrome's V8 engine.
/***********************
 * MODULES
 ***********************/
// Requiring built-in modules:
const http = require("http"); // HTTP module
const fs = require("fs"); // File system module
const url = require("url"); // URL module

/***********************
 * CREATE SERVER
 ***********************/
http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Testing NodeJS server\n");
  })
  .listen(8000);

// Console log to verify the server is running
console.log("Server running at http://127.0.0.1:8000/");

/***********************
 * WORK WITH FILE SYSTEM
 ***********************/
fs.readFile("example.txt", "utf8", function (err, data) {
  if (err) throw err;
  console.log(data); // Logs the content of the file
});

fs.writeFile("example.txt", "Hello, Node.js!", "utf8", function (err) {
  if (err) throw err;
  console.log("File written successfully!");
});

/***********************
 * REQUEST AND RESPONSE METHODS
 ***********************/
// HTTP request methods
http
  .createServer(function (request, response) {
    if (request.method === "GET") {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end("<h1>GET Request</h1>");
    } else if (request.method === "POST") {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end("<h1>POST Request</h1>");
    }
  })
  .listen(8000);

// Console log to check
console.log("Server running at http://127.0.0.1:8000/");
