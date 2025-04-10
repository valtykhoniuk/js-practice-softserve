// 📘 Extended Cheatsheet on Regular Expressions in JavaScript

// 🔹 Creating Regular Expressions:
let reg1 = new RegExp("pattern"); // Using constructor
let reg2 = /pattern/; // Literal syntax

// 🔹 Flags:
// i - ignore case (case-insensitive)
// g - global search (all matches)
// m - multiline mode (^ $ match line start/end)
// s - dot matches newline
// u - includes full Unicode support
// y - search mode for a specific position in the text

// 🔹 RegExp Methods:
let str = "Data transfer started!";
let regExp = /Data/;
regExp.test(str); // true — checks if match exists
regExp.exec(str); // ["Data"] — returns the match

// 🔹 String Methods:
"text here".search(/tex/); // Returns index of first match
"a;b;c".split(/;/); // Splits string by pattern -> ["a", "b", "c"]
"home sweet home".match(/home/g); // Returns all matches -> ["home", "home"]
"home home".replace(/home/g, "car"); // Replaces all -> "car car"

// 🔹 Symbols & Metacharacters:
// \d - digit [0-9]
// \D - NOT a digit [^0-9]
// \w - word character: letter/digit/_ [A-Za-z0-9_]
// \W - NOT a word character [^A-Za-z0-9_]
// \s - whitespace (incl. tabs, newlines)
// \S - NOT whitespace
// . - any character except \n

// 🔹 Quantifiers:
// +    — one or more (1+)
// *    — zero or more (0+)
// ?    — zero or one (optional)
// {n}  — exactly n times
// {n,} — at least n times
// {n,m} — between n and m times (inclusive)

"100 10 1".match(/\d0*/g); // ["100", "10", "1"] — digit with trailing zeros
"abcde".match(/[a-c]/g); // ["a", "b", "c"] — range from a to c

// 🔹 Anchors:
/^\d{4}\w{1,3}$/.test("1000JS"); // true — 4 digits + 1–3 word characters

// 🔹 Escaping special characters:
"3.14".match(/\d\.\d+/); // ["3.14"] — dot escaped as \\.

// 🔹 Groups & Alternatives:
/(ha)+/gi; // group "ha" repeated 1+ times (haha, hahaha)
/ha+/gi; // "h" once, "a" one or more times (ha, haaa)
/html|css|js/gi; // one of the three keywords

// 🔹 Multiline mode (flag m):
let cities = `1) Kyiv\n2) Lviv\n3) Odesa`;
cities.match(/^\d/gm); // ["1", "2", "3"] — digit at start of each line

// 🔹 Form Validation:
// Email:
let email = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
email.test("test@mail.com"); // true

// Ukrainian phone number format:
let phone = /^\+38\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
phone.test("+38(093)-458-22-76"); // true

// Password (min. 8 characters, at least one letter and one number):
let password = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
password.test("pass1234"); // true

// 🔹 Negated groups (exclusions):
/[^abc]/.test("x"); // true — any character except a, b, c

// 🔹 Lazy quantifiers:
"<div>Text</div>".match(/<.*?>/); // ["<div>"] — minimal match (non-greedy)
