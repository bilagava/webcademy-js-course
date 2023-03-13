/* • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
• • • • • JavaScript необходимые основы для начинающих • • • • •
• • • • • • • • • • • • практический курс • • • • • • • • • • •
• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • */
// ================== 0. Настройка окружения ===============
/*
- Установка редактора
- Установка плагина liveServer
- Моя тема Ayu
- Создание проекта
*/

// =================== 1. Подключение ===================
/*
- index.html
- файл main.js
- тег <script src></script>
- Запуск в liveServer
- команда console.log для вывода информации в консоль браузера
- комментарии
*/
// console.log(555);
// console.log("Привіт");

// =================== 2. Переменные ===================
// let userName = "YSB";
// console.log(userName);
// userName = "Vasya";
// console.log(userName);
// const yaerOfBirth = 1967;
// console.log(yaerOfBirth);
// let name, age;
// name = "Yuriy";
// console.log(name);

// let someVariable = "some value";
// console.log(typeof someVariable);
// someVariable = 10;
// console.log(typeof someVariable);
// someVariable = true;
// console.log(typeof someVariable);

// console.log(5 > 10);
// console.log(5 < 10);
// console.log(5 !== 10);
// console.log(5 === 10);
// console.log(5 == 10);

// let time = 20;
// let greeting = time <= 10 ? "Добрий ранок" : "Добрий день";
// console.log(greeting);
// if (time <= 10) {
//   greeting = "Добрий ранок";
// } else {
//   greeting = "Добрий день";
// }
// console.log(greeting);

// 10 < 12 ? console.log("Верно") : console.log("Не верно");

// const userName = "YSB";
// console.log("Привет " + userName + "! Как твои дела!");
// console.log(`Привет ${userName}! Как твои дела!`);

// function declaration

// sayHi();
// function sayHi() {
//   console.log("Привет, уваж пользователь!");
// }

// // function expression
// let sayHid = function (a, d) {
//   console.log(`Привет ${a + d}`);
// };

// sayHid(17, 18);

// const userName = "Марк";
// console.log(`Привет, ${userName}! Как твои дела?`);

// function sayHi(name) {
//   console.log(name);
//   console.log(`Привет, ${name}! Как твои дела?`);
// }

// const pavel = "Павел";
// sayHi(pavel);

// sayHi("Боб");
// sayHi("Павел");

// function sum(a, b) {
//   return a + b;
// }

// function diff(a, b) {
//   return a - b;
// }

// function calculations(func) {
//   let x = 150;
//   let y = 120;
//   const result = func(x, y);
//   console.log(result);
// }
// calculations(sum);
// calculations(diff);

// (function () {
//   console.log("привіт YSB");
// })();

// (function samm(a, b) {
//   console.log(a + b);
// })(10, 20);

// function sayHi(name) {
//   console.log(`Привітик, ${name}! Як твої справи?`);
// }

// sayHi("YSB");

// const nywSayHi = (a, b) => a + b;

// nywSayHi(10, 20);
// const autoBrands = ["audi", "bmw", "mazda", "toyota"];
// console.log(autoBrands);

// autoBrands.push("nissan");
// console.log(autoBrands);

// autoBrands.splice(2, 2);
// console.log(autoBrands);

// console.log("start");

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// console.log("finish");

// const autoBrands = ["audi", "bmw", "mazda", "toyota"];
// autoBrands.push("nissan");

// for (i = 0; i < autoBrands.length; i++) {
//   console.log(autoBrands[i]);
// }
// console.log("-----------------------------");
// for (let item of autoBrands) {
//   console.log(item);
// }
// console.log("-----------------------------");

// autoBrands.forEach(function (item, index) {
//   console.log(`${index}-${item}`);
// });
// autoBrands.forEach(prinBrend);

// function prinBrend(item, index) {
//   console.log(`${index}-${item}`);
// }

// autoBrands.forEach((item, index) => console.log(`${index}-${item}`));
// ================================ 9. Объекты ===============================

// let userName = "Марк";
// let age = 30;
// let isMarried = false;

// const person = {
//   userName: "Vasia",
//   age: 30,
//   isMarried: false,
//   sauHi: function (name) {
//     console.log(this);
//     console.log(`Привіт ${name}! Мене звуть ${this.userName}!`);
//   },
// };

// person.sauHi("Yuriy");
// console.log(person);
// console.log(person.userName);

// person.speciality = "JS developer";
// console.log(person);
// console.log(person.speciality);

// delete person.age;
// console.log(person);

// const person_2 = {
//   userName: "Vasia",
//   age: 30,
//   isMarried: false,
//   sauHi: function (name) {
//     console.log(this);
//     console.log(`Привіт ${name}! Мене звуть ${this.userName}!`);
//   },
// };

// for (let key in person_2) {
//   console.log(key, ":", person_2[key]);
// }

// const person1 = {
//   userName: "Vasia",
//   age: 30,
//   isMarried: false,
// };

// console.log(person1);

// const person2 = {
//   userName: "YSB",
//   age: 55,
//   isMarried: true,
// };

// console.log(person2);

// class Person {
//   constructor(userName, age, isMarried) {
//     this.userName = userName;
//     this.age = age;
//     this.isMarried = isMarried;
//   }
//   sauHi(name) {
//     console.log(`Привіт ${name}! Мене звуть ${this.userName}!`);
//   }
// }

// const person1 = new Person("YSB", 55, true);
// console.log(person1);
// person1.sauHi("Vasia");
// const person2 = new Person("Vasia", 30, false);
// console.log(person2);
// person2.sauHi("YSB");

// ================================  Выбор DOM элементов ===============================

// document.querySelector("selector");
// const heding = document.querySelector("h2");
// heding.classList.add("red");

// document.querySelector("h3").classList.add("green");

// const headings = document.querySelectorAll("h2");
// // headings.classList.add("red-text");
// for (let heading of headings) {
//   heading.classList.add("red-text");
// }

// const paragraphs = document.querySelectorAll("p");
// // for (let p of paragraphs) {
// //   p.classList.add("green-text");
// // }
// paragraphs.forEach((p) => {
//   p.classList.add("green-text");
// });

// const heading = document.querySelector("h2");
// console.log(heading);
// heading.classList.add("red-text");
// heading.classList.remove("red-text");
// const res = heading.classList.toggle("green-text");

// if (res) {
//   console.log("клас є");
// } else {
//   console.log("класа нема");
// }
// const res2 = heading.classList.toggle("green");
// if (res2) {
//   console.log("слас є");
// } else {
//   console.log("класа нема");
// }

// const res = heading.classList.contains("green");
// if (res) {
//   console.log(res);
// }

/*
getAttribute(attrName) — возвращает значение указанного атрибута
setAttribute(name, value) — добавляет указанные атрибут и его значение к элементу
hasAttribute(attrName) — возвращает true при наличии у элемента указанного атрибута
removeAttribute(attrName) — удаляет указанный атрибут

toggleAttribute(name, force) — добавляет новый атрибут при отсутствии или удаляет существующий атрибут.
hasAttributes() — возвращает true, если у элемента имеются какие-либо атрибуты
getAttributesNames() — возвращает названия атрибутов элемента
*/

// const img = document.querySelector("#logo");
// const src = img.getAttribute("src");
// console.log(src);
// img.setAttribute("src", "./img/php.png");
// img.setAttribute("width", "200");
// img.src = "./img/js.png";

// const button = document.querySelector("#button");
// button.setAttribute("value", "Отправить");
// button.value = "Текст для кнопки";

// const button = document.querySelector("#button");
// const img = document.querySelector("#logo");
// button.value = "Удалить";

// // button.addEventListener("click", function () {
// //   img.classList.add("none");
// //   img.classList.delete("none");
// // });
// button.onclick = function () {
//   console.log("click");
// };

// const inputText = document.querySelector("#input-text");
// const textBlock = document.querySelector("#text-block");

// inputText.addEventListener("input", inputHandler);

// function inputHandler() {
//   console.log(inputText.value);
//   textBlock.innerText = inputText.value;
// }

// const list = document.querySelector("#list");

// list.addEventListener("click", function (event) {
//   console.log(event.target);
// });

// const container = document.querySelector("#elementsContainer");

// const newHeader = document.createElement("h1");
// newHeader.textContent = "Новый заголовок";
// container.append(newHeader);

// const mainHeader = document.querySelector("header");
// const headerCopy = mainHeader.cloneNode(true);
// container.append(headerCopy);

// const htmlExample = "<h2>Еще один заголовок</h2>";
// container.insertAdjacentHTML("beforeend", htmlExample);

// const title = "Текст заголовка";
// const htmlExamp = `<h2>${title}</h2>`;
// container.insertAdjacentHTML("beforeend", htmlExamp);
