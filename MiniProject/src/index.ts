const btn = document.getElementById("btn")!;
const input = document.getElementById("todoinput")! as HTMLButtonElement;
const form = document.querySelector("form")!;
const list = document.getElementById("todolist")!;

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  console.log("SUBMITTED!");

  const newTodoText = input.value;
  const newLI = document.createElement("LI");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  newLI.append(newTodoText);
  list.append(newLI);
  newLI.append(checkbox);
  input.value = "";
}

form.addEventListener("submit", handleSubmit);
