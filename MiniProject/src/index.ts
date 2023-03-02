const btn = document.getElementById("btn")!;
const input = document.getElementById("todoinput")! as HTMLButtonElement;
const form = document.querySelector("form")!;
const list = document.getElementById("todolist")!;

function readTodos(): Todo[] {
  const todosJSON = localStorage.getItem("todos");
  if (todosJSON == null) return [];
  return JSON.parse(todosJSON);
}

interface Todo {
  text: string;
  completed: boolean;
}
const todos: Todo[] = readTodos();
todos.forEach(createTodo);

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };
  todos.push(newTodo);

  saveTodos(todos);
  createTodo(newTodo);

  input.value = "";
}

function createTodo(todo: Todo) {
  const newLI = document.createElement("LI");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.completed;

  checkbox.addEventListener("change", () => {
    todo.completed = checkbox.checked;
    saveTodos(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  newLI.append(todo.text);
  newLI.append(checkbox);
  list.append(newLI);
}

function saveTodos(todos: Todo[]) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

form.addEventListener("submit", handleSubmit);
