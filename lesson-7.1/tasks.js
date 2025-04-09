// task 1
function upperCase(str) {
  const upperPattern = /^[A-Z]/;
  if (upperPattern.test(str)) {
    console.log("String starts with uppercase character");
  } else {
    console.log("String not starts with uppercase character");
  }
}

// task 2
function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

// task 3
let text = "Java Script";
let regex = /(\w+)\s+(\w+)/;
let swappedText = text.replace(regex, "$2 $1");
console.log(swappedText); // Script Java

// task 4
let cardNumber = "1234-5678-9012-3456";
regex = /^[1-9]\d{3}(-\d{4}){3}$/;
let isValid = regex.test(cardNumber);
console.log(isValid);

// task 5
function checkLogin(login) {
  const loginRegex = /^[a-zA-Z.][a-zA-Z0-9.]{1, 9}$/;
  const numberRegex = /\d+(\.\d+)?/g;

  const isValid = loginRegex.test(login);
  const numbers = login.match(numberRegex) || [];

  return {
    isValid: isValid,
    numbers: numbers,
  };
}
