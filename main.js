"use strict";

const addToDoButton = document.querySelector("#addToDo");
const toDoContainer = document.querySelector("#toDoContainer");
const inputField = document.querySelector("#inputField");

//eventlistener

addToDoButton.addEventListener("click", addingToDo);

//functions
function addingToDo() {
   //erstellt ein To Do Item als P tag mit der CSS Klasse
   let item = document.createElement("p");
   item.classList.add("itemStyle");

   //erstellt ein Input element des Types Checkbox inkl. ID
   let check = document.createElement("input");
   check.setAttribute("type", "checkbox");
   check.setAttribute("id", "checkBoxId");

   // deletebutton element erstellen + ID + HTML Text
   let deletebtn = document.createElement("button");
   deletebtn.setAttribute("id", "deletebtn");
   deletebtn.innerHTML = "Delete";

   //wenn Inputfield nicht leer ist wird eine Todo hinzugefügt
   if (inputField.value !== "") {
      item.innerText = inputField.value;
      // toDo Container ist parent of item and item is parent of check and deletebtn
      toDoContainer.appendChild(item);
      item.appendChild(check);
      item.appendChild(deletebtn);
      inputField.value = "";
   } else alert("Füge eine Aufgabe ein");

   check.addEventListener("click", function () {
      if (check.checked === true) {
         //remove button vor textdecoration, nachher wieder hinzugefügt, da sonst textdecoration button durchstreicht ;)
         item.removeChild(deletebtn);
         item.style.textDecoration = "line-through";
         item.appendChild(deletebtn);
      } else item.style.textDecoration = "none";
   });
   //dieser eventlistener auf click für delete button
   deletebtn.addEventListener("click", function () {
      //remove item = Item + Check sind weg
      toDoContainer.removeChild(item);
   });
}
