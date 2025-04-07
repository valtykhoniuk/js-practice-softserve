// Browser Object Model (BOM) & Events — Notes

// WINDOW OBJECT
// ------------------------
// Global browser object. All global variables/functions become its members.
var company = "SoftServe";
alert(window.company); // SoftServe

function showMessage() {
  alert("Some message");
}
window.showMessage();

// Properties
console.log(window.innerHeight); // Inner height in pixels
console.log(window.innerWidth); // Inner width in pixels

// Methods
// Open a new window
const win = window.open(
  "https://www.w3schools.com",
  "w3schools",
  "width=200,height=200,left=700,top=200"
);
// Move, resize, close
// win.moveTo(x, y);
// win.resizeTo(width, height);
// win.close();

// HISTORY OBJECT
// ------------------------
history.back(); // Go to previous page
history.forward(); // Go to next page
history.go(-1); // Same as back
console.log(history.length); // Number of pages in session history

// SCREEN OBJECT
// ------------------------
console.log(screen.availHeight); // Height excluding UI elements
console.log(screen.availWidth);
console.log(screen.height);
console.log(screen.width);
console.log(screen.colorDepth);

// LOCATION OBJECT
// ------------------------
console.log(location.href); // Full URL
console.log(location.pathname); // Path
console.log(location.origin); // Protocol + host
console.log(location.protocol); // Protocol (e.g., https)
console.log(location.hostname); // Hostname
console.log(location.port); // Port
console.log(location.search); // ?query=params
console.log(location.hash); // #fragment

// Methods
// location.assign("url")
// location.replace("url")
// location.reload(true); // Reload from server

// NAVIGATOR OBJECT
// ------------------------
console.log(navigator.appCodeName);
console.log(navigator.appName);
console.log(navigator.appVersion);
console.log(navigator.platform);
console.log(navigator.userAgent);
console.log(navigator.onLine);

// GEOLOCATION
// ------------------------
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (pos) {
      alert(
        `Latitude: ${pos.coords.latitude}, Longitude: ${pos.coords.longitude}`
      );
    },
    function (err) {
      alert(err.message);
    },
    { enableHighAccuracy: true, timeout: 4000, maximumAge: 0 }
  );
} else {
  alert("Geolocation not supported.");
}

// EVENTS
// ------------------------
// Common events:
// click, change, mouseover, mouseout, keypress, keydown, load, submit, focus, transitionend

// HTML attribute method:
// <button onclick="alert('Clicked!')">Click me</button>

// DOM property method:
const btn1 = document.getElementById("btn1");
btn1.onclick = function () {
  alert("Clicked via DOM property!");
};

// addEventListener (multiple handlers allowed):
const btn2 = document.getElementById("btn2");
function handler1() {
  alert("Handler 1");
}
function handler2() {
  alert("Handler 2");
}
btn2.addEventListener("click", handler1);
btn2.addEventListener("click", handler2);

// To remove:
// btn2.removeEventListener("click", handler1);

// Accessing element using this:
// <input type="button" onclick="alert(this.value)" value="Send data">

// Event object:
const elem = document.getElementById("elem");
elem.addEventListener("click", function (event) {
  console.log("Event type:", event.type);
  console.log("Target:", event.target);
  event.target.style.backgroundColor = "orange";
});
