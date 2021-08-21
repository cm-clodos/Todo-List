"use strict"




const addToDoButton = document.querySelector("#addToDo");
const toDoContainer = document.querySelector("#toDoContainer");
const inputField = document.querySelector("#inputField");


//eventlistener

addToDoButton.addEventListener("click", addingToDo);


//functions
function addingToDo(){
    //erstellt ein To Do Item
    let item = document.createElement("p");
    item.classList.add("itemStyle");

    //erstellt ein Input element des Types Checkbox inkl. ID
    let check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.setAttribute("id", "checkBoxId");

    //wenn Inputfield nicht leer ist wird eine Todo hinzugefügt
    if (inputField.value !== ""){
    item.innerText = inputField.value;
    // toDo Container ist parent of item and item is parent uf check
    toDoContainer.appendChild(item);
    item.appendChild(check);
    inputField.value = "";
    } else alert("Füge eine Aufgabe ein");

    check.addEventListener("click", function(){

        if(check.checked === true){
        item.style.textDecoration = "line-through";
        } else item.style.textDecoration = "none";
    })

    item.addEventListener("dblclick", function(){
        //remove item = Item + Check sind weg 
        toDoContainer.removeChild(item);
        
    })
}