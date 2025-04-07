// ===== Accessing the DOM =====
document; // The entire document object
document.head; // The <head> element
document.body; // The <body> element

// ===== Selecting Elements =====

// By ID (returns a single element)
document.getElementById("myId");

// By class name (returns an HTMLCollection)
document.getElementsByClassName("myClass");

// By tag name (returns an HTMLCollection)
document.getElementsByTagName("div");

// CSS-style selector (returns the first match)
document.querySelector(".myClass");

// CSS-style selector (returns a NodeList of all matches)
document.querySelectorAll("div.myClass");

// ===== Reading or Changing Content =====

const el = document.querySelector("#example");

// Text content (includes hidden elements)
el.textContent = "New text here";

// Only visible text (like copy-paste behavior)
el.innerText = "Visible text only";

// Insert HTML (can also read inner HTML)
el.innerHTML = "<strong>Bold text</strong>";

// ===== Attributes =====

el.getAttribute("href"); // Get value of 'href'
el.setAttribute("src", "image.png"); // Set 'src' attribute
el.hasAttribute("disabled"); // true/false
el.removeAttribute("disabled"); // Remove an attribute

// ===== Classes =====

el.classList.add("active"); // Add class
el.classList.remove("hidden"); // Remove class
el.classList.toggle("dark-mode"); // Toggle class
el.classList.contains("open"); // Check if class exists

// ===== Inline Styles =====

el.style.color = "blue";
el.style.fontSize = "18px";
el.style.backgroundColor = "#f0f0f0";

// ===== Creating and Adding Elements =====

const newDiv = document.createElement("div"); // Create element
newDiv.textContent = "I am new!";
document.body.appendChild(newDiv); // Add to end of body

// Insert before a specific element
const ref = document.querySelector("#ref");
document.body.insertBefore(newDiv, ref);

// ===== Removing Elements =====

const toRemove = document.querySelector(".delete-me");
toRemove.remove(); // Remove from DOM

// ===== Events =====

// Basic click event
el.addEventListener("click", function () {
  alert("Element clicked!");
});

// Event handler function
function handleClick(event) {
  console.log("Clicked:", event.target);
}

el.addEventListener("click", handleClick);

// Remove event listener
el.removeEventListener("click", handleClick);

// Common events: 'click', 'mouseover', 'mouseout', 'change', 'keydown', 'keyup', 'submit', etc.

// Prevent default action (e.g. form submit or link navigation)
el.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Form prevented from submitting");
});

// ===== Traversing DOM =====

el.parentElement; // Get parent
el.children; // HTMLCollection of children
el.firstElementChild; // First child
el.lastElementChild; // Last child
el.nextElementSibling; // Next sibling
el.previousElementSibling; // Previous sibling

// ===== Useful Properties =====

el.id; // 'myId'
el.tagName; // 'DIV', 'P', etc.
el.className; // 'class1 class2'
el.value; // For input elements
el.src; // For images or scripts
el.href; // For anchors

// ===== Forms Example =====

const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputVal = document.querySelector("#myInput").value;
  console.log("Form submitted with:", inputVal);
});
