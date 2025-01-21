const toDoForm =document.querySelector("#todo-form");
const todoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#to-list");
const toDos = [];

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
    toDos.push(newTodo);
    paintToDo (newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
