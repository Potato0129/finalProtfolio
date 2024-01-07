const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
const greeting = document.querySelector("#greeting");
const greetingSpan = document.querySelector("#greeting span");
const box1 = document.querySelector("#box1")
const box2 = document.querySelector("#box2");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userKey"

const savedUserName = localStorage.getItem(USERNAME_KEY);

function loginSubmit(event){
  event.preventDefault();
  box2.style.display = "flex";
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  greetingSpan.innerText = `Hello, ${userName}.`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

if(savedUserName === null) {
  box2.style.display = "none";
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", loginSubmit);
}else {
  box2.style.display = "flex";
  greetingSpan.innerText = `Hello, ${savedUserName}.`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}