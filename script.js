const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUl = document.getElementById("todosUl");

//checking items in localstorage
const todos = JSON.parse(localStorage.getItem('todos'));
if(todos){
    todos.forEach(todo => addToDo(todo))
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addToDo();
});

function addToDo(todo) {
  let todotext = input.value;

  if (todo) {
    todotext = todo.text
  }

  if (todotext) {
    const todoEl = document.createElement("li");
    if (todo && todo.completed) {
      todoEl.classList.add("completed");
    }

    todoEl.innerText = todotext;
    todoEl.addEventListener("click", () =>{
        todoEl.classList.toggle("completed")
        updateLS();
    }
    );
    todoEl.addEventListener("dblclick", (e) =>{
        e.preventDefault();
        todoEl.remove()
    }
    );

    todosUl.appendChild(todoEl);
    input.value = "";

    updateLS();
  }
}

function updateLS(){
    todosEl = document.querySelectorAll('li')
    const todos = []

    todosEl.forEach(todoEl =>{
        todos.push({
            text : todoEl.innerText,
            completed:todoEl.classList.contains("completed")
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}