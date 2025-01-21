const toDoForm =document.querySelector("#todo-form");
const todoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#to-list");
const TODOS_KEY = "todos";
const toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo (event){
    const li = event.target.parentElement;
    li.remove();

}

function paintToDo (newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);

}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;    
    todoInput.value = "";
    toDos.push(newTodo);       //local storage에 저장하기위해 배열에 일단 먼저 저장
    paintToDo (newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const getSavetoDos = localStorage.getItem(TODOS_KEY);
if(getSavetoDos !== null){
    const pasredToDos = JSON.parse(getSavetoDos);  //local storage에 저장된 값을 가져와서 배열로 변환
    pasredToDos.forEach((item) => console.log("this is the turn of", item));

}
