// //Задача1

// const btn = document.querySelector(".btn");

// btn.addEventListener("click", () => alert("Привет"));

// //Задача2

// const btnOne = document.querySelector(".btnOne");

// btnOne.addEventListener("mouseover", () => alert("Привет"));

// //Задача3

// const btnTwo = document.querySelector(".btnTwo");

// btnTwo.addEventListener("dblclick", () => alert("Привет"));

// //Задача4

// const subtitle = document.querySelector(".subtitle");

// subtitle.addEventListener("mouseout", () => alert("Привет"));

// //Задача5

// const btnSort = document.querySelector("#btnSort");

// btnSort.addEventListener("click", () => alert("Ку-ку!"));

// //Задача6

// const btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", () => (inputTwo.value = "Ой, я поменял текст"));

// //Задача7

// const btn2 = document.querySelector("#btn2");
// const img1 = document.querySelector(".img1");

// btn2.addEventListener("click", () => (img1.src = "image/2.jpg"));

// //Задача8

// const inp2 = document.querySelector("#inp2");

// function clickMe(el) {
//   el.value = "Ой, я поменял текст";
// }

// function clickMeTwo(el) {
//   el.value = "Ой, а теперь еще раз поменял";
// }

// //Задача11
// const inp5 = document.querySelector("#inp5");

// function clickMe(elem) {
//   elem.value = "Ку-ку";
// }

// // задача 12

// const sub1 = document.querySelector("#sub1");

// function clickMe(elem) {
//   elem.value = "О, теперь на меня больше не нажать!";
//   elem.disabled = true;
// }

//Задача13

// const imgOne = document.querySelector("#imgOne");

// function mouseMove(el) {
//   el.src = "image/1.jpg";
// }

// function mouseOut(el) {
//   el.src = "image/2.jpg";
// }

//Задача14

// const elem = document.querySelector(".btn14");
// const elem2 = document.querySelector("#inp14");

// elem.addEventListener("click", () => {
//   elem2.className = "input2";
// });

//Задача15

// const input = document.querySelector("#input");
// const btnOne = document.querySelector(".btnOne");
// const btnTwo = document.querySelector(".btnTwo");

// btnOne.addEventListener("click", () => {
//   input.style.display = "none";
// });

// btnTwo.addEventListener("click", () => {
//   input.style.display = "inline-block";
// });

//Задача16

// const btnMy = document.querySelector(".btnMy");
// const inpMy = document.querySelector("#inpMy");

// btnMy.addEventListener("click", () => {
//   inpMy.className = "inpMy2";
// });

//Задача17

// const subMy = document.querySelector("#subMy");
// const subMy2 = document.querySelector("#subMy2");

// subMy.addEventListener("click", () => {
//   subMy.value = "О, теперь на меня больше не нажать!";
//   subMy.disabled = true;
// });

// subMy2.addEventListener("click", () => {
//   subMy2.value = "Нажми, чтобы отблокировать элемент";
//   subMy.disabled = false;
// });

//Задача18

// const subMy = document.querySelector("#subMy");

// subMy.addEventListener("click", () => {
//   subMy.value++;
// });

//Задача19

//Задача20

// const myInp = document.querySelector("#myInp");
// const myBtn = document.querySelector("#myBtn");
// myBtn.addEventListener(
//   "click",
//   () => (myInp.value = "Мои css классы: eee www ddd")
// );

//Задача21

// const inpFirst = document.querySelector("#inpFirst");
// const inpSecond = document.querySelector("#inpSecond");
// const btnFirst = document.querySelector("#btnFirst");
// btnFirst.addEventListener("click", () => {
//   let input1Value = inpFirst.value;
//   let input2Value = inpSecond.value;
//   inpFirst.value = input2Value;
//   inpSecond.value = input1Value;
// });

//Задача22

// const i1 = document.querySelector("#i1");
// const i2 = document.querySelector("#i2");
// const b1 = document.querySelector("#b1");

// b1.addEventListener("click", () => {
//   i2.value = Math.pow(i1.value, 2);
// });

//Задача23

// const i1 = document.querySelector("#i1");
// const i2 = document.querySelector("#i2");
// const b1 = document.querySelector("#b1");

// b1.addEventListener("click", () => {
//   if (Number(i1.value)) i2.value = Math.pow(i1.value, 2);
//   else {
//     alert("Введено не число!");
//   }
// });

//Задача24 не изменила курсор

// const myBtn = document.querySelector(".myBtn");

// myBtn.addEventListener("click", () => {
//   myBtn.disabled = true;
//   myBtn.className = "myBtn2";
// });

//Задача25 не получилось

// const first = document.querySelector("#first");
// const inp = document.querySelector("inp");

// inp.addEventListener("click", () => {
//   first.value += value;
// });
