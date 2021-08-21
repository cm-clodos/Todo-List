"use strict"




const addToDoButton = document.querySelector("#addToDo");
const toDoContainer = document.querySelector("#toDoContainer");
const inputField = document.querySelector("#inputField");


//eventlistener

addToDoButton.addEventListener("click", addingToDo);


//functions
function addingToDo(){

    let item = document.createElement("p");
    item.classList.add("itemStyle");
    item.innerText = inputField.value;
    toDoContainer.appendChild(item);
    inputField.value = "";

    item.addEventListener("click", function(){
        item.style.textDecoration = "line-through";
    })

    item.addEventListener("dblclick", function(){
        toDoContainer.removeChild(item);
    })
}