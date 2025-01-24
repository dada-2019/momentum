const toDoForm =document.querySelector("#todo-form");
const todoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#to-list");
const TODOS_KEY = "todos";
let toDos = [];

function saveToDos(){
   
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo (event){
    const li = event.target.parentElement;
    li.remove();    //화면에서 삭제
    
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));  //filter함수를 이용해서 id값이 같지 않은 것만 배열에 저장
    saveToDos();   //삭제된 값을 다시 local storage에 저장
}

function paintToDo (newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;    //li에 id값을 저장
    const span = document.createElement("span");
    span.innerText = newTodo.text;  //span에 text값을 저장
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
    
    const newTodoObj={
        //todo를 입려하면 객체를 만들어서 배열에 저장
        text : newTodo,   //입력한 todo값을 text에 저장
        id : Date.now(),  //id값을 현재시간으로 설정
    }

    toDos.push(newTodoObj);       //local storage에 저장하기위해 배열에 일단 먼저 저장
    paintToDo (newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const getSavetoDos = localStorage.getItem(TODOS_KEY);
if(getSavetoDos !== null){
    const pasredToDos = JSON.parse(getSavetoDos);  //local storage에 저장된 값을 가져와서 배열로 변환
    toDos = pasredToDos;  //이전에 저장된 투두를 배열에 저장
    pasredToDos.forEach(paintToDo);  //배열에 있는 값들을 하나씩 가져와서 화면에 출력
}
