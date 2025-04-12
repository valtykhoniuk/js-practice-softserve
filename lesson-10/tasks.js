// task 1
const { copyFileSync } = require("fs");
const http = require("http");
const os = require("os");
const path = require("path");

http
  .createServer(function (request, response) {
    const userInfo = os.userInfo();
    const uptimeInMinutes = (os.uptime() / 60).toFixed(2);
    const currentDirectory = process.cwd();
    const serverFileName = path.basename(__filename);
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(`
        <html>
          <head><title>System Information</title></head>
          <body>
            <h1>System Information</h1>
            <p><strong>Current User:</strong> ${userInfo.username}</p>
            <p><strong>Operating System:</strong> ${os.type()} ${os.release()}</p>
            <p><strong>System Uptime:</strong> ${uptimeInMinutes} minutes</p>
            <p><strong>Current Working Directory:</strong> ${currentDirectory}</p>
            <p><strong>Server File Name:</strong> ${serverFileName}</p>
          </body>
        </html>
      `);
  })
  .listen(8000);
console.log("Server running at http://127.0.0.1:8000/");

const http = require("http");
const os = require("os");
const personalmodule = require("./personalmodule"); // Import the custom module

const username = os.userInfo().username; // Get the system username

http
  .createServer((request, response) => {
    const message = personalmodule.getMessage(username); // Get the personalized message

    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(`
    <html>
      <head><title>Personal Greeting</title></head>
      <body>
        <h1>${message}</h1>
      </body>
    </html>
  `);
  })
  .listen(8000, () => {
    console.log("Server running at http://127.0.0.1:8000/");
  });
