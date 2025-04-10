// Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти) вікна браузера
//  і виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення.
// Для запуску використовувати Live Server
// Для перевірки node tests/task4.test.js

function updateWindowSize() {
  const widthSpan = document.getElementById("widthValue");
  const heightSpan = document.getElementById("heightValue");

  widthSpan.textContent = window.innerWidth;
  heightSpan.textContent = window.innerHeight;
}

updateWindowSize();

window.addEventListener("resize", updateWindowSize);
