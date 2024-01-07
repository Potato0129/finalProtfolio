const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDoLi(event) {
  const li = event.target;
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  li.remove();
  saveToDos();
}

function deleteToDoSpan(event) {
  const span = event.target.parentElement;
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(span.id));
  span.remove();
  saveToDos()
}

function paintToDos(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  li.addEventListener("click", deleteToDoLi);
  span.addEventListener("click", deleteToDoSpan);
  li.appendChild(span);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObject = {
    text: newTodo,
    id: Date.now()
  }
  toDos.push(newToDoObject);
  paintToDos(newToDoObject);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem("todos");
if(savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDos);
}