// Задано сторінку з 3 кнопками . Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:
//         1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
//         2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
//         3) 3-я кнопка – при наведенні колір фону міняється на коричневий
//         
// Запустіть виконане завдання за допомогою Live Server 
// Перевірте виконання за допомогою команди node tests/task2.test.js

//HTML 
<button id="button1">Change Background to Blue</button>
<button id="button2">Change Background to Pink</button>
<button id="button3">Hover to Change to Brown</button>
<script src="-filename.js-"></script>

//JS
const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");
const btn3 = document.getElementById("button3");

btn1.addEventListener("click", function(){
    document.body.style.backgroundColor = "blue";
});

btn2.addEventListener("dblclick", function(){
    document.body.style.backgroundColor = "pink";
});

document.getElementById("button3").addEventListener("mouseover", function () {
    document.body.style.backgroundColor = "brown";
});

document.getElementById("button3").addEventListener("mouseout", function () {
    document.body.style.backgroundColor = "white";
});
