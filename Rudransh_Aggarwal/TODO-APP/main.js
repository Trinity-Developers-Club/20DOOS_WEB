"use strict";
console.log("Simple TO-DO by Rudransh Aggarwal 😊");
//✅ - DONE
// ❌ - NOT DONE

const enterTodo = document.querySelector(".enterTodo");
const add = document.querySelector(".add");
const clearAll = document.querySelector(".clearAll");

//Enter Logic ✅
let cnt = 1;
let userInput;
enterTodo.onkeyup = (e) => {
  if (e.key === "Enter" && enterTodo.value != "") {
    userInput = enterTodo.value;
    console.log(userInput);
    let html = ` <li class="inp"> <button class='inpBtn'onclick=inpBtnfunc()> ${userInput}</button></li>`;
    add.insertAdjacentHTML("afterbegin", html);
    localStorage.setItem(cnt++, userInput);
    enterTodo.value = "";
    // console.log(localStorage.length)
  }
};

//Fetch data from localStorage(That's why only we are storing in it😂😂😂) ✅
window.addEventListener("load", () => {
  for (let i = 1; i <= localStorage.length; i++) {
    let localUserInput;
    localUserInput = localStorage.getItem(i);
    console.log(localUserInput);
    let html = ` <li  class="inp" ><button class='inpBtn'onclick=inpBtnfunc()> ${localUserInput}</button></li>`;
    add.insertAdjacentHTML("afterbegin", html);
  }
});

//Delete full list ✅
function another() {
  console.log("clicked");
  window.location.reload();
}

//Can I implement login logic in it.

//it is storing only 3 todo's at a time ,if we will add the new todo's the old ones will be deleted
