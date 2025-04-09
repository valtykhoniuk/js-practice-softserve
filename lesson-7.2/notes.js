/***********************
 * WHAT IS JQUERY
 ***********************/
// jQuery is a JavaScript library that simplifies HTML, event handling, styles, animation, and AJAX
// Syntax: $(selector).method();

/***********************
 * BASIC SELECTORS
 ***********************/
$("div"); // all <div> elements
$("#id"); // element with specific id
$(".class"); // elements with a specific class
$("div.class"); // <div> with a class
$("[type='text']"); // input elements with type="text"
$("div > span"); // direct child <span> elements inside <div>
$("li:even"); // even <li> elements (0, 2, 4, ...)

/***********************
 * EVENTS
 ***********************/
$("#btn").on("click", function () {
  alert("Button clicked!");
});

// Prevent default behavior
$("a").on("click", function (e) {
  e.preventDefault(); // stops link navigation
});

// DOM ready event
$(function () {
  console.log("DOM fully loaded");
});

/***********************
 * CONTENT & STYLES
 ***********************/
$("#el").text("Text only"); // get/set text (no HTML)
$("#el").html("<b>Bold</b>"); // get/set HTML
$("#input").val(); // get/set input value
$("#el").attr("href"); // get attribute
$("#el").addClass("red"); // add class
$("#el").removeClass("blue"); // remove class
$("#el").toggleClass("hidden"); // toggle class

/***********************
 * DOM MANIPULATION
 ***********************/
$("#box").append("<p>Appended</p>"); // add to end
$("#box").prepend("<p>Prepended</p>"); // add to beginning
$("#box").before("<hr>"); // insert before
$("#box").after("<hr>"); // insert after
$("#box").remove(); // remove element
$("#box").empty(); // remove contents

/***********************
 * LOOPING THROUGH ELEMENTS
 ***********************/
$("li").each(function (i, el) {
  console.log(i + ": " + $(el).text());
});

/***********************
 * OPTIMIZATION
 ***********************/
let $el = $("#input");
$el.text("First value");
$el.text("Second value"); // better than repeating $("#input")

/***********************
 * AJAX
 ***********************/
$.ajax({
  url: "/api/cats",
  type: "GET",
  dataType: "json",
  success: function (data) {
    $.each(data, function (i, cat) {
      console.log(cat.name);
    });
  },
  error: function () {
    console.log("AJAX error");
  },
});

// Shortcuts:
$.get("/api/cats", function (data) {
  console.log("GET response:", data);
});

$.post("/api/cats", { name: "Whiskers" }, function (response) {
  console.log("POST response:", response);
});

/***********************
 * AJAX EVENTS (GLOBAL)
 ***********************/
$(document).on("ajaxStart", function () {
  console.log("AJAX started");
});

$(document).on("ajaxComplete", function () {
  console.log("AJAX finished");
});
